import config from '@/config';
import user from '@/store/modules/user';
import settings from '@/store/modules/settings';

/**
 * Vuex plugin for save and sync 'settings' and 'user' from vuex modules.
 */
class SyncStorage {
  constructor(option) {
    /** init options */
    this.storage = (window && window[option.storage]) || (window && window[config.storage]);
    this.prefix = option.prefix || config.prefix;
    this.ttl = option.ttl || config.ttl;
    this.user = 'user';
    this.settings = 'settings';

    this.userMutations = this.getModuleOptions(user, 'mutations');
    // this.userActions = this.getModuleOptions(user, 'actions');
    this.settingsMutations = this.getModuleOptions(settings, 'mutations');
    // this.settingsActions = this.getModuleOptions(settings, 'actions');

    console.log('[vuex.SyncStorage] option:',
      option.storage || config.storage, this.prefix, this.ttl, option);
  }

  /**
   * Vuex subscribe plugin function.
   * @param {Object} store Vuex instance
   */
  subscribe = async (store) => {
    if (!this.checkStorage()) {
      throw new Error('[vuex.SyncStorage] Invalid "Storage" instance given');
    }

    if (this.checkVersion(config.version)) {
      console.log(`[vuex.SyncStorage] Current version of the application "${config.version}"`);
    } else {
      console.warn(`[vuex.SyncStorage] Application version updated to "${config.version}"`);
    }

    // init and apply user state from storage
    if (this.initUserState(store)) {
      await store.dispatch('GenerateRoutes', { roles: store.getters.roles });
      console.log('[vuex.SyncStorage] initUserState');
    } else {
      console.warn('[vuex.SyncStorage] No user state in "Storage"');
    }

    // init and apply settings state from storage
    if (this.initSettingsState(store)) {
      console.log('[vuex.SyncStorage] initSettingsState');
    } else {
      console.warn('[vuex.SyncStorage] No user settings in "Storage"');
    }

    store.subscribe((mutation, state) => {
      // console.log('storage subscribe', mutation.type);
      if (this.userMutations.includes(mutation.type)) {
        // console.log('storage subscribe user_mutations', mutation, state);
        this.setToStorage(`${this.prefix}${this.user}`, JSON.stringify(state.user));
        if (mutation.type === 'SET_TOKEN') {
          this.setToStorage(`${this.prefix}ttl`, this.getSeconds(this.ttl));
        }
      }
      if (this.settingsMutations.includes(mutation.type)) {
        // console.log('storage subscribe settings_mutations', mutation, state);
        this.setToStorage(`${this.prefix}${this.settings}`, JSON.stringify(state.settings));
      }
    });

    /* store.subscribeAction({
      after: (action, state) => {
        // console.log('storage subscribeAction after ', action.type);
        if (this.userActions.includes(action.type)) {
          console.log('storage subscribeAction user_actions after', action, state);
        }
        if (this.settingsActions.includes(action.type)) {
          console.log('storage subscribeAction settings_actions after', action, state);
        }
      },
      before: (action, state) => {
        // console.log('storage subscribeAction before ', action.type);
        if (this.userActions.includes(action.type)) {
          console.warn('storage subscribeAction user_actions before', action, state);
        }
        if (this.settingsActions.includes(action.type)) {
          console.warn('storage subscribeAction settings_actions before', action, state);
        }
      }
    }); */
  };

  /**
   * Get current seconds + ttl.
   * @param {Number} ttl Session lifetime
   */
  getSeconds = (ttl) => Math.floor(Date.now() / 1000) + (ttl || 0);

  /**
   * Get array of module mutation types.
   */
  getModuleOptions = (module, key) => {
    if (!module || !module[key]) return [];
    return Object.keys(module[key]);
  };

  /**
   * Check LocalStorage to read/write.
   */
  checkStorage() {
    try {
      this.storage.setItem(`${this.prefix}@@`, 1);
      this.storage.removeItem(`${this.prefix}@@`);
    } catch (err) {
      console.error(`[vuex.SyncStorage] Check storage failed: ${err}`);
      return false;
    }
    return true;
  }

  /**
   * Check application version.
   * If the version of the application has changed, then the storage is cleared of the session
   * and settings. Required to apply the settings of the new version of the application
   * @param {String} version version of the application
   */
  checkVersion(version) {
    try {
      if (this.getFromStorage(`${this.prefix}version`) === version) {
        return true;
      }

      this.storage.clear();
      this.setToStorage(`${this.prefix}version`, version);
    } catch (err) {
      console.error(`[vuex.SyncStorage] Check version failed: ${err}`);
    }
    return false;
  }

  /**
   * Get user info from storage.
   */
  initUserState(store) {
    const userTTL = parseInt(this.getFromStorage(`${this.prefix}ttl`) || 0, 10);
    if (userTTL < this.getSeconds()) {
      console.warn('[vuex.SyncStorage] Session expired');
      store.commit('SET_USER_INFO', { logout: true });
      return false;
    }

    const userState = this.getFromStorage(`${this.prefix}${this.user}`);
    if (userState) {
      store.commit('SET_USER_INFO', JSON.parse(userState));
      return true;
    }
    return false;
  }

  /**
   * Get settings from storage.
   */
  initSettingsState(store) {
    const settingsState = this.getFromStorage(`${this.prefix}${this.settings}`);
    if (settingsState) {
      store.commit('SET_SETTINGS', JSON.parse(settingsState));
      return true;
    }
    return false;
  }

  /**
   * Get data to storage.
   * @param {String} key
   * @param {String} value
   */
  setToStorage(key, value) {
    try {
      this.storage.setItem(key, value);
    } catch (err) {
      console.error(`[vuex.SyncStorage] setItem storage failed: ${err}`);
      return false;
    }
    return true;
  }

  /**
   * Get data from storage.
   * @param {String} key
   */
  getFromStorage(key) {
    try {
      return this.storage.getItem(key);
    } catch (err) {
      console.error(`[vuex.SyncStorage] getItem storage failed: ${err}`);
    }
    return '';
  }
}

export default function (syncStorageOption) {
  const syncStorage = new SyncStorage(syncStorageOption);
  return syncStorage.subscribe;
}

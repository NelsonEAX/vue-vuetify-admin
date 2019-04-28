// import permission from '../modules/permission';
import user from '../modules/user';

class SyncStorage {
  constructor(syncStorageOption) {
    /** init options */
    this.prefix = syncStorageOption.prefix || 'vuex_';
    this.storage = syncStorageOption.storage || (window && window.localStorage);

    this.userMutations = this.getModuleOptions(user, 'mutations');
    this.userActions = this.getModuleOptions(user, 'actions');

    console.log('syncStorageOption: ', syncStorageOption);
    console.log('syncStorageInit', this.prefix, this.storage, this.userMutations, this.userActions);
  }

  /** vuex plugin function */
  subscribe = store => {
    if (!this.checkStorage()) {
      throw new Error('Invalid "Storage" instance given');
    }

    if (!this.initUserState(store)) {
      console.warn('No user state in "Storage"');
    }

    store.subscribe((mutation, state) => {
      // console.log('storage subscribe ', mutation.type);
      if (this.userMutations.includes(mutation.type)) {
        // console.log('storage subscribe user_mutations', mutation, state);
        this.setToStorage(`${this.prefix}user`, JSON.stringify(state.user));
        // storage.setItem('vva_user', JSON.stringify(state.user));
      }
    });

    store.subscribeAction({
      after: (action, state) => {
        // console.log('storage subscribeAction after ', action.type);
        if (this.userActions.includes(action.type)) {
          console.log('storage subscribeAction user_actions after', action, state);
        }
      },
      before: (action, state) => {
        // console.log('storage subscribeAction before ', action.type);
        if (this.userActions.includes(action.type)) {
          console.warn('storage subscribeAction user_actions before', action, state);
        }
      }
    });
  };

  /** declare methods */
  // Get array of module matation types
  getModuleOptions = (module, key) => {
    if (!module || !module[key]) return [];
    return Object.keys(module[key]);
  };

  // Check LocalStorage to read/write
  checkStorage() {
    // console.time('checkStorage');
    try {
      this.storage.setItem(`${this.prefix}@@`, 1);
      this.storage.removeItem(`${this.prefix}@@`);
    } catch (e) {
      // console.error(`Check storage failed: ${e}`);
      return false;
    }
    // console.timeEnd('checkStorage');
    return true;
  }

  initUserState(store) {
    const userState = this.getFromStorage(`${this.prefix}user`);
    if (userState) {
      store.commit('SET_USER_INFO', JSON.parse(userState));
      return true;
    }
    return false;
  }

  // set state to Storage
  setToStorage(key, value) {
    // console.time('setToStorage');
    try {
      this.storage.setItem(key, value);
    } catch (e) {
      // console.error(`setItem storage failed: ${e}`);
      return false;
    }
    // console.timeEnd('setToStorage');
    return true;
  }

  // get state from Storage
  getFromStorage(key) {
    // console.time('getFromStorage');
    try {
      return this.storage.getItem(key);
    } catch (e) {
      // console.error(`getItem storage failed: ${e}`);
    }
    // console.timeEnd('getFromStorage');
    return '';
  }
}

export default function (syncStorageOption) {
  const syncStorage = new SyncStorage(syncStorageOption);
  return syncStorage.subscribe;
}

import permission from '../modules/permission';
import user from '../modules/user';

// Get array of module matation types
const getModuleOptions = (module, key) => {
  if (!module || !module[key])
    return [];

  return Object.keys(module[key]);
};

// Check LocalStorage to read/write
const checkStorage = (storage) => {
  console.time('checkStorage');
  try {
    storage.setItem('@@', 1);
    storage.removeItem('@@');
  } catch (e) {
    console.error(`Check storage failed: ${e}`);
    return false;
  }
  console.timeEnd('checkStorage');
  return true;
};

//
const setToStarage = (storage, key, value) => {
  console.time('setToStarage');
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.error(`setItem storage failed: ${e}`);
    return false;
  }
  console.timeEnd('setToStarage');
  return true;
};

export default function (store, storage) {
  // options = options || {};
  storage = store.storage || (window && window.localStorage);
  const pref = /* options.key || key || */ 'vuex_';
  
  console.log('storage init', store, storage);
  store.commit('SET_USER_INFO', JSON.parse(storage.getItem('vuex_user')));
  

  const user_mutations = getModuleOptions(user, 'mutations');
  const user_actions = getModuleOptions(user, 'actions');
  console.log('storage user', user_mutations, user_actions);

  if (!checkStorage(storage)) {
    throw new Error('Invalid storage instance given');
  }

  store.subscribe((mutation, state) => {
    if (user_mutations.includes(mutation.type)) {
      console.log('storage subscribe user_mutations', mutation, state);
      setToStarage(storage, `${pref}user`, JSON.stringify(state.user));
      // storage.setItem('vva_user', JSON.stringify(state.user));
    }
  });

  store.subscribeAction({
    after: (action, state) => {
      if (user_actions.includes(action.type)) {
        console.log('storage subscribeAction user_actions after', action, state);
      }
    },
    before: (action, state) => {
      if (user_actions.includes(action.type)) {
        console.warn('storage subscribeAction user_actions before', action, state);
      }
    }
  });
}

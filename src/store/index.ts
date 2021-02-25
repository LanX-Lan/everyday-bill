import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);


const localStoreRecordList = 'RecordList';
const store = new Vuex.Store({
  state: {
    recordList: []
  } as RootState,
  mutations: {
    initRecordList: state => {
      state.recordList = JSON.parse(window.localStorage.getItem(localStoreRecordList) || '[]') as RecordItem[];
    },
    updateRecordList(state, record: RecordItem) {
      store.commit('initRecordList');
      const record2 = clone(record) as RecordItem;
      record2.createAt = new Date();
      record2.id = createId();
      state.recordList.push(record2);
      store.commit('saveRecordList');
    },
    saveRecordList(state) {
      window.localStorage.setItem(localStoreRecordList, JSON.stringify(state.recordList));
    }
  },
});
export default store;

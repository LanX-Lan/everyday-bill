import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import createTagId from '@/lib/createTagId';

Vue.use(Vuex);


const localStoreRecordList = 'RecordList';
const localStoreTagList = 'TagList';
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    duplicate: ''
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
    },
    initTagList(state) {
      state.tagList = JSON.parse(window.localStorage.getItem(localStoreTagList) || '[]') as Tag[];

    },
    createTagList(state, tag: Tag) {
      state.duplicate = '';
      const texts = state.tagList.filter(item => tag.type.value === item.type.value).map(tag => tag.text);
      if (texts.indexOf(tag.text) >= 0) {
        state.duplicate = 'duplicate';
        return;
      } else {
        const tag1 = clone(tag) as Tag;
        tag1.id = createTagId();
        state.tagList.push(tag1);
        store.commit('saveTagList');
      }
    },
    removeTag(state, id: number) {
      let index!: number;
      for (let i = 0; i < state.tagList.length; i++) {
        if (id === state.tagList[i].id) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit('saveTagList');
    },
    saveTagList(state) {
      window.localStorage.setItem(localStoreTagList, JSON.stringify(state.tagList));
    }
  },
});
export default store;

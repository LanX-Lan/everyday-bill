import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import createTagId from '@/lib/createTagId';
import createIconId from '@/lib/createIconId';

Vue.use(Vuex);


const localStoreRecordList = 'RecordList';
const localStoreTagList = 'TagList';
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    iconList: [],
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
      if (state.tagList.length <= 0) {
        const item = {type: {text: '支出', value: '-'}};
        const item2 = {type: {text: '收入', value: '+'}};
        const tag1 = {...item, text: '衣', name: 'cloth'};
        const tag2 = {...item, text: '食', name: 'rice'};
        const tag3 = {...item, text: '住', name: 'home'};
        const tag4 = {...item, text: '行', name: 'bus'};
        const tag5 = {...item2, text: '奖金', name: 'prize'};
        const tag6 = {...item2, text: '股票', name: 'stock'};
        const tag7 = {...item2, text: '工资', name: 'salary'};
        const tag8 = {...item2, text: '其他', name: 'other'};
        store.commit('createTagList', tag1);
        store.commit('createTagList', tag2);
        store.commit('createTagList', tag3);
        store.commit('createTagList', tag4);
        store.commit('createTagList', tag5);
        store.commit('createTagList', tag6);
        store.commit('createTagList', tag7);
        store.commit('createTagList', tag8);
      }
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
    },
    createIcon(state, name: string) {
      const icon = {type: {text: '', value: ''}, text: '', name: ''} as Tag;
      icon.name = name;
      icon.id = createIconId();
      state.iconList.push(icon);
    },
    initIcon(state) {
      const names = [
        'bus', 'car', 'cloth', 'fruit', 'health', 'home', 'other', 'prize', 'rice', 'salary', 'stock', 'education',
        'child', 'money', 'drink', 'camera', 'computer', 'wine', 'exercise', 'phone', 'wallet', 'redpacket',
        'reimbursement', 'travel', 'game'
      ];
      if (state.iconList.length <= 0) {
        for (let i = 0; i < names.length; i++) {
          store.commit('createIcon', names[i]);
        }
      }
    }
  },
});
export default store;

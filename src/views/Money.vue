<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <Tabs :data-source="types" :value.sync="record.type"/>
      </template>
      <Tags :tag-list="tagList" :selected.sync="record.tags">
        <router-link to="/label">
          <Icon name="addTag"/>
          <span>新增</span>
        </router-link>
      </Tags>
      <Note :number="output" :note.sync="record.note" :date.sync="record.noteDate"/>
      <NumberPad :value.sync="record.amount" :output.sync="output" @submit="onSubmit"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/money/Tags.vue';
  import Note from '@/components/money/Note.vue';
  import Tabs from '@/components/Tabs.vue';
  import NumberPad from '@/components/money/NumberPad.vue';
  import clone from '@/lib/clone';

  @Component({
    components: {NumberPad, Tabs, Note, Tags, Layout}
  })
  export default class Money extends Vue {

    types: DataSource[] = [{text: '支出', value: '-',}, {text: '收入', value: '+',}];
    record: RecordItem = {
      tags: [],
      type: {text: '支出', value: '-'},
      note: '',
      noteDate: new Date(),
      amount: 0
    };
    output = '0';

    get tagList() {
      return (this.$store.state as RootState).tagList.filter(tag => tag.type.value === this.record.type.value);
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    onSubmit() {
      const record2 = clone(this.record) as RecordItem;
      this.$store.commit('updateRecordList', record2);
      this.record.tags = [];
      this.record.note = '';
    }

    created() {
      this.$store.commit('initRecordList');
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .layout {
      .container {
        display: flex;
        flex-direction: column;
      }

    }

    .numberPad {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }
</style>

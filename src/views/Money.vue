<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <Tabs :data-source="types" :value.sync="record.type"/>
      </template>
      <Tags :tag-list="tagList" :selected.sync="record.tags"/>
      <Note :number="output" :note.sync="record.note" :date.sync="record.chartAt"/>
      <NumberPad :value.sync="record.amount" :output.sync="output" @submit="onSubmit"/>
      {{recordList}}
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
    output = '0';
    tagList: Tag[] = [
      {id: 1, text: '交通', name: 'bus'},
      {id: 2, text: '水果', name: 'fruit'},
      {id: 3, text: '医院', name: 'health'}
    ];
    record: RecordItem = {
      tags: [],
      type: {text: '支出', value: '-'},
      note: '',
      chartAt: (new Date()).toISOString(),
      amount: 0
    };
    recordList: RecordItem[] = [];

    onSubmit() {
      console.log(1);
      const record2 = clone(this.record) as RecordItem;
      this.recordList.push(record2);
      this.record.tags = [];
      this.record.note = '';
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

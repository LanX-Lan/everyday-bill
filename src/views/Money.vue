<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <Tabs :data-source="types" :value.sync="record.type"/>
      </template>
      <template :slot="'default'">
        <Tags :tag-list="tagList"/>
        <Note :number="output"/>
        <NumberPad :value.sync="record.amount" :output.sync="output"/>
        {{record}}
      </template>
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
    record: RecordItem = {tags: [], type: {text: '支出', value: '-'}, note: '', chartAt: '', amount: 0};
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

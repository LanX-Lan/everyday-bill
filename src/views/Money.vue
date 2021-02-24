<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <Tabs :value.sync="type"/>
      </template>
      <template :slot="'default'">
        <Tags :tag-list="tagList"/>
        <Note/>
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

  type Record = {
    tags: Tag[];
  }
  @Component({
    components: {Tabs, Note, Tags, Layout}
  })
  export default class Money extends Vue {

    type = '-';
    tagList: Tag[] = [
      {id: 1, text: '交通', name: 'bus'},
      {id: 2, text: '水果', name: 'fruit'},
      {id: 3, text: '医院', name: 'health'}
    ];
    select(type: string) {
      this.type = type;
    }
  }
</script>

<style lang="scss" scoped>


</style>

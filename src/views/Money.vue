<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <ol class="type">
          <li :class="{selected: type==='-'}" @click="select('-')">支出</li>
          <li :class="{selected: type==='+'}" @click="select('+')">收入</li>
        </ol>
      </template>
      <template :slot="'default'">
        <Tags :tag-list="tagList"/>
        <Note />
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

  type Record = {
    tags: Tag[];
  }
  @Component({
    components: {Note, Tags, Layout}
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
  @import "~@/assets/style/helper.scss";

  .type {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;

    li {
      padding: 5px 20px;
      border: 1px solid black;
      font-weight: 700;
    }

    li:nth-child(1) {
      border-radius: 5px 0 0 5px;
    }

    li:nth-child(2) {
      border-radius: 0 5px 5px 0;
    }

    > .selected {
      background: black;
      color: #ffffff;
    }
  }

</style>

<template>
  <Layout :back="true">
    <ol>
      <li>
        <span><Icon :name="record.tag.name"/></span>
        <span>{{record.tag.text}}</span>
      </li>
      <li>
        <span>金额：</span>
        <span>{{record.amount}}</span>
      </li>
      <li>
        <span>类型：</span>
        <span>{{record.type.text}}</span>
      </li>
      <li>
        <span>日期：</span>
        <span>{{beautyDate(record.noteDate)}}</span>
      </li>
      <li>
        <span>备注：</span>
        <span>{{record.note}}</span>
      </li>
    </ol>
    <div class="button-wrapper">
      <button class="button" @click="remove( record.id)">删除标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class EditBill extends Vue {
    record!: RecordItem;

    beautyDate() {
      return dayjs(this.record.noteDate).format('YYYY-M-D');
    }

    remove(id: number) {
      this.$store.commit('removeRecord', id);
      this.$router.back();
    }

    created() {
      this.record = JSON.parse(this.$route.query.record as string) as RecordItem;
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  ol {
    > li {
      padding: 15px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $border-color;

      > span {
        min-width: 42px;
      }
    }


  }

  span > .icon {
    width: 32px;
    height: 32px;
    color: $bg;
  }

  .button {
    background: $bg;
    border: none;
    padding: 10px 15px;
    color: #fff;
    border-radius: 5px;
    margin: auto;

    &-wrapper {
      padding-top: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
</style>

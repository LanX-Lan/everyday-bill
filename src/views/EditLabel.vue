<template>
  <Layout :back="true" :nav="false">
    <div class="bar-wrapper">
      <span>分类名称：</span>
      <label>
        <input placeholder="点击输入"/>
      </label>
    </div>
    <div class="bar-wrapper">
      <span>收支类型：</span>
      <span>支出</span>
    </div>
    <div class="bar-wrapper">
      <span>分类图标</span>
      <span>点击下方图标可选着</span>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class EditLabel extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .bar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid $border-color;
  }

  input {
    border: none;
    text-align: right;
    background: transparent;
  }
</style>

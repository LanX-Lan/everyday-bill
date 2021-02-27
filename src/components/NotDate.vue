<template>
  <div class="no-data">
    <p>此月无数据，开来记账吧</p>
    <button class="button" @click="$router.push('/money')">点击记账</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NotDate extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .no-data {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .button {
      margin-top: 10px;
      background: $bg;
      border: none;
      padding: 10px 20px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 700;
    }
  }
</style>

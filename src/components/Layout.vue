<template>
  <div class="layout">
    <div class="header">
      <h3 class="title">
        天天记账
      </h3>
      <slot name="header"/>
    </div>
    <div class="container">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .layout {
    max-height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex-grow: 1;
    overflow: auto;
    padding: 0;
    /*position: relative;*/
  }

  .title {
    text-align: center;
    padding: 10px 0;
    color: #ffffff;
    font-weight: 700;
  }

  .header {
    background: $bg;
  }
</style>

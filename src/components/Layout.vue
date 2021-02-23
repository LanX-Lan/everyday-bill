<template>
  <div class="layout">
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
  .layout {
    max-height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex-grow: 1;
    overflow: auto;
  }
</style>

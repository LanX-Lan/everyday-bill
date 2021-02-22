<template>
  <div class="layout">
    <div class="container">
      <slot/>
    </div>
    <Nav />
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    border: 1px solid blue;
    flex-grow: 1;
  }
</style>

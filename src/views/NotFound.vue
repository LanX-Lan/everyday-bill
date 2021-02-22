<template>
  <div>
    404，你访问的页面不存在；
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NotFound extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>

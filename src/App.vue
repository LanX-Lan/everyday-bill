<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~@/assets/style/reset.scss';
  @import '~@/assets/style/helper.scss';

  #app {
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    color: #333;
    line-height: 1.5;
    background: #ffffff;
    position: relative;
  }
</style>

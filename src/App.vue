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

  @media screen and (min-width: 500px) {
    #app {
      margin: auto;
      max-width: 500px;
    }
  }
</style>

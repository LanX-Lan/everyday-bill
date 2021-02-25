<template>
  <div class="layout">
    <div class="header">

      <div class="title">
        <div @click="$router.back()" v-if="back" class="back">
          <Icon name="left"/>
        </div>
        <h3>
          天天记账
        </h3>
      </div>
      <slot name="header"/>
    </div>
    <div class="container">
      <slot/>
    </div>
    <Nav v-if="nav"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {
    @Prop({default: false, type: Boolean})
    back?: boolean | undefined;
    @Prop({default: true, type: Boolean})
    nav?: boolean | undefined;
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
    position: relative;

    > h3 {
      font-weight: 700;
    }

    > .back {
      position: absolute;
      left: 2px;
      @extend %clearFix;
    }

    ::v-deep .icon {
      height: 25px;
      width: 25px;
    }
  }

  .header {
    background: $bg;
  }
</style>

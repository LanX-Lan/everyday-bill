<template>
  <div class="nav-wrapper">
    <router-link to="/bill" class="item" active-class="selected">
      <Icon name="bill"></Icon>
      <span>账单</span>
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="add"></Icon>
      <span>记账</span>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="echart"></Icon>
      <span>统计</span>
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import '@/assets/icons/add.svg';
  import Icon from '@/components/Icon.vue';

  @Component({
    components: {Icon}
  })
  export default class Nav extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .nav-wrapper {
    @extend %outerShadow;
    display: flex;
    justify-content: space-between;
    padding: 5px 30px;
    font-size: 12px;

    > .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    > .item.selected {
      color: $bg;
    }

    .icon {
      height: 32px;
      width: 32px;
    }
  }
</style>

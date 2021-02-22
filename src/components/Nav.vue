<template>
  <div class="nav-wrapper">
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="add"></Icon>
      <span>money</span>
    </router-link>
    <router-link to="/bill" class="item" active-class="selected">
      <Icon name="bill"></Icon>
      <span>bill</span>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="echart"></Icon>
      <span>statistics</span>

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
  .nav-wrapper {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

    > .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    > .item.selected {
      color: #4e6ef2;
    }

    .icon {
      height: 32px;
      width: 32px;
    }
  }
</style>

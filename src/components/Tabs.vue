<template>
  <ol class="tabs">
    <li
      v-for="tab in dataSource"
      :key="tab.value"
      :class="liClass(tab)"
      @click="select(tab.value)">{{tab.text}}
    </li>
  </ol>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tabs extends Vue {
    @Prop(String) value!: string;
    @Prop(Array) dataSource!: DataSource[];
    @Prop(String) classPrefix!: string;

    liClass(tab: DataSource) {
      return {selected: tab.value === this.value, [this.classPrefix + 'item-content']: this.classPrefix};
    }

    select(type: string) {
      this.$emit('update:value', type);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tabs {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;

    li {
      padding: 5px 20px;
      border: 1px solid black;
      font-weight: 700;
    }

    li:nth-child(1) {
      border-radius: 5px 0 0 5px;
    }

    li:nth-child(2) {
      border-radius: 0 5px 5px 0;
    }

    > .selected {
      background: black;
      color: #ffffff;
    }
  }
</style>

<template>
  <Layout :back="true" :nav="false">
    <template slot="header">
      <Tabs :data-source="dataSource" :value.sync="type"/>
    </template>
    <div class="labels">
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
      <div class="label">
        <Icon name="bus"/>
        <span>交通</span>
        <div class="deleted">
          <Icon name="deleted"/>
        </div>
      </div>
    </div>
    <div class="button-wrapper">
      <button class="button" @click="$router.push('/editLabel')">新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Labels extends Vue {
    type: DataSource = {
      text: '支出',
      value: '-'
    };
    dataSource = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  ::v-deep .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .labels {
    overflow: auto;

    > .label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid $border-color;

      > span {
        margin-right: auto;
        padding-left: 10px;
      }

      .icon:nth-child(1) {
        width: 28px;
        height: 28px;
        color: $bg;
      }

      > .deleted {
        > .icon {
          width: 24px;
          height: 24px;
          color: red;
        }
      }
    }
  }

  .button-wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .button {
      border: none;
      background: $bg;
      color: #ffffff;
      border-radius: 5px;
      padding: 10px 100px;
      //@extend %clearFix;
    }
  }


</style>

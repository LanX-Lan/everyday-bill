<template>
  <div>
    <Layout ref="layout">
      <template :slot="'header'">
        <div class="money" ref="money">
          <div class="date">
            <span>2021</span>
            <span>2月x</span>
          </div>
          <div class="income">
            <span>收入</span>
            <span>0.00</span>
          </div>
          <div class="outcome">
            <span>支出</span>
            <span>1846.00</span>
          </div>
          <div class="total">
            <span>总计</span>
            <span>-184600</span>
          </div>
        </div>
      </template>
      <template :slot="'default'">
        <RecordPad :class-prefix="'record'"/>
      </template>

    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import RecordPad from '@/components/RecordPad.vue';

  @Component({
    components: {RecordPad}
  })
  export default class Bill extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .money {
    display: flex;
    justify-content: space-between;
    background: $bg;
    color: #fff;
    font-size: 14px;
    padding: 10px 0;

    > div:nth-child(n) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      min-width: 25%;

      > :nth-child(1) {
        padding-bottom: 10px;
      }
    }

    > .outcome {
      padding-left: 20px;
    }

    > .total {
      padding-left: 20px;
    }
  }

</style>

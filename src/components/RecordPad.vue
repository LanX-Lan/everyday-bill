<template>
  <div class="record-pad" :class="classPrefix && `${classPrefix}-content`">
    <div class="record-item">
      <div class="record-title">
        <span>2月22日</span>
        <span class="record-income">收入 0.00</span>
        <span>支出 25.00</span>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
    </div>
    <div class="record-item">
      <div class="record-title">
        <span>2月22日</span>
        <span class="record-income">收入 0.00</span>
        <span>支出 25.00</span>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
    </div>
    <div class="record-item">
      <div class="record-title">
        <span>2月22日</span>
        <span class="record-income">收入 0.00</span>
        <span>支出 25.00</span>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
    </div>
    <div class="record-item">
      <div class="record-title">
        <span>2月22日</span>
        <span class="record-income">收入 0.00</span>
        <span>支出 25.00</span>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
    </div>
    <div class="record-item">
      <div class="record-title">
        <span>2月22日</span>
        <span class="record-income">收入 0.00</span>
        <span>支出 25.00</span>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
      <div class="record">
        <Icon name="vegetables"/>
        <div class="name-money">
          <span>餐饮</span>
          <span>3.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class RecordPad extends Vue {
    @Prop(String) classPrefix: string | undefined;
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .record-pad {
    overflow: auto;
    flex-grow: 1;

    .record-item {
      > .record-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f3f3f3;
        padding: 10px 10px;
        font-size: 14px;

        > .record-income {
          margin-left: auto;
          padding-right: 10px;
        }
      }

      %record {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      > .record {
        padding: 10px 10px;
        @extend %record;

        .name-money {
          @extend %record;
          flex-grow: 1;
          margin-left: 15px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        }

        ::v-deep .icon {
          color: $bg;
          height: 42px;
          width: 42px;
        }

        &:last-child .name-money {
          border-bottom: none;
        }
      }
    }

  }
</style>

<template>
  <div class="record-pad" :class="classPrefix && `${classPrefix}-content`">
    <div class="record-item" v-for="(list,index) in dataSource" :key="index+'record-item'">
      <div class="record-title">
        <span>{{beauty(list.title)}}</span>
        <span class="record-income">收入 {{list.income}}</span>
        <span>支出 {{list.outcome}}</span>
      </div>
      <div class="record" v-for="item in list.items" :key="item.id+'record'">

        <div class="name-money">
          <span>{{tagString(item.tags)}}</span>
          <span class="note">{{item.note}}</span>
          <span>{{item.type.value}}{{item.amount}}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class RecordPad extends Vue {
    @Prop(String) classPrefix: string | undefined;
    @Prop(Array) dataSource!: Result[];

    beauty(date: Date) {
      const now = dayjs();
      const day = dayjs(date);
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else {
        return day.format('YYYY-M-D');
      }
    }

    tagString(tags: Tag[]) {
      const tagNames: string[] = tags.map(tag => tag.text);
      return tags.length === 0 ? '无' : tagNames.join(',');
    }
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
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        @extend %record;

        .name-money {
          @extend %record;
          flex-grow: 1;
          margin-left: 15px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);

          > .note {
            margin-right: auto;
            font-size: 12px;
            margin-left: 10px;
          }
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

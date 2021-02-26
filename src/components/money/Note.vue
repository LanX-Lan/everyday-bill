<template>
  <div>
    <div class="note">
      <label>
        备注
        <input placeholder="写点什么吧" @input="onInput($event.target.value)" :value="note" />
      </label>
    </div>
    <div class="date-money">
      <span @click="show=true">{{beautyDate}} <Icon name="down"/></span>
      <span class="number">{{number}}</span>
    </div>
    <PickerDate :show.sync="show" @update:pickerDate="updatePickerDate"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class Note extends Vue {
    @Prop(String) number!: string;
    @Prop(String) note!: string;
    @Prop(Date) date!: Date;
    show = false;

    get beautyDate() {
      const now = dayjs();
      const day = dayjs(this.date);
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else {
        return day.format('YYYY-M-D');
      }
    }

    onInput(value: string) {
      this.$emit('update:note', value);
    }

    updatePickerDate(date: Date) {
      this.$emit('update:date', date);
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  %note {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
  }

  .date-money {
    @extend %note;
    border-bottom: 1px solid $border-color;

    > .number {
      font-size: 20px;
      width: auto;
    }
  }

  .note {
    @extend %note;
    border: 1px solid $border-color;
    border-left: none;
    border-right: none;

    > button {
      border: none;
      color: #ffffff;
      background: $bg;
      padding: 5px 20px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    input {
      padding-left: 10px;
      font-size: 14px;
      border: none;
    }
  }

</style>

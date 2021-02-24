<template>
  <div>
    <div class="note">
      <label>
        备注
        <input placeholder="写点什么吧" @input="onInput($event.target.value)" :value="note"/>
      </label>
    </div>
    <div class="date-money">
      <span @click="show=true">{{this.date}}</span>
      <span class="number">{{number}}</span>
    </div>
    <Date :show.sync="show" @update:pickerDate="updatePickerDate"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Date from '@/components/Date.vue';

  @Component({
    components: {Date}
  })
  export default class Note extends Vue {
    @Prop(String) number!: string;
    @Prop(String) note!: string;
    @Prop(String) date!: string;
    show = false;

    onInput(value: string) {
      this.$emit('update:note', value);
    }

    updatePickerDate(date: string) {
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


    .date {
      input {
        background: transparent;
        border: none;
      }
    }

    .number {
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

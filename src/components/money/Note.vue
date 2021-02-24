<template>
  <div>
    <div class="note">
      <label>
        备注
        <input placeholder="写点什么吧" @input="onInput($event.target.value)" :value="note"/>
      </label>
    </div>
    <div class="date-money">
      <span class="date">今天</span>
      <span class="number">{{number}}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Note extends Vue {
    @Prop(String) number!: string;
    @Prop(String) note!: string;

    onInput(value: string) {
      this.$emit('update:note', value);
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

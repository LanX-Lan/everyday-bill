<template>
  <div>
    <div class="date-money">
      <span class="date">今天</span>
      <label>
        <input type="number" placeholder="0" value="" autofocus/>
      </label>
    </div>
    <div class="note">
      <label>
        备注
        <input name="" placeholder="写点什么吧"/>
      </label>
      <button>保存</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Note extends Vue {

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
    border: 1px solid $border-color;
    border-left: none;
    border-right: none;

    .date {

    }

    input {
      font-size: 20px;
      text-align: end;
      border: none;
      width: auto;
    }
  }

  .note {
    @extend %note;
    border-bottom: 1px solid $border-color;

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

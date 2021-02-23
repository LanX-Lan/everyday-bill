<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <ol class="type">
          <li class="selected">支出</li>
          <li>收入</li>
        </ol>
      </template>
      <template :slot="'default'">
        <div class="icons">
          <div class="icons-item">
            <Icon name="bus"/>
          </div>
          <div class="icons-item">
            <Icon name="fruit"/>
          </div>
          <div class="icons-item">
            <Icon name="health"/>
          </div>
          <div class="icons-item">
            <Icon name="prize"/>
          </div>
          <div class="icons-item">
            <Icon name="stock"/>
          </div>
          <div class="icons-item">
            <Icon name="bus"/>
          </div>
          <div class="icons-item">
            <Icon name="fruit"/>
          </div>
          <div class="icons-item">
            <Icon name="health"/>
          </div>
          <div class="icons-item">
            <Icon name="prize"/>
          </div>
          <div class="icons-item">
            <Icon name="stock"/>
          </div>
        </div>
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
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';

  @Component({
    components: {Layout}
  })
  export default class Money extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .type {
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

  .icons {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;

    ::v-deep .icon {
      height: 35px;
      width: 35px;
    }

    > .icons-item {
      padding: 15px;
      text-align: center;
      width: 20%;
    }


  }

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

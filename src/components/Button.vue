<template>
  <div class="button-wrapper">
    <button class="button" @click="$emit('click',$event)">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .button-wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > .button {
      border: none;
      background: $bg;
      color: #ffffff;
      border-radius: 5px;
      padding: 10px 100px;
    }
  }

</style>

<template>
  <div class="numberPad">

    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    @Prop(Number) value!: number;
    @Prop(String) output!: string;
    innerOutput: string = this.output.toString();

    inputContent(event: MouseEvent) {
      const button = event.target as HTMLButtonElement;
      const input = button.textContent as string;
      if (this.innerOutput.length > 15) {return;}
      if (this.innerOutput === '0') {
        if (input === '0') {
          return;
        }
        if ('0123456789'.indexOf(input) > 0) {
          this.innerOutput = input;
        } else if (input === '.') {
          this.innerOutput = this.innerOutput + input;
        }
        return;
      } else {
        if (input === '.' && this.innerOutput.includes('.')) {return;} else if (this.innerOutput.includes('.') && this.innerOutput.split('.')[1].length > 1) {return;}
        this.innerOutput = this.innerOutput + input;
      }
    }

    remove() {
      if (this.innerOutput.length <= 1) {
        this.innerOutput = '0';
      } else {
        this.innerOutput = this.innerOutput.slice(0, -1);
      }
    }

    clear() {
      this.innerOutput = '0';
    }

    ok() {
      this.$emit('update:value', parseFloat(this.innerOutput));
      this.$emit('submit');
      // this.innerOutput = '0';
    }

    @Watch('output')
    onChangeOutput() {
      if (this.output === '0') {
        this.innerOutput = '0';
      }
    }

    @Watch('innerOutput')
    onChangeInnerOutput() {
      this.$emit('update:output', this.innerOutput);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
    }

    .buttons {
      @extend %clearFix;

      > button {
        width: 25%;
        height: 64px;
        float: left;
        background-color: transparent;
        border: none;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 25*2%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: darken($bg, 4%);
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>

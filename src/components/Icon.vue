<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>

<script lang="ts">
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {requireAll(require.context('../assets/icons/', true, /\.svg$/));} catch (e) {console.log(e);}
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Icon extends Vue {
    @Prop({required: true, type: String})
    name: string | undefined;
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

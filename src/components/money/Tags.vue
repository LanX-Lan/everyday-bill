<template>
  <div class="tags">
    <div class="icons-item"
         :class="{selected:selectedTags.indexOf(tag)>=0}"
         v-for="tag in tagList"
         :key="tag.id" @click="toggle(tag)"
    >
      <Icon :name="tag.name"/>
      <span>{{tag.text}}</span>
    </div>
    <router-link to="/label" class="icons-item">
      <Icon name="addTag"/>
      <span>新增</span>
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) tagList!: Tag[];
    @Prop(Array) selected!: Tag[];

    get selectedTags() {
      return this.selected;
    }

    toggle(tag: Tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else if (this.selectedTags.indexOf(tag) < 0) {
        this.selectedTags.push(tag);
      }
      this.$emit('update:selected', this.selectedTags);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
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

      &.selected {
        color: $bg;
      }
    }
  }
</style>

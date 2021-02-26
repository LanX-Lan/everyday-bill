<template>
  <div class="tags">
    <div class="icons-item"
         :class="selectedClass(tag)"
         v-for="tag in tagList"
         :key="tag.id" @click="toggle(tag)"
    >
      <Icon :name="tag.name"/>
      <span v-if="showText">{{tag.text}}</span>
    </div>
    <div class="icons-item">
      <slot/>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) tagList!: Tag[];
    @Prop() selected!: Tag[] | Tag;
    @Prop({default: false, type: Boolean})
    single!: boolean;
    @Prop({default: true, type: Boolean})
    showText!: boolean;

    get selectedTags() {
      return this.selected as Tag[];
    }

    selectedClass(tag: Tag) {
      if (this.single) {
        return {selectedTag: (this.selected as Tag).id === tag.id};
      } else {
        return {
          selectedTags: this.selectedTags.indexOf(tag) >= 0
        };
      }
    }

    handelSelectedTags(tag: Tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else if (this.selectedTags.indexOf(tag) < 0) {
        this.selectedTags.push(tag);
      }
      this.$emit('update:selected', this.selectedTags);
    }

    handelSingle(tag: Tag) {
      this.$emit('update:selected', tag);
    }

    toggle(tag: Tag) {
      if (!this.single) {
        this.handelSelectedTags(tag);
      } else {
        this.handelSingle(tag);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    max-height: 409px;
    overflow: auto;

    ::v-deep .icon {
      height: 35px;
      width: 35px;
    }

    > .icons-item {
      padding: 15px;
      text-align: center;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.selectedTags {
        color: $bg;
      }

      &.selectedTag {
        color: $bg;
      }
    }
  }
</style>

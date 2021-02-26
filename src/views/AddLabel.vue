<template>
  <Layout :back="true" :nav="false">
    <div class="bar-wrapper">
      <span>分类名称：</span>
      <label>
        <input placeholder="点击输入" v-model="text" maxlength="5"/>
      </label>
    </div>
    <div class="bar-wrapper">
      <span>收支类型：</span>
      <span>{{type.text}}</span>
    </div>
    <div class="bar-wrapper">
      <span>分类图标</span>
      <span v-if="selectedTag.id === 0">点击下方图标可选着</span>
      <Icon v-else :name="selectedTag.name" class="selected"/>
    </div>
    <Tags :tag-list="tagList" :selected.sync="selectedTag" :single="true" :show-text="false"/>
    <Button @click="save">保存</Button>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tags from '@/components/money/Tags.vue';
  import Button from '@/components/Button.vue';

  type defaultList = {
    type: DataSource;
    text: string;
    name: string;
  }
  @Component({
    components: {Tags, Button}
  })
  export default class EditLabel extends Vue {
    type: DataSource = {} as DataSource;
    text = '';
    selectedTag: Tag = {id: 0, type: {text: '支出', value: '-'}, text: '交通', name: 'bus'};

    get tagList() {
      return (this.$store.state as RootState).iconList;
    }

    get newTag() {
      return {
        type: this.type,
        text: this.text,
        name: this.selectedTag.name,
      };
    }

    save() {
      if (this.text === '') {
        window.alert('请填写标签名');
      } else if (this.selectedTag.id === 0) {
        window.alert('请选择一个图标');
      } else {
        this.$store.commit('createTagList', this.newTag);
        if ((this.$store.state as RootState).duplicate === 'duplicate') {
          window.alert('标签名重复了');
          return;
        }
        window.alert('创建成功');
        this.$router.back();
      }

    }

    mounted() {
      this.$store.commit('initIcon');
    }

    created() {
      this.type = JSON.parse(this.$route.query.type as string || '{}') as DataSource;
      this.$store.commit('initTagList');
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .bar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid $border-color;
    font-size: 16px;

    > .icon {
      height: 32px;
      width: 32px;
      color: $bg;
    }
  }

  input {
    border: none;
    text-align: right;
    background: transparent;
  }
</style>

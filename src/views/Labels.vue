<template>
  <Layout :back="true" :nav="false">
    <template slot="header">
      <Tabs :data-source="dataSource" :value.sync="type"/>
    </template>
    <div class="labels">
      <div class="label" v-for="tag in tagList" :key="tag.id">
        <Icon :name="tag.name"/>
        <span>{{tag.text}}</span>
        <div class="deleted" @click="remove(tag.id)">
          <Icon name="deleted"/>
        </div>
      </div>
    </div>
    <Button @click="$router.push({path: `/addLabel/`,query:{type:JSON.stringify(type)}})">新增标签</Button>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    type: DataSource = {
      text: '支出',
      value: '-'
    };
    dataSource = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];

    get tagList() {
      return (this.$store.state as RootState).tagList.filter(tag => tag.type.value === this.type.value);
    }

    remove(id: number) {
      this.$store.commit('removeTag', id);
    }

    created() {
      this.type = this.$route.query as DataSource;
      this.$store.commit('initTagList');
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  ::v-deep .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .labels {
    overflow: auto;

    > .label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid $border-color;

      > span {
        margin-right: auto;
        padding-left: 10px;
      }

      .icon:nth-child(1) {
        width: 28px;
        height: 28px;
        color: $bg;
      }

      > .deleted {
        > .icon {
          width: 24px;
          height: 24px;
          color: red;
        }
      }
    }
  }


</style>

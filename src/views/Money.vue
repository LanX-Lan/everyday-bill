<template>
  <div>
    <Layout>
      <template :slot="'header'">
        <Tabs :data-source="types" :value.sync="record.type"/>
      </template>
      <Tags :tag-list="tagList" :selected.sync="record.tag" :single="true">
        <div @click="$router.push({path:'/label',query:record.type})" class="router">
          <Icon name="edit"/>
          <span>修改</span>
        </div>
      </Tags>
      <Note :number="output" :note.sync="record.note" :date.sync="record.noteDate"/>
      <NumberPad :value.sync="record.amount" :output.sync="output" @submit="onSubmit"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/money/Tags.vue';
  import Note from '@/components/money/Note.vue';
  import Tabs from '@/components/Tabs.vue';
  import NumberPad from '@/components/money/NumberPad.vue';
  import clone from '@/lib/clone';
  import appHelper from '@/mixins/appHelper';
  import {mixins} from 'vue-class-component';

  @Component({
    components: {NumberPad, Tabs, Note, Tags, Layout}
  })
  export default class Money extends mixins(appHelper) {

    types: DataSource[] = [{text: '支出', value: '-',}, {text: '收入', value: '+',}];
    record: RecordItem = {
      tag: {} as Tag,
      type: {text: '支出', value: '-'},
      note: '',
      noteDate: new Date(),
      amount: 0
    };
    output = '0';

    get tagList() {
      return (this.$store.state as RootState).tagList.filter(tag => tag.type.value === this.record.type.value);
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    onSubmit() {
      const tag = this.record.tag;
      if (Object.keys(tag).length > 0 && tag.constructor === Object) {
        console.log(this.record.tag);
        const record2 = clone(this.record) as RecordItem;
        this.$store.commit('updateRecordList', record2);
        window.alert('保存成功');
        this.record.tag = {} as Tag;
        this.record.note = '';
      } else {
        window.alert('请选择至少一个标签');
      }
    }

    created() {
      this.$store.commit('initTagList');
      this.$store.commit('initRecordList');
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  ::v-deep {
    .layout {
      .container {
        display: flex;
        flex-direction: column;
      }

    }

    .numberPad {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }

  ::v-deep .mu-picker .mu-datepicker {
    box-shadow: 5px 5px 5px $color-shadow;
  }

  .router {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

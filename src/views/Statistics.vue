<template>
  <div>
    <Layout ref="container">
      <template slot="header">
        <Tabs :data-source="dataSource" :value.sync="type"/>
      </template>
      <template>
        <SEchart :data-list="noteList" :type="type"/>
        <div class="title" @click="pickerShow = true">
          {{beautyDate(pickerAt)}}支出统计
          <Icon name="down"/>
        </div>
        <div class="bar-wrapper" v-for="note in noteList" :key="note.createAt">
          <Icon :name="note.tag.name"/>
          <div class="record">
            <span>{{note.tag.text}}</span>
            <span>{{percent(note.amount)}}</span>
            <span>{{note.amount}}</span>
          </div>
        </div>
        <PickerDate :picker-date.sync="pickerAt" :show.sync="pickerShow" picker-type="month"/>
        <div v-if="noteList.length<=0" class="no-data">暂无数据</div>
      </template>

    </Layout>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import appHelper from '@/mixins/appHelper';
  import {mixins} from 'vue-class-component';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';
  import SEchart from '@/components/SEchart.vue';
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const customParseFormat = require('dayjs/plugin/customParseFormat');

  @Component({
    components: {SEchart, Layout}
  })
  export default class Statistics extends mixins(appHelper) {
    dataSource: DataSource[] = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
    type: DataSource = {text: '支出', value: '-'};
    pickerAt: Date = new Date();
    pickerShow = false;

    get noteList() {
      dayjs.extend(customParseFormat);
      const {recordList} = this.$store.state as RootState;
      const newList = clone(recordList)
        .filter((record: RecordItem) => {
          return record.type.value === this.type.value;
        })
        .filter((record: RecordItem) => {
          return dayjs(record.noteDate).isSame(dayjs(this.pickerAt), 'month');
        }) as RecordItem[];
      let result: RecordItem[] = [];
      if (newList.length > 0) {
        result = [newList[0]] as RecordItem[];
        for (let i = 1; i < newList.length; i++) {
          const texts = result.map((item: RecordItem) => item.tag.text);
          const index = texts.indexOf(newList[i].tag.text);
          if (index >= 0) {
            const sum = result[index].amount + newList[i].amount;
            result[index].amount = parseFloat(sum.toFixed(2));
          } else {
            result.push(newList[i]);
          }
        }
      }
      return result.sort((a: RecordItem, b: RecordItem) => {return b.amount - a.amount;});
    }

    percent(number: number) {
      const total = this.noteList.reduce((sum: number, item: RecordItem) => {
        return sum + item.amount;
      }, 0);
      return parseFloat(((number / total) * 100).toFixed(2)) + '%';
    }

    beautyDate(date: Date) {
      return dayjs(date).format('YYYY年MM月');
    }

    created() {
      this.$store.commit('initRecordList');
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  $fs: 16px;
  .title {
    text-align: left;
    color: black;
    background: $title-bg;
    padding: 10px;
    font-size: $fs;
    display: flex;
    justify-content: flex-start;
    align-content: center;

    > .icon {
      width: 22px;
      height: 22px;
    }
  }

  .bar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: $fs;

    > .icon {
      height: 25px;
      width: 25px;
      color: $bg;
    }

    .record {
      flex-grow: 1;
      display: flex;
      padding: 15px 10px;
      justify-content: space-between;
      border-bottom: 1px solid $border-color;
    }


  }

  .no-data {
    text-align: center;
    padding-top: 30px;
  }
</style>

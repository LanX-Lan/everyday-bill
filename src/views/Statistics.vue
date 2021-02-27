<template>
  <div>
    <Layout ref="container">
      <template slot="header">
        <Tabs :data-source="dataSource" :value.sync="type"/>
      </template>
      <template>
        <div ref="echart" :style="{width:chartStyle.width,height: chartStyle.height}">11</div>
        <div class="title">202年2月支出统计</div>
        <div class="bar-wrapper" v-for="note in noteList" :key="note.createAt">
          <Icon :name="note.tag.name"/>
          <div class="record">
            <span>{{note.tag.text}}</span>
            <span>42.87%</span>
            <span>{{note.amount}}</span>
          </div>
        </div>
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
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const customParseFormat = require('dayjs/plugin/customParseFormat');

  @Component({
    components: {Layout}
  })
  export default class Statistics extends mixins(appHelper) {
    dataSource: DataSource[] = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
    type: DataSource = {text: '支出', value: '-'};
    chartStyle = {};

    get noteList() {
      dayjs.extend(customParseFormat);
      const {recordList} = this.$store.state as RootState;
      const date = dayjs('2021-02-02', 'YYYY-DD-MM');
      const newList = clone(recordList)
        .filter((record: RecordItem) => {
          return dayjs(record.noteDate).isSame(dayjs(date), 'month');
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

    mounted() {
      const chart = this.$refs.echart as HTMLDivElement;
      console.log(chart.clientWidth);
      this.chartStyle = {width: chart.clientWidth + 'px', height: chart.clientWidth / 2 + 'px'};
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
</style>

<template>
  <div ref="echart"
       class="echart"

       :style="{width:chartStyle.width,height: chartStyle.height}">
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class SEchart extends Vue {
    @Prop() readonly type!: DataSource;
    @Prop() readonly dataList!: RecordItem[];
    chartStyle = {};
    chart!: any;

    get options() {
      const option = {
        color: ['#7bb4eb', '#f6a25a', '#434247', '#8feb7c', '#f15b80', '#7f84e8'],
        title: {
          show: true,
          text: '',
          left: 'center',
          top: 'center',
          textStyle: {
            overflow: 'truncate',
            width: 85,
            fontSize: '14',
            fontWeight: '500',
            rich: {
              title1: {
                fontSize: '16',
                padding: [0, 0, 5, 0],
              }
            }
          }
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{b}<br />{d}%'
        },
        legend: {
          show: false
        },
        series:
          {
            center: ['50%', '50%'],
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            label: {
              width: '80',
              show: true,
              formatter: '{b}:{d}%'
            },
            emphasis: {
              label: {
                show: true,
              }
            },
            labelLine: {
              show: true
            },
            data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300.1, name: '视频广告'}
            ]
          }
      };
      option.series.data = this.optionsData;
      if (this.optionsData.length > 0) {
        option.title.text = '{title1|' + this.type.text + '}' + '\n' + this.total;
      } else {
        option.title.text = '';
      }
      return option;
    }

    get optionsData() {
      return this.dataList.map((item: RecordItem) => {
        return {
          value: item.amount,
          name: item.tag.text
        };
      });
    }


    get total() {
      return this.dataList.reduce((sum: number, item: RecordItem) => {
        return sum + item.amount;
      }, 0);
    }

    @Watch('dataList')
    onDataSourceChange() {
      this.options && this.chart.setOption(this.options);
    }

    mounted() {
      const chart = this.$refs.echart as HTMLDivElement;
      this.chartStyle = {width: chart.clientWidth + 'px', height: chart.clientWidth / 2 + 'px'};
      this.$nextTick(() => {
        const div1 = this.$refs.echart;
        this.chart = this.$echarts.init(div1);
        this.options && this.chart.setOption(this.options);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .no-data {

    text-align: center;
  }
</style>

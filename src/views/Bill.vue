<template>
  <div>
    <Layout ref="layout">
      <template :slot="'header'">
        <div class="money" ref="money">
          <div class="date" @click="show=true">
            <span>{{changedDate.year()}}</span>
            <span>{{changedDate.month()+1}}月 <Icon name="down"/></span>
          </div>
          <div class="income">
            <span>收入</span>
            <span>{{toFixed(totalIncome)}}</span>
          </div>
          <div class="outcome">
            <span>支出</span>
            <span>{{toFixed(totalOutcome)}}</span>
          </div>
          <div class="total">
            <span>总计</span>
            <span>{{toFixed(total)}}</span>
          </div>
        </div>
      </template>
      <template :slot="'default'">
        <RecordPad :class-prefix="'record'" :data-source="groupList"/>
      </template>
      <PickerDate :show.sync="show" :picker-date.sync="pickerDate" :picker-type="'month'"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import RecordPad from '@/components/RecordPad.vue';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';
  import {mixins} from 'vue-class-component';
  import appHelper from '@/mixins/appHelper';

  @Component({
    components: {RecordPad}
  })
  export default class Bill extends mixins(appHelper) {
    show = false;
    pickerDate: Date = new Date();

    get changedDate() {
      return dayjs(this.pickerDate);
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get totalOutcome() {
      let sum = 0;
      for (let i = 0; i < this.groupList.length; i++) {
        if (this.changedDate.isSame(dayjs(this.groupList[i].title), 'month')) {
          sum -= this.groupList[i].outcome!;
        }
      }
      return sum;
    }

    get totalIncome() {
      let sum = 0;
      for (let i = 0; i < this.groupList.length; i++) {
        if (this.changedDate.isSame(dayjs(this.groupList[i].title), 'month')) {
          sum += this.groupList[i].income!;
        }
      }
      return sum;
    }

    get total() {
      return this.totalIncome + this.totalOutcome;
    }

    get groupList() {
      const recordList = this.recordList;
      console.log(recordList);
      const newList = clone(recordList)
        .filter((record: RecordItem) => {return this.changedDate.isSame(dayjs(record.noteDate), 'month');})
        .sort(
          (a: RecordItem, b: RecordItem) => {
            return dayjs(b.noteDate).valueOf() - dayjs(a.noteDate).valueOf();
          });
      console.log('newList', newList);
      let result: Result[] = [];
      if (newList.length > 0) {
        result = [{title: newList[0].noteDate, items: [newList[0]]}];
        for (let i = 1; i < newList.length; i++) {
          const current = newList[i];
          const last = result[result.length - 1];
          if (dayjs(last.title).isSame(dayjs(current.noteDate), 'day')) {
            last.items.push(current);
          } else {
            result.push({title: current.noteDate, items: [current]});
          }
        }
        console.log('result', result);
      }
      console.log(result);
      result.map(group => {
        group.income = group.items.reduce((sum, item) => {
          if (item.type.value === '+') {
            return (sum + item.amount);
          }
          return sum;
        }, 0);
        group.outcome = group.items.reduce((sum, item) => {
          if (item.type.value === '-') {
            console.log('-', item.amount);
            return (sum + item.amount);
          }
          return sum;
        }, 0);
      });

      return result;
    }

    toFixed(num: number) {
      return parseFloat(num.toFixed(2));
    }

    created() {
      this.$store.commit('initRecordList');
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .money {
    display: flex;
    justify-content: space-between;
    background: $bg;
    color: #fff;
    font-size: 14px;
    padding: 10px 0;
    overflow-wrap: break-word;

    > div:nth-child(n) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      min-width: 25%;

      > :nth-child(1) {
        padding-bottom: 10px;
      }
    }

    > .outcome {
      padding-left: 20px;
    }

    > .total {
      padding-left: 20px;
    }
  }

</style>

<template>
  <div
    v-if="show"
    class="date"
  >
    <mu-date-picker
      display-color="#42b476"
      color="#42b476"
      :date.sync="picker"
      :max-date="maxDate"
      @change="pickerChange"
    >
      <div class="buttons">
        <button @click="cancel">取消</button>
        <button @click="confirm">确定</button>
      </div>
    </mu-date-picker>
  </div>

</template>

<script lang="js">
  export default {
    data() {
      return {
        picker: undefined,
        date: new Date(),
        maxDate: new Date()
      }
    },
    props: ['show', 'pickDate'],
    methods: {
      pickerChange(date) {
        this.date = date
      },
      cancel() {
        this.$emit('update:show', false)
      },
      confirm() {
        this.$emit('update:pickDate', this.date)
        this.$emit('update:show', false)
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .date {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::v-deep .mu-picker .mu-datepicker {
    box-shadow: 1px 1px 2px $color-shadow;

  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
      padding: 5px 15px;
      border: none;
      color: #42b476;
      background: transparent;
      font-weight: 600;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }
  }
</style>

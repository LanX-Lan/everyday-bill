<template>
  <div>
    <Layout>
      Statistics


    </Layout>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import appHelper from '@/mixins/appHelper';
  import {mixins} from 'vue-class-component';


  @Component({
    components: {Layout}
  })
  export default class Statistics extends mixins(appHelper) {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

</style>

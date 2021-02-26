import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export class TagHelper extends Vue {
  mounted() {
    const yMax = document.body.scrollHeight;
    console.log(yMax);
    setTimeout(function () {
      window.scrollTo(0, yMax);
    }, 0);
  }
}

export default TagHelper;


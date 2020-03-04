<template>
  <ul>
    <li v-for="(item, index) in moreArticles" :key="index">
      <a href="#">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
import tools from '@/common/tools'

export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      moreArticles: [],
    }
  },
  methods: {
    processProp(propData) {
      const newData = propData.map((item) => {
        return {
          title: tools.truncateString(item.fields.title, 60),
        }
      });

      this.moreArticles = newData;
    }
  },
  watch: {
    dataList() {
      this.processProp(this.dataList);
    }
  }
}
</script>

<style>

</style>
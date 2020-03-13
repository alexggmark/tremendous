<template>
  <ul v-if="loadedState">
    <li v-for="(article, index) in moreArticles" :key="index">
      <router-link :to="{name: 'Article', params: {handle: article.entryId}}">
        {{ article.title }}
      </router-link>
    </li>
  </ul>
  <ul v-else>
    <li v-for="i in 3" :key="i">
      <div class="skeleton--title-sm"></div>
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
    },
    loadedState: {
      type: Boolean,
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
          entryId: item.sys.id,
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
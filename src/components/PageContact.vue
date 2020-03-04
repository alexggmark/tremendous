<template>
  <section>
    <h1 style="font-size:70px;font-weight:black">{{pageTitle}}</h1>
    <span v-html="pageText"></span>
  </section>
</template>

<script>
import {ContentTasks} from '@/common/api'
import {pageDataBuilder} from '@/common/tools'

export default {
  data() {
    return {
      data: [],
    }
  },
  computed: pageDataBuilder,
  created() {
    ContentTasks.getArticleById(this.pageContentId)
      .then((content) => {
        this.data = content;
        console.log(content);
      })
      .catch((error) => {
        console.log(error);
      })
  },
}
</script>

<style>

</style>
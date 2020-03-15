<template>
  <main>
    <main-article :entry-id="entryId" :key="entryId" />
  </main>
</template>

<script>
import MainArticle from '@/components/MainArticle'

export default {
  components: {
    MainArticle,
  },
  data() {
    return {
      entryId: this.$route.params.handle,
    }
  },
  watch: {
    $route(to) {
      this.entryId = to.params.handle;
    }
  }
}
</script>

<style>

</style>
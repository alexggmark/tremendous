<template>
  <main>
    <main-article :entry-id="entryId"/>
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
  }
}
</script>

<style>

</style>
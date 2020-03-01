<template>
  <section>
    <homepage-article/>
    <article-grid/>
    <article-block/>
    <main-article/>
  </section>
</template>

<script>
import HomepageArticle from '@/components/HomepageArticle'
import ArticleGrid from '@/components/ArticleGrid'
import ArticleBlock from '@/components/ArticleBlock'
import MainArticle from '@/components/MainArticle'

export default {
  components: {
    HomepageArticle,
    ArticleGrid,
    ArticleBlock,
    MainArticle,
  }
}
</script>

<style>

</style>
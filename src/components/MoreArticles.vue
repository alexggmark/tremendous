<template>
  <ul>
    <li v-for="(title, index) in moreArticles" :key="index">
      <a href="#">{{ title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      moreArticles: [
        'Cases Spread in Western U.S., Jump in Iran, Korea: Virus Update',
        'Trump’s Coronavirus Response Bedeviled by Missteps, Raising...',
        'Powell’s ‘Whatever It Takes’ Moment Is Here, But Will It Work?',
      ]
    }
  }
}
</script>

<style>

</style>
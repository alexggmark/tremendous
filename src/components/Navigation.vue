<template>
  <ul>
    <li v-for="(link, index) in navigationLinks" :key="index">
      <a href="#">{{ link }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navigationLinks: [
        'Home',
        'Articles',
        'Information',
        'Web Design',
        'Web Development',
        'Contact Me',
      ]
    }
  }
}
</script>

<style>

</style>
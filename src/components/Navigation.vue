<template>
  <ul>
    <li v-for="(link, index) in navigationLinks" :key="index">
      <router-link :to="{name: 'Page', params: {type: link.type, id: link.id}}" v-if="link.type">
        {{ link.title }}
      </router-link>
      <router-link :to="{name: link.name}" v-if="link.name">
        {{ link.title }}
      </router-link>
      <a :href="link.url" v-if="link.url">
        {{ link.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navigationLinks: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>
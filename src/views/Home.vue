<template>
  <div class="container">
    <h1></h1>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Search from '../components/Search'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Search
  }
}
</script>

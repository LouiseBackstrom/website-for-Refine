<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hem />
  </div>
</template>

<script>
// @ is an alias to /src
import Hem from '@/components/hem/Hem.vue'

export default {
  name: 'home',
  components: {
    Hem
  }
}
</script>

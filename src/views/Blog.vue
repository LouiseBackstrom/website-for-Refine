<template>
  <div class="blog">
    <Blogg v-for="blogpost in entries" :key="blogpost.sys.id" :post="blogpost.fields" />
  <div>
  </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Blogg from '@/components/blogg/Blogg.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'blog',
  components: {
    Blogg,
    Footer
  },
   computed: {
      entries(){
          return this.$store.state.contentful;
      }
  },
  beforeMount(){
      this.$store.dispatch('fetchData')
  }
}
</script>

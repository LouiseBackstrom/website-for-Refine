<template>
  <div class="home">
    <Hem />
  <div>
    
   
  </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hem from '@/components/hem/Hem.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'home',
  components: {
    Hem,
    Footer
  }
}
</script>

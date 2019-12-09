<template>
  <div class="services">
    <Tjanster />
    <Footer />
  </div>
</template>

<script>

import Tjanster from '@/components/tjanster/Tjanster.vue'
import Footer from '@/components/footer/Footer.vue'


export default {
  name: 'services',
  components: {
    Tjanster,
    Footer
    
  }
}
</script>

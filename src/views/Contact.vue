<template>
  <div class="contact">
    <Kontakt />
    <Footer />
  </div>
</template>

<script>

import Kontakt from '@/components/kontakt/Kontakt.vue'
import Footer from '@/components/footer/Footer.vue'


export default {
  name: 'contact',
  components: {
    Kontakt,
    Footer 
    
  }
}
</script>

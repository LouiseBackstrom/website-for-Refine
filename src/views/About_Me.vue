<template>
  <div class="about_me">
    <OmMig />
    <Footer />
  </div>
</template>

<script>

import OmMig from '@/components/om_mig/OmMig.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'about_me',
  components: {
    OmMig,
    Footer
  }
}
</script>

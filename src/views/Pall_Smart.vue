<template>
  <div class="pall_smart">
    <PallSmartness />
    <Footer />
  </div>
</template>

<script>

import PallSmartness from '@/components/pall_smartness/PallSmartness.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'pall_smartness',
  components: {
    PallSmartness,
    Footer
  }
}
</script>

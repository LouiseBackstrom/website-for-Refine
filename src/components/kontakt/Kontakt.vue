<template>
  <div class="kontakt">
        <form
          class="grid"
          action="https://formspree.io/mgevgvdp"
          method="POST"
        >
          <h3 id="item1">Kontakta mig</h3>
          <label class="label" id="item2"><p>Namn</p></label>
          <input class="input1" id="item3" type="text" name="name">
          
          <label class="label" id="item4"><p>Email</p></label>
          <input class="input1" id="item5" type="email" name="_replyto">
          
          <label class="label" id="item6"><p>Meddelande</p></label>
          <textarea class="input2" id="item7" name="message"></textarea>

          <button id="item8" type="submit"><h3>Skicka</h3></button>
      </form>
  </div>
</template>

<script>

export default {
  name: 'Kontakt'
  
}


</script>

<style lang="scss">
@import './_kontakt.scss';
</style>
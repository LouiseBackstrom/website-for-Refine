<template>
  <div class="kontakt">
        <form
          class="grid"
          action="https://formspree.io/mgevgvdp"
          method="POST"
        >
          <h3 id="item1">Kontakta mig</h3>
          <label id="item2">Namn</label>
          <input class="input1" id="item3" type="text" name="name">
          
          <label id="item4">Email</label>
          <input class="input1" id="item5" type="email" name="_replyto">
          
          <label id="item6">Meddelande </label>
          <textarea class="input2" id="item7" name="message"></textarea>
         
          <!-- your other form fields go here -->

          <button id="item8" type="submit">Skicka</button>
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
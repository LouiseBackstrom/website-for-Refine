<template>
  <div class="kontakt">
      <div class="grid">
        <form>
          <input type="text" id="item1" class="input1" name="firstname" placeholder="First name">
          <input type="text" id="item2" class="input1" name="lastname" placeholder="Last name">
          <input type="text" id="item3" class="input1" placeholder="Email">
          <input type="text" id="item4" class="input2" placeholder="Meddelande">
          <div class="btn">Skicka</div>
        </form>
      </div>
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
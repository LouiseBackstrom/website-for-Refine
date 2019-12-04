<template>
  <div id="app">
    <nav>
      <router-link to="/">Hem</router-link>
      <router-link to="/about_me">Om Mig</router-link>
      <router-link to="/services">Tjänster</router-link>
      <router-link to="/pall_smart">Pall-Smartness</router-link>
      <router-link to="/why_refine">Varför Refine</router-link>
      <router-link to="/contact">Kontakt</router-link>
    </nav>
    <transition name="fade"><router-view/></transition>
  </div>
</template>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

  .fade-enter-active, .fade-leave-active {
 transition-property: opacity;
 transition-duration: .25s;
}
.fade-enter-active {
 transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
 opacity: 0
}
}


</style>

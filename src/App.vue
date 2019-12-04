<template>
  <div id="app">
    <nav>
      <div class="nav1"><router-link to="/">Hem</router-link></div>
      <div class="nav2"><router-link to="/about_me">Om Mig</router-link></div>
      <div class="nav3"><router-link to="/services">Tjänster</router-link></div>
      <div class="nav4"><router-link to="/pall_smart">Pall-Smartness</router-link></div>
      <div class="nav5"><router-link to="/why_refine">Varför Refine</router-link></div>
      <div class="nav6"><router-link to="/contact">Kontakt</router-link></div>
    </nav>
    <transition name="fade"><router-view/></transition>
  </div>
</template>

<script>

</script>


<style lang="scss">
body {
  margin: 0;
}

* {
    box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;


  nav {
    background-color: white;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: .2rem;
    font-size: 1.2rem;

    .nav1 {
      grid-area: 1 / 3 / span 1 / span 1;
    }
    .nav2 {
      grid-area: 1 / 4 / span 1 / span 1;
    }
    .nav3 {
      grid-area: 1 / 5 / span 1 / span 1;
    }
    .nav4 {
      grid-area: 1 / 6 / span 1 / span 1;
    }
    .nav5 {
      grid-area: 1 / 7 / span 1 / span 1;
    }
    .nav6 {
      grid-area: 1 / 8 / span 1 / span 1;
    }

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

  section {
    
  }
  


</style>

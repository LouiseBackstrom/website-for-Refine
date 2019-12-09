<template>
  <div id="app">
    <nav>
      <div class="nav1"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
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
@import '@/scss/_main.scss';

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
  color: $black;


  nav {
    background-color: $white;
    display: grid;
    grid-template-columns: repeat(8, auto);
    grid-column-gap: .2rem;
    font-size: 1rem;
    color: $black;
    padding: 1.5rem;
    position: sticky;
    z-index: 1;
    top: 0;
    

    .nav1 {
      grid-area: 1 / 1 / span 1 / span 2;
      img {
         width: 20vw;
      }
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
      text-decoration: none;

      &.router-link-exact-active {
        color: $footer;
      }
    }

    :hover {
      background-color:$footer;
      }
    :visited {
      color: black;
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

 @media (max-width: 600px) {
   .hem{
    .grid {
        .item1 {
            grid-area: 1 / 1 / span 1 / span 8;
        }
        .item2 {
            grid-area: 2 / 1 / span 1 / span 8;
        }
        .item3 {
            grid-area: 3 / 1 / span 1 / span 8;
        }
        .item4 {
            grid-area: 4 / 1 / span 1 / span 8;
        }
        .item5 {
            grid-area: 5 / 1 / span 1 / span 8;
        }
        .item6 {
            grid-area: 6 / 1 / span 1 / span 8;
        }
        .item7 {
            grid-area: 7 / 1 / span 1 / span 8;
        }
    }
}
 }


</style>

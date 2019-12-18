<template>
  <div id="app">
    <nav>
      <div class="nav1"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
      <div class="nav2"><router-link to="/about_me"><h4>Om Mig</h4></router-link></div>
      <div class="nav3"><router-link to="/services"><h4>Tjänster</h4></router-link></div>
      <div class="nav4"><router-link to="/why_refine"><h4>Varför Refine</h4></router-link></div>
      <div class="nav5"><router-link to="/blog"><h4>Blogg</h4></router-link></div>
      <div class="nav6"><router-link to="/contact"><h4>Kontakt</h4></router-link></div>
    </nav>
    <!--<div v-if="nav_mobile" class="nav_mobile">
      <div class="hamburger" @click="open"><img src="@/assets/three-horizontal-lines.png" alt="hamburger"></div>
      <div class="logo_mobile"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
    </div>
    <div v-if="nav_open" name="fade" class="nav_open" style: width>
      <div class="close" @click="close"><img src="@/assets/close.png" alt="close"></div>
      <div class="nav_mobile1"><router-link to="/">Hem</router-link></div>
      <div class="nav_mobile2"><router-link to="/about_me"><h2>Om Mig</h2></router-link></div>
      <div class="nav_mobile3"><router-link to="/services"><h2>Tjänster</h2></router-link></div>
      <div class="nav_mobile4"><router-link to="/why_refine"><h2>Varför Refine</h2></router-link></div>
      <div class="nav_mobile5"><router-link to="/blog"><h4>Blogg</h4></router-link></div>
      <div class="nav_mobile6"><router-link to="/contact"><h2>Kontakt</h2></router-link></div>
    </div>-->
    <transition name="fade"><router-view/></transition>
  </div>
</template>

<script>


export default {
  name: 'app',
   data () {
     return {
       nav_open: false,
       nav_mobile: true
     }
   },
     methods: {
       open() {
         this.nav_open = true;
         this.nav_mobile = false;
       },
       close () {
         this.nav_open = false;
         this.nav_mobile = true;
       }
     }    
  }
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
    grid-template-columns: repeat(8, 12,5%);
    grid-column-gap: .2rem;
    color: $black;
    padding: 1.5rem 0 0 0;
    position: sticky;
    z-index: 1;
    top: 0;
    
    .nav1 {
      grid-area: 1 / 1 / span 1 / span 2;
      margin: 0 0 0.5rem 0;

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
        color: $darkbeige;
      }
    }

    :visited {
      color: black;
    }
  }
  .nav_mobile {
    margin: -3rem;
  
    .hamburger {
      
      img {
      height: 100%;
      width: 8vw;
      object-fit: cover;
      }
    }
  }
  .nav_open {
      display: grid;
      grid-template-columns: repeat(8, 12,5%);
      grid-column-gap: .2rem;
      position: sticky;
      z-index: 1;
      top: 0;
      background-color: $footer;
      padding: 1rem 0 5rem 0;
      transition: all 2s ease;

      h2 {
         color: $white;
      }

      .close {
        grid-area: 2/ 8 / span 1 / span 1;

        img {
        height: 100%;
        width: 18vw;
        object-fit: cover;
        }
      }
      .nav_mobile1 {
        grid-area: 3 / 1 / span 1 / span 8;
        padding: 1rem;
      }
      .nav_mobile2 {
        grid-area: 4 / 1 / span 1 / span 8;
        padding: 1rem;
      }
      .nav_mobile3 {
        grid-area: 5 / 1 / span 1 / span 8;
        padding: 1rem;
      }
      .nav_mobile4 {
        grid-area: 6 / 1 / span 1 / span 8;
        padding: 1rem;
      }
      .nav_mobile5 {
        grid-area: 7 / 1 / span 1 / span 8;
        padding: 1rem;
      }
      .nav_mobile6 {
        grid-area: 8 / 1 / span 1 / span 8;
        padding: 1rem;
      }
     }
    .fade {
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
 @media (max-width: 769px) {
   #app {
     nav {
       margin-top: -3rem;
       position: static;
     }
     .nav_mobile{
        display: grid;
        grid-template-columns: repeat(8, 12,5%);
        margin: 1rem 0;

      .logo_mobile {
        grid-area: 1 / 1 / span 1 / span 1;

        img {
          width: 30vw;
        }
      }
      .hamburger {
        grid-area: 1 / 8 / span 1 / span 1;
      }
     }
   }
 }
 @media (min-width: 770px) {
   #app {
     .nav_mobile {
      .logo_mobile {
        opacity: 0;
      }
      .hamburger {
        opacity: 0;
        margin-top: -9rem;
      }
     }
     .nav_open {
       opacity: 0;
     }
   }
 }


</style>
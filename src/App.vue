<template>
  <div id="app">
    <div class="nav_hamburger" :class= "{ ham }">
      <div class="hamburger" @click="open"><img src="@/assets/three-horizontal-lines.png" alt="hamburger"></div>
      <div class="logo_mobile"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
    </div>
    <div v-show="mobile_nav" class="mobile_nav" :class= "{ dropdown }">
      <div class="close" @click="close"><img src="@/assets/close.png" alt="close"></div>
      <div class="nav1" @click="close"><router-link to="/"><h3>Hem</h3></router-link></div>
      <div class="nav2" @click="close"><router-link to="/about_me"><h3>Om Refine</h3></router-link></div>
      <div class="nav3" @click="close"><router-link to="/services"><h3>Tjänster</h3></router-link></div>
      <div class="nav4" @click="close"><router-link to="/why_refine"><h3>Vision</h3></router-link></div>
      <div class="nav5" @click="close"><router-link to="/blog"><h3>Blogg</h3></router-link></div>
      <div class="nav6" @click="close"><router-link to="/contact"><h3>Kontakt</h3></router-link></div>
    </div>
    <div v-show="desktop_nav" class="desktop_nav">
      <div class="nav1"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
      <div class="nav2"><router-link to="/about_me"><h4>Om Refine</h4></router-link></div>
      <div class="nav3"><router-link to="/services"><h4>Tjänster</h4></router-link></div>
      <div class="nav4"><router-link to="/why_refine"><h4>Vision</h4></router-link></div>
      <div class="nav5"><router-link to="/blog"><h4>Blogg</h4></router-link></div>
      <div class="nav6"><router-link to="/contact"><h4>Kontakt</h4></router-link></div>
    </div>
    <transition name="fade"><router-view/></transition>
  </div>
</template>

<script>


export default {
  name: 'app',
    data () {
      return {
        desktop_nav: true,
        mobile_nav: false,
        ham: false,
        dropdown: false,
      }
    },
      methods: {
        open() {
          this.ham = true;
          this.dropdown = true;
          this.mobile_nav = true;
        },
        close () {
          this.ham = false;
          this.dropdown = false;
          this.mobile_nav = false;
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
  color: $black;

       .nav_hamburger {
        display: grid;
        grid-template-columns: repeat(8, 12,5%);
        grid-column-gap: 0.2rem;
        margin: 0;
        height: 2.5rem;
        transition-duration: 1s;
        

        .logo_mobile {
          grid-area: 1 / 1 / span 1 / span 1;
          margin: 0.4rem 0 0 0;
          padding: 0 1rem;
          
            img {
            width: 8rem;
            }
        }
        .hamburger {
          grid-area: 1 / 8 / span 1 / span 1;
         
          img {
          height: 100%;
          width: 2rem;
          object-fit: cover;
          }
        }
     }
     .ham {
        height: 0;
     }
     .mobile_nav {
        height: 0;
     }
     .dropdown {
        display: grid;
        grid-template-columns: repeat(8, 12,5%);
        grid-column-gap: 0.2rem;
        background-color: $footer;
        padding: 0 0 2rem 0;
        height: 35rem;
        transition-duration: 1s;
        position: sticky;
        z-index: 1;
        top: 0;

        h4 {
        color: $white;
        }
        .close {
          grid-area: 1 / 8 / span 1 / span 1;
          padding: 1rem 0 0 0;
          margin: 0;

          img {
            height: 100%;
            width: 4rem;
            object-fit: cover
          }
        }
        .nav1 {
          grid-area: 2 / 1 / span 1 / span 8;
          
        }
        .nav2 {
          grid-area: 3 / 1 / span 1 / span 8;
          
        }
        .nav3 {
          grid-area: 4 / 1 / span 1 / span 8;
          
        }
        .nav4 {
          grid-area: 5 / 1 / span 1 / span 8;
          
        }
        .nav5 {
          grid-area: 6 / 1 / span 1 / span 8;
          
        }
        .nav6 {
          grid-area: 7 / 1 / span 1 / span 8;
          
        }
      } 
     

  .desktop_nav {
    background-color: $white;
    display: grid;
    grid-template-columns: repeat(8, 12,5%);
    grid-column-gap: .2rem;
    color: $black;
    padding: 0.5rem 0 0 0;
    position: sticky;
    z-index: 1;
    top: 0;

    h4 {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.8rem 0 0 0;
}
    
    .nav1 {
      grid-area: 1 / 1 / span 1 / span 2;
      margin: 0 0 0.2rem 0.5rem;

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
        color: #818181;
      }
    }

    :visited {
      color: black;
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
      .desktop_nav {
        display: none;
      }
  }
}
@media (min-width: 770px) {
   #app {
     .nav_hamburger {
      display: none;
     }
     .mobile_nav {
      display: none;
     }
   }
 }


</style>
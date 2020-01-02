<template>
  <div id="app">
    <div class="nav_hamburger">
      <div class="hamburger" @click="open"><img src="@/assets/three-horizontal-lines.png" alt="hamburger"></div>
      <div class="logo_mobile" @click="home"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
    </div>
    <transition name="slide-fade"><div v-show="mobile_nav" class="mobile_nav">
      <div class="nav1" @click="open"><router-link to="/about_me"><h3>Om Refine</h3></router-link></div>
      <div class="nav2" @click="open"><router-link to="/services"><h3>Våra Tjänster</h3></router-link></div>
      <div class="nav3" @click="open"><router-link to="/why_refine"><h3>Vision</h3></router-link></div>
      <div class="nav4" @click="open"><router-link to="/blog"><h3>Blogg</h3></router-link></div>
      <div class="nav5" @click="open"><router-link to="/contact"><h3>Kontakt</h3></router-link></div>
    </div></transition>
    <div v-show="desktop_nav" class="desktop_nav">
      <div class="nav1"><router-link to="/"><img src="@/assets/RefineLogoBlackTransp2.png" alt="logo"></router-link></div>
      <div class="nav2"><router-link to="/about_me"><h4>Om Refine</h4></router-link></div>
      <div class="nav3"><router-link to="/services"><h4>Våra Tjänster</h4></router-link></div>
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
      }
    },
      methods: {
        open() { 
          this.mobile_nav = !this.mobile_nav;
        },
        home() {
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
  grid-template-columns: repeat(3, 33.33%);
  grid-column-gap: 0.2rem;
  height: 4rem;
  margin: 0;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: $white;
  
    .logo_mobile {
      grid-area: 1 / 2 / span 1 / span 1;
      margin: 0;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;

      img {
      width: 8rem;
      }
    }
    .hamburger {
      grid-area: 1 / 1 / span 1 / span 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 0 0.5rem;
      
      img {
      height: 40%;
      width: 2rem;
      object-fit: cover;
      }
    }
}
      .slide-fade-enter-active {
        transition: all .8s ease;
      }
      .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.3, 0.4, 1.0);
      }
      .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(15rem);
        opacity: 0;
      }
      .mobile_nav {
        display: grid;
        grid-template-columns: repeat(8, 12,5%);
        grid-column-gap: 0.2rem;
        background-color: $white;
        padding: 0 0 2rem 0;
        height: 37rem;
        position: sticky;
        z-index: 1;
        top: 4rem;

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
      margin: 0 0 0.2rem 1rem;
      display: flex;
      flex-direction: row;
      justify-content: left;

      img {
         width: 12rem;
      }
    }
    .nav2 {
      grid-area: 1 / 4 / span 1 / span 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .nav3 {
      grid-area: 1 / 5 / span 1 / span 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .nav4 {
      grid-area: 1 / 6 / span 1 / span 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .nav5 {
      grid-area: 1 / 7 / span 1 / span 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .nav6 {
      grid-area: 1 / 8 / span 1 / span 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 0 1rem 0 0;
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

@media (min-width: 600px) {
  #app {
    .nav_hamburger {
      .logo_mobile {
        img {
        width: 12rem;
        }
      }
      .hamburger {
        img {
        width: 2.5rem;
        }
      }
    }
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
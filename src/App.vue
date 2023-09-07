<template>
  <div class="container">
    <Header v-show="hideHeader" />
  </div>
  <router-view />
</template>
<script>
import Header from '@/components/Header.vue'
import Home from '@/views/Home.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
  },

  data() {
    return {
      hideHeader: true
    }
  },

  //speedUp
  beforeCreate() {
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('loadCategories')
    this.$store.dispatch('loadGroups')
    this.$store.dispatch('loadCompany')
    this.$store.dispatch('loadParams')
  },

  beforeMount() {
    // this.toTop
  },

  methods: {
    toTop() {
      window.onbeforeunload = function () {
        window.scrollTo(0,0);
      };
    }
  }

  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },

  // methods: {
  //   handleScroll(){
  //     this.hideHeader = true
  //     if(window.scrollY > 500) {
  //       this.hideHeader = false
  //       window.removeEventListener('scroll', this.handleClickEvent);
  //     }
  //   }
  // },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* Passar o flex e gap para a home no router */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  /* gap: 10px */

}

.container {
  width: 100%;
  margin-bottom: 40px;
}
</style>

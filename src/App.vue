<template>
  <Header v-show="hideHeader" />
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

  created() {
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('loadCategories')
    this.$store.dispatch('loadGroups')
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
</style>

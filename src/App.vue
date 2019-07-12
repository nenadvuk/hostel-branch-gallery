<template>
  <div id="app">
   <!--  <transition
      name="router-anim"
      enter-active-class="animated zoomIn "
      leave-active-class="animated zoomOut ">
      <router-view></router-view>
    </transition> -->
     <router-view></router-view>
  </div>
</template>

<script>
  //import axios from 'axios';

  export default {
  name: 'app',
  data () {
    return {
      info: null
    }
  },
  mounted () {

  },
  components: {
    
  }
}

</script>

<style>
  /* @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css'; */
  html {
  scroll-behavior: smooth;
}
</style>

<template>
  <div id="appbar" class="w-full flex select-none mb-2.5"> 
    <div class="mb-auto ml-auto flex items-center gap-2">
      <button @click="minimize_window">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-dash-lg w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
        </svg>
      </button>
      <button @click="maximize_window">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-square w-3 h-3 fill-current" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        </svg>
      </button>
      <button id="closeBtn" @click="close_window">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-x w-6 h-6 fill-current" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script >

 export default {
    name: 'AppBar',
    props: {
      extension: {
        type: Object
      }
    },
    components:{
      
    },
    data(){
      return{

      }
    },
    methods: {
      close_window(){
        window.extension_api.close_window()
      },
      minimize_window(){
        window.extension_api.minimize_window()
      },
      maximize_window(){
        window.extension_api.maximize_window()
      }
    },
  }
</script>

<style>
#appbar{
   -webkit-app-region: drag;
}

#appbar button{
  @apply w-7 h-7 text-gray-200 flex items-center justify-center hover:text-true-gray-400 outline-none border-none focus:outline-none;
  -webkit-app-region: no-drag;
}

#appbar button#closeBtn{
  @apply hover:text-red-600 disabled:text-red-300;
}

</style>
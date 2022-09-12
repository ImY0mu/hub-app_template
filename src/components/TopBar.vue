<template>
  <div id="topBar" class="select-none border-b dark:border-dark-800 h-4">
    <div class="flex items-start text-light-100 px-2 absolute top-2">
      <div class="flex items-center rounded-br-full">
        <img src="../assets/icon.png" class="w-4 ml-2 relative -top-0.5 mt-0.5" alt="App Logo">
        <div class="ml-2 flex bg-gradient-to-r from-orange-700 to-blue-700 gradient-text mt-0.5">
          <div class="font-medium text-base tracking-wide antialiased">Simple</div>
          <div class="text-base ml-1 font-extrabold tracking-wide antialiased">MMO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    components:{
      
    },
    props: {

    },
  }
</script>

<style>
#topBar{
  -webkit-app-region: drag;
}

#clickArea{
  -webkit-app-region: no-drag;
}
</style>
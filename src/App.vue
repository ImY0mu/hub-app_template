<template>
	<div class="flex flex-col h-screen overflow-hidden w-sreen">
		<AppBar :extension="extension" />
		<TopBar />
		<div class="h-[calc(100vh-2.5rem)] flex flex-shrink-0">
			<div class="w-full">
        <router-view 
        :extension="extension" 
        class="w-full h-full" 
        v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :key="'a' + $route.params.id" :is="Component"></component>
          </transition>
        </router-view>
      </div>
		</div>
	</div>
</template>

<script>
import { name, version} from "../package.json";


import AppBar from "./components/AppBar.vue";
import TopBar from "./components/TopBar.vue";

import * as semver from "semver";


export default {
  components: {
    AppBar,
    TopBar
  },
  data() {
    return {
      player: window.extension_api.user('app_template'),
      extension: {
        name: name,
        version: version
      }
    };
  },
  methods: {

  },
  beforeMount() {
    window.extension_listener.receive("user", function (arg) {
			console.log(arg);
		});
    window.extension_listener.receive("user_patreon_data", function (arg) {
			console.log(arg);
		});
  },
  mounted(){
    console.log(this.extension)
  }
};
</script>

<style>
#app {
	scroll-behavior: smooth;
	font-family: "Roboto", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}

.gradient-text {
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.fade-enter-from,
.fade-leave-active {
	opacity: 0;
}

input[type="text"], input[type="number"]{
  @apply bg-true-gray-100 text-true-gray-800 hover:ring-2 hover:ring-orange-300 focus:ring-2 focus:ring-orange-300;
}

button,
img,
a,
input {
	outline: none !important;
	@apply select-none;
}

::-webkit-scrollbar {
	width: 2px !important;
}

/* Track */
::-webkit-scrollbar-track {
	@apply bg-true-gray-300 dark:bg-true-gray-700;
}

/* Handle */
::-webkit-scrollbar-thumb {
	@apply bg-true-gray-600 dark:bg-true-gray-900;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	@apply bg-true-gray-700 dark:bg-true-gray-900;
}
</style>

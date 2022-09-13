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
      player: null,
    };
  },
  methods: {

  },
  beforeMount() {
    var self = this;
    window.extension_listener.receive("user", function (player) {
			self.player = player;
      console.log(self.player);
		});
    window.extension_listener.receive("public_token", function (token) {
			console.log(token);
		});
    window.extension_listener.receive("user_patreon_data", function (user_patreon_data) {
			console.log(user_patreon_data);
		});
    window.extension_listener.receive("public_token", function (public_token) {
			console.log(public_token);
		});
  },
  mounted(){


    // How to log messages so they appear in App Hubs logs files
    log('info', `Launched ${extension.title} v${extension.version} created by ${extension.author}`);
    log('error', `Hello World!`);

    window.extension_api.get_user();
  },
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

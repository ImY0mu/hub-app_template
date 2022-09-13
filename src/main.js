import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css';
import router from './router';

const app = createApp(App);

import { name, version, author, title } from "../public/manifest.json";


window.extension = {
  name: name,
  title: title,
  version: version,
  author: author
};

// Set up the application's name so all the functions at extension_api work
window.extension_api.set_app_name(name);

console.log(`%cWelcome to ${extension.title} v${extension.version} created by ${extension.author}`, 'color: #3f97bf; background: transparent; font-size: 18px; padding: 0.5rem;');


/*
  Create simple logging  - log(type, message)
  Supported types: info, error
*/
window.log = (type, message) =>{
  window.extension_api.log(type, message);
};

app
.use(router)
.mount('#app')

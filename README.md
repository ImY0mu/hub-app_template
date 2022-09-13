# SimpleMMO App Hub extension app template

VueJS and WindiCSS template to create your own SimpleMMO App and run it inside the [App Hub](https://github.com/ImY0mu/SimpleMMO-Hub-Dist).
You can create your own App even without this template, but it will require some additional work like setup your own `manifest.json`, load it and setup the `extension_api` to work corretly.

```js
import { name, version, author, title } from "../public/manifest.json";
window.extension = {
  name: name,
  title: title,
  version: version,
  author: author
};
// Set up the application's name so all the functions at extension_api work
window.extension_api.set_app_name(name);
/*
  Create simple logging  - log(type, message)
  Supported types: info, error
*/
window.log = (type, message) =>{
  window.extension_api.log(type, message);
};
```

## Technologies used

- VueJS
- WindiCSS

## Technologies Required

- NPM (v7)
  
## Get started

Follow these steps to get started with this template:

1. Click the **[Use this template](https://github.com/ImY0mu/hub-app_template/generate)** button (you must be logged in) or just clone this repo.
2. The application's folder has to be at the `AppData\Roaming\SimpleMMO Hub v2\extensions` and share the same name as in `public/manifest.json`.
3. Open the folder of the project and update `package.json` and `public/manifest.json` with your application's information.
4. Run `npm install` and then `npm run watch`.
5. Launch App Hub (version 0.0.45 or newer)
6. Navigate to Extensions and your application should show up there.
7. Launch it.
8. Reload the window by pressing CTRL + R whenever you make any change.

## Manifest

```json
{
  "name":"hub-app_template", 
  "title":"App Template",
  "author":"Y0mu",
  "in_development":true,
  "description":"Template of application for SimpleMMO App Hub.",
  "version":"0.0.1",
  "preview_image_url":"",
  "github":{
     "owner":"ImY0mu",
     "repository":"hub-app_template",
     "link_to_repository":"https://github.com/ImY0mu/hub-app_template"
  }
}
```

**Required:**

- name: It has to have the name of the folder
- title: Title of the extension in the list of extensions
- author: Name of the author
- in_development:
  - true: extension will be loaded from from it's `dist` folder within the selected folder
  - false: extension will be loaded right from the selected folder
- version: Version number
- github:
  - owner: Name of the github profile
  - repository: Name of the repository where you make releases
    - Keep **in_development** to true if the whole code is part of your releases and not just the `dist` folder
  - link_to_repository: Link to the repository

**Not Required:** (for now)

- description: Description of the extension
- preview_image: Eventually could be an image of the preview within the hub

That's all you need.

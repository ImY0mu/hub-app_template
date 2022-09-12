# SimpleMMO App Hub extension app template

Hello, this repository solely exists in case there would be multiple peeps wanting to have their own SimpleMMO app run inside the [App Hub](https://github.com/ImY0mu/SimpleMMO-Hub-Dist).

## Technologies used

- VueJS
- WindiCSS
  
## Get started

Follow these steps to get started with this template:

1. Click the **[Use this template](https://github.com/ImY0mu/hub-app_template/generate)** button (you must be logged in) or just clone this repo.
2. If you want use another package manager don't forget edit [`.github/workflows`](/.github/workflows) -- it uses `npm` by default.
3. Run `npm install`
4. Run `npm run watch`
5. Open App Hub
6. Open Console at App Hub via CTRL + SHIFT + I
7. Run `window.extension_api.launch_app('hub-app_template')` (the name of the package in package.json [has to be same as folder name])
8. Press CTRL + R to reload the window with every new change

That's all you need.

**Note**: This template uses npm v7 feature — [**Installing Peer Dependencies Automatically**](https://github.com/npm/rfcs/blob/latest/implemented/0025-install-peer-deps.md). If you are using a different package manager, you may need to install some peerDependencies manually.

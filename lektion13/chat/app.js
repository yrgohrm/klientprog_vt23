import UserList from './components/UserList.js'

const app = {
    // nothing here in this simple app
    // but data(), methods() etc of the main
    // application goes here
}

const vueApp = Vue.createApp(app)

// this makes user-list a global component!
vueApp.component('user-list', UserList)

vueApp.mount("#app")

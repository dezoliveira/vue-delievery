import { createApp } from 'vue'
import App from './App.vue'
import '../src/main.css'

//Font Awesome
import { Library, library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faCaretUp, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faCaretUp, faLocationDot, faClock)

createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount('#app')

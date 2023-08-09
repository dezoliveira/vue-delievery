import { createApp } from 'vue'
import App from './App.vue'
import '../src/main.css'

//Font Awesome
import { Library, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown, faClock, faLocationDot, faClose, faMotorcycle, faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faChevronDown, faLocationDot, faClock, faClose, faMotorcycle, faPersonWalking)

createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount('#app')

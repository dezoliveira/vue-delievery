import { createApp } from 'vue'
import App from './App.vue'
import '../src/main.css'

//Font Awesome
import { Library, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronDown, faClock, faLocationDot, faClose, faMotorcycle, faPersonWalking, faArrowLeft, faPlusCircle, faMinusCircle, faBagShopping, faBurger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router'
import store from '@/store'

library.add(faChevronUp, faChevronDown, faLocationDot, faClock, faClose, faMotorcycle, faPersonWalking, faArrowLeft, faPlusCircle, faMinusCircle, faBagShopping, faBurger)

createApp(App)
  .use(router)
  .use(store)
  .component("fa", FontAwesomeIcon)
  .mount('#app')

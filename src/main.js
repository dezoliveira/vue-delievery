import { createApp } from 'vue'
import App from './App.vue'
import '../src/main.css'

//Font Awesome
import { Library, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown, faClock, faLocationDot, faClose, faMotorcycle, faPersonWalking, faArrowLeft, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router'
import store from '@/store'

library.add(faChevronRight, faChevronDown, faLocationDot, faClock, faClose, faMotorcycle, faPersonWalking, faArrowLeft, faPlusCircle, faMinusCircle)

createApp(App)
  .use(router)
  .use(store)
  .component("fa", FontAwesomeIcon)
  .mount('#app')

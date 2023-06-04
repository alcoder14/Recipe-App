import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import router from './router'

import "/node_modules/flag-icons/css/flag-icons.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faBowlRice } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faBurger, faFish, faBowlRice, faPizzaSlice, faBookmark, faCheck, faHome, faList, faGlobe, faTrash)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(MotionPlugin).mount('#app')

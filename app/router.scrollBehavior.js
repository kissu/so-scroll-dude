// uncomment this part and comment the one below, if you want the default behavior

// export default function () {
//   return { x: 0, y: 0, behavior: 'smooth' }
// }

// comment the part below if you do not want to define globally available scrolling behavior

import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default function (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (to.hash === '#scroll-here') {
        VueScrollTo.scrollTo('#scroll-here', 300, { easing: 'linear' })
      }
    }, 10)
  })
}

// comment this part and uncomment the one below

export default function () {
  return { x: 0, y: 0, behavior: 'smooth' }
}

// uncomment the part below if you want to define globally available scrolling behaviors

// import Vue from 'vue'
// import VueScrollTo from 'vue-scrollto'
// Vue.use(VueScrollTo)

// export default function (to, from, savedPosition) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (to.hash === '#scroll-here') {
//         VueScrollTo.scrollTo('#scroll-here', 300, { easing: 'linear' })
//         // resolve({ x: 0, y: 500, behavior: 'smooth' })
//       }
//     }, 10)
//   })
// }

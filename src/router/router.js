import { createRouter, createWebHistory } from 'vue-router'
import AppCenter from '../components/AppCenter.vue'
import AppWeather from '../views/nav/AppWeather.vue'
import AppBookASeak from '../views/nav/AppBookASeak.vue'
import AppBookATransfer from '../views/nav/AppBookATransfer.vue'
import AppSearch from '../views/nav/AppSearch.vue'
import AppRegister from '../views/nav/AppRegister.vue'
import AppLogin from '../views/nav/AppLogin.vue'
import AppHome from '../views/nav/AppHome.vue'
import AppInfo from '../views/slider/AppInfo.vue'
import AppTransferTaksi from '../views/slider/AppTransferTaksi.vue'
import AppHabitation from '../views/slider/AppHabitation.vue'
import AppRental from '../views/slider/AppRental.vue'
import AppEvents from '../views/slider/AppEvents.vue'
import AppForChildren from '../views/slider/AppForChildren.vue'
import AppInstructorTours from '../views/slider/AppInstructorTours.vue'
import AppNews from '../views/slider/AppNews.vue'
import AppAds from '../views/slider/AppAds.vue'
import AppTransfer from '../views/center/AppTransfer.vue'
import AppTaxiDelivery from '../views/center/AppTaxiDelivery.vue'
import AppHotel from '../views/habination/AppHotel.vue'
import AppCardOpen from '../components/AppCardOpen.vue'
import AppCreateCard from '../components/AppCreateCard.vue'
import AppCreateNews from '../components/AppCreateNews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/weather',
      name: 'weather',
      component: AppWeather,
    },
    {
      path: '/book_a_seat',
      name: 'book_a_seat',
      component: AppBookASeak,
    },
    {
      path: '/book_a_transfer',
      name: 'book_a_transfer',
      component: AppBookATransfer,
    },
    {
      path: '/search',
      name: 'search',
      component: AppSearch,
    },
    {
      path: '/register',
      name: 'register',
      component: AppRegister,
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
    {
      path: '/info',
      name: 'info',
      component: AppInfo,
    }, 
    {
      path: '/transfer-taksi',
      name: 'transfer-taksi',
      component: AppTransferTaksi,
    }, 
    {
      path: '/habitation',
      name: 'habitation',
      component: AppHabitation,
    }, 
    {
      path: '/habitation/items',
      name: 'habitationItems',
      component: AppHotel,
    }, 
    {
      path: '/rental',
      name: 'rental',
      component: AppRental,
    }, 
    {
      path: '/rental/items',
      name: 'rentalItems',
      component: AppHotel,
    }, 
    {
      path: '/event',
      name: 'event',
      component: AppEvents,
    }, 
    {
      path: '/event/items',
      name: 'eventItems',
      component: AppHotel,
    }, 
    {
      path: '/forChildren',
      name: 'forChildren',
      component: AppForChildren,
    }, 
    {
      path: '/forChildren/items',
      name: 'forChildrenItems',
      component: AppHotel,
    }, 
    {
      path: '/instructor-tours',
      name: 'instructor-tours',
      component: AppInstructorTours,
    }, 
    {
      path: '/instructor-tours/items',
      name: 'instructorToursItems',
      component: AppHotel,
    }, 
    {
      path: '/news',
      name: 'news',
      component: AppNews,
    }, 
    {
      path: '/ads',
      name: 'ads',
      component: AppAds,
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: AppTransfer,
    },
    {
      path: '/taxi-delivery',
      name: 'taxi-delivery',
      component: AppTaxiDelivery,
    },
    {
      path: '/card',
      name: 'card',
      component: AppCardOpen,
    },
    {
      path: '/create-card',
      name: 'createCard',
      component: AppCreateCard,
    },
    {
      path: '/create-news',
      name: 'createNews',
      component: AppCreateNews,
    },
  ]
})

export default router

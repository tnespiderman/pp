import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import GameView from '../views/gameView.vue'
import LeaderBoard from '../views/leaderboardView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
        path: '/accountInfo',
        name: 'account',
        component: () => import('../views/accountInfo.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/game',
        name: 'game',
        component: GameView,
        meta: { requiresAuth: true }
    },
    {
        path: '/leaderboard',
        name: 'laderboard',
        component: LeaderBoard,
    },
  ]
})

export default router
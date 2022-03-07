import Coin from 'app/core/pages/coin'
import Home from 'app/core/pages/home'

import { AppRoute } from './types'

export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/coin', exact: true, component: Coin },
  { path: '/private', exact: true, component: Home, isPrivate: true },
]

const path = {
  home: '/',
  user: '/user',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart',
  profile: '/user/profile',
  changePassword: '/user/password',
  historyPurchase: '/user/purchase',
} as const

export default path

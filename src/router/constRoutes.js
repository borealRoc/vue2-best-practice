const constRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */  '@/views/home')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */  '@/views/login')
    },
]
export default constRoutes
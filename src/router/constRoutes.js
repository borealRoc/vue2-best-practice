const constRoutes = [
    {
        path: '/',
        redirect: 'layout',
        hidden: true
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */  '@/views/login'),
        hidden: true
    }
]
export default constRoutes
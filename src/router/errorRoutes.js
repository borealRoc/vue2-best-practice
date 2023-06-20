const errorRoutes = [
    {
        path: '*',
        name: 'error',
        component: () => import(/* webpackChunkName: "error" */  '@/views/error'),
        hidden: true
    }
]
export default errorRoutes
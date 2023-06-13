const asyncRoutes = [
    {
        path: '/about',
        name: 'about',
        meta: {
            roles: ['admin', 'editor']
        },
        component: () => import(/* webpackChunkName: "about" */  '@/views/about')
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            roles: ['admin']
        },
        component: () => import(/* webpackChunkName: "admin" */  '@/views/admin')
    },
    {
        path: '/editor',
        name: 'editor',
        meta: {
            roles: ['editor']
        },
        component: () => import(/* webpackChunkName: "editor" */  '@/views/editor')
    },
]

export default asyncRoutes
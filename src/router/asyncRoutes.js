const asyncRoutes = [
    {
        path: '/layout',
        name: 'layout',
        component: () => import(/* webpackChunkName: "layout" */  '@/views/layout'),
        meta: {
            title: 'Layout',
        },
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: 'Home',
                    icon: 'home',
                    activeIcon: 'home_active',
                },
                component: () => import(/* webpackChunkName: "home" */  '@/views/home'),
                children: [
                    {
                        path: 'home1',
                        name: 'home1',
                        meta: {
                            roles: ['admin', 'editor'],
                            title: 'Home1',
                            icon: 'home1',
                            activeIcon: 'home1_active',
                        },
                        component: () => import(/* webpackChunkName: "home1" */  '@/views/home/home1'),
                    },
                    {
                        path: 'home2',
                        name: 'home2',
                        meta: {
                            roles: ['admin'],
                            title: 'Home2',
                            icon: 'home2',
                            activeIcon: 'home2_active',
                        },
                        component: () => import(/* webpackChunkName: "home2" */  '@/views/home/home2'),
                    },
                    {
                        path: 'home3',
                        name: 'home3',
                        meta: {
                            roles: ['editor'],
                            title: 'Home3',
                        },
                        component: () => import(/* webpackChunkName: "home3" */  '@/views/home/home3'),
                    }
                ]
            },
            {
                path: 'about',
                name: 'about',
                meta: {
                    roles: ['admin', 'editor'],
                    title: 'About',
                    icon: 'about',
                    activeIcon: 'about_active',
                },
                component: () => import(/* webpackChunkName: "about" */  '@/views/about')
            },
            {
                path: 'admin',
                name: 'admin',
                meta: {
                    roles: ['admin'],
                    title: 'Admin',
                    icon: 'admin',
                    activeIcon: 'admin_active',
                },
                component: () => import(/* webpackChunkName: "admin" */  '@/views/admin')
            },
            {
                path: 'editor',
                name: 'editor',
                meta: {
                    roles: ['editor'],
                    title: 'Editor',
                    icon: 'editor',
                    activeIcon: 'editor_active',
                },
                component: () => import(/* webpackChunkName: "editor" */  '@/views/editor')
            }
        ]
    },
]

export default asyncRoutes
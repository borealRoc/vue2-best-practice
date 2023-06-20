<template>
    <div class="app-layout">
        <layout-header/>
        <div class="app-content">
            <layout-aside/>
            <layout-main/>
        </div>
    </div>
</template>

<script>
import LayoutHeader from './comps/header.vue'
import LayoutAside from './comps/aside.vue'
import LayoutMain from './comps/main.vue'

export default {
    name: "LayoutView",
    components: {
        LayoutHeader,
        LayoutAside,
        LayoutMain
    },
};
</script>
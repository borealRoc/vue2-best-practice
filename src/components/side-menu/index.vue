<template>
    <div class="side-menu-comp">
        <el-menu :text-color="elMenuAttribute.textColor" :active-text-color="elMenuAttribute.activeTextColor"
            :unique-opened="elMenuAttribute.uniqueOpened" :router="elMenuAttribute.router" :default-active="defaultActive">
            <side-menu-item v-for="(r) in sideMenuRoutes" :key="r.path" :item="r" />
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import sideMenuItem from './side-menu-item.vue';

export default {
    name: 'side-menu',
    components: {
        sideMenuItem,
    },
    data() {
        return {
            elMenuAttribute: {
                textColor: '#303133',
                activeTextColor: '#409eff',
                uniqueOpened: false,
                router: true,
            }
        }
    },
    computed: {
        ...mapGetters(['fullRoutes']),
        sideMenuRoutes() {
            let tmp = [...this.fullRoutes]
            let res = tmp.filter(item => !item.hidden)
            const target = res.findIndex(item => item.name === 'layout')
            if (target > -1) {
                res = res[target].children
                res = res.map(item => item)
            }
            return res
        },
        defaultActive() {
            // 刷新页面时，依然保持上次浏览页面
            return this.$route.path.split('/').reverse()[0]
        }
    },
}
</script>

<style lang="scss" scoped></style>
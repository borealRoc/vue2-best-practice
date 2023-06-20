<template>
    <div class="side-menu-item">
        <template v-if="hasChildren(item)">
           <el-submenu :index="item.name">
                <template v-slot:title>
                    <menu-item :icon="active ? item.meta.activeIcon : item.meta.icon" :title="item.meta.title"/>
                </template>
                <side-menu-item v-for="(r) in item.children" :key="r.path" :item="r"/>
           </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :route="item" :index="item.name">
                <menu-item :icon="active ? item.meta.activeIcon : item.meta.icon" :title="item.meta.title"/>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
import MenuItem from './menu-item.vue'
export default {
    name: 'SideMenuItem',
    components: {
        MenuItem,
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        hasChildren() {
            return item => {
                return item.children && item.children.length > 0
            }
        },
        active() {
            return this.$route.name === this.item.name
        }
    },
}
</script>

<style lang="scss" scoped>
.side-menu-item {
    color: $c-gray-l;

    a:-webkit-any-link {
        text-decoration: none;
    }
}
</style>
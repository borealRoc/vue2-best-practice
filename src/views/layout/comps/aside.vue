<template>
    <el-aside width="200px" class="layout-aside">
        <div class="layout-aside-container">
            <side-menu />
        </div>
    </el-aside>
</template>

<script>
export default {
    name: 'LayoutAside',
}
</script>

<style lang="scss" scoped>
.layout-aside {
    position: fixed;
    top: $l-app-header;
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-right: solid 2px $c-gray-s;

    .layout-aside-container {
        box-sizing: content-box;
        width: 198px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar {
            @include -webkit-scrollbar()
        }

        &::-webkit-scrollbar-thumb {
            @include -webkit-scrollbar-thumb()
        }

        &::-webkit-scrollbar-track {
            @include -webkit-scrollbar-track()
        }
    }
}
</style>
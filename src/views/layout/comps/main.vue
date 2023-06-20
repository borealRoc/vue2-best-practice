<template>
    <section class="layout-main">
        <keep-alive>
            <router-view />
        </keep-alive>
    </section>
</template>

<script>
export default {
    name: 'LayoutMain',
}
</script>

<style lang="scss" scoped>
.layout-main {
    position: absolute;
    left: $l-app-app-aside;
    top: $l-app-header;
    right: 0;
    bottom: 0;
    padding: $l-app-common;
    overflow: auto;

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
</style>
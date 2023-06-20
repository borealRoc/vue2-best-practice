<template>
    <header class="layout-header" height="70px">
        <h1 class="layout-header__headline">Vue2 Maybe Best Practice</h1>
        <div class="layout-header__user-infor">
            <div class="layout-header__user-account">
                <svg-icon iconName="user"></svg-icon>{{ $store.getters.username }}
            </div>
            <div class="layout-header__user-logout" @click="logout">
                <svg-icon iconName="exit"></svg-icon>退出登录
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'LayoutHeader',
    methods: {
        async logout() {
            await this.$store.dispatch('user/resetToken')
            this.$router.push({path: '/login'})
        }
    },
}
</script>

<style lang="scss" scoped>
.layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: $l-app-header;
    line-height: $l-app-header;
    color: $c-white;
    background-color: $c-blue;
    display: flex;
    .layout-header__headline {
        flex: 1;
        margin-left: $l-app-common;
        font-size: $font-l;
    }
    .layout-header__user-infor {
        display: inline-flex;
        margin-right: $l-app-common;
        .layout-header__user-logout {
            margin-left: $l-app-common;
            cursor: pointer;
        }
    }
}
</style>
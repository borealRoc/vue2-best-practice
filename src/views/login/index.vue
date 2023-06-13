<template>
    <div>
        <h2>用户登录</h2>
        <div>
            <el-input v-model="username" placeholder="请输入内容" />
            <el-button @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginView',
    data() {
        return {
            username: "admin"
        };
    },
    created() {
        console.log('login');
    },
    methods: {
        login() {
            this.$store
                .dispatch("user/login", { username: this.username })
                .then(() => {
                    this.$router.push({
                        path: this.$route.query.redirect || "/"
                    });
                })
                .catch(error => {
                    this.$message({
                        message: error || '登录出错'
                    })
                });
        }
    }
};
</script>
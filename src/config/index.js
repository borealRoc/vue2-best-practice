const envKey = process.env.NODE_ENV
function initEnv() {
    return {
        ...require('./' + envKey)
    }
}
const config = initEnv()
export default config
const envKey = process.env.NODE_ENV

function initEnv() {
    return {
        ...require('./' + envKey)
    }
}
const config = initEnv()
console.log('config', config)
export default config
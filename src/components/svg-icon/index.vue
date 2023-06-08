<template>
    <div class="svg-icon-comp">
        <svg :class="svgClass">
            <use :xlink:href="svgName"></use>
        </svg>
    </div>
</template>
  
<script>
export default {
    name: 'svg-icon',
    props: {
        iconClass: {
            type: String,
            default: ''
        },
        iconName: {
            type: String,
            require: true
        },
    },
    computed: {
        svgClass() {
            if (this.iconClass) {
                return `svg-icon ` + this.iconClass
            }
            return `svg-icon`
        },
        svgName() {
            return `#icon-${this.iconName}`
        }
    },
}
</script>
  
<style lang="scss" scoped>
@import './index.scss'
</style>
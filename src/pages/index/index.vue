<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view v-on:viewIn="changeTitle"></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
           
        }
    },
    watch:{
       
    },
    methods: {
        changeTitle(e) {
            this.nowTitle = e
        }
    }
}
</script>

<style scoped>
    .step-padd {
        padding: 70px 0px 50px;
    }
</style>

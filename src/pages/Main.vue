<template>
    <b-container fluid>
        <Header />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </b-container>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name: 'Main',
    components: {
        Header,
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter-active {
        transition: all .3s ease;
    }

    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .fade-enter, .fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>



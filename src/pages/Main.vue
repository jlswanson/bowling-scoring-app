<template>
    <b-container fluid>
        <Header />
        <Welcome />
    </b-container>
</template>

<script>
import Header from '../components/Header.vue'
import Welcome from '../components/Welcome.vue'

export default {
    name: 'Main',
    components: {
        Header,
        Welcome,
    }
}
</script>

<style lang="scss" scoped>

</style>



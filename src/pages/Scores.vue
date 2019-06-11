<template>
    <div>
        <Scoring />
    </div>
</template>

<script>
import Scoring from '../components/Scoring.vue'

export default {
    name: 'Scores',
    components: {
        Scoring,
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';
    
    div * {
        color: $white;
    }
</style>



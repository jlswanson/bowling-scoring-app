<template>
    <div>
        <total-score text="Final Score:" />

        <b-button variant="secondary"
            size="sm"
            @click="clearAndContinue">New Game</b-button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TotalScore from '../components/TotalScore.vue'

export default {
    name: 'FinalScore',
    components: {
        TotalScore,
    },
    methods: {
        ...mapMutations([
            'clearScores',
        ]),
        
        clearAndContinue() {
            this.clearScores();
            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        text-align: center;
    }
</style>



<template>
    <b-button variant="light"
        size="sm"
        v-if="frameNumber > 1"
        @click="endAndContinue">End Game</b-button>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'EndGame',
    computed: {
        ...mapState([
            'frameNumber',
            'scoreString'
        ]),
    },
    methods: {
        ...mapMutations([
            'resetFrameNumber',
        ]),

        ...mapActions([
            'fetchScore',
        ]),

        endAndContinue() {
            let remainingFrames = 10 - this.frameNumber;
            var scorePayload = this.scoreString;

            for(var i = 0; i <= remainingFrames; i++) {
                scorePayload += '00';
            }

            let payload = {
                string: scorePayload,
                increment: false
            }

            this.fetchScore(payload);
            this.resetFrameNumber();
            this.$router.push({name: 'final'});
        },
    },
}
</script>



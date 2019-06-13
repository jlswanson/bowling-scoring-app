<template>
    <b-container class="scoring">
        <b-row class="align-items-end">
            <b-col>
                <h3 v-if="username !== ''">Hi, {{username}}!</h3>
                <p>Current frame: {{frameNumber}}</p>
            </b-col>
            <b-col class="logo">
                <img src="../assets/logo.png"
                    alt="Brooklyn Logo"
                    title="Score your bowling game" />
            </b-col>
        </b-row>

        <b-row v-if="error !== null" class="error">
            <b-col>
                <b-alert show dismissible fade variant="light" class="small">{{error}}</b-alert>
            </b-col>
        </b-row>

        <total-score text="Current Score:" />

        <add-score-modal @frameScoreSubmitted="updateScore" />
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddScoreModal from './AddScoreModal.vue'
import TotalScore from './TotalScore.vue'

export default {
    name: 'Scoring',
    components: {
        AddScoreModal,
        TotalScore,
    },
    data() {
        return {
            scoreCode: '',
        }
    },
    computed: {
        ...mapState([
            'username',
            'error',
            'frameNumber',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchScore',
        ]),

        updateScore(value) {
            if (value.ball1 === 'X' && this.frameNumber !== 10) {
                this.scoreCode += value.ball1;
            } else {
                this.scoreCode += value.ball1 + value.ball2;
            }

            // If a strike or spare is recorded in frame 10, add third ball value to scoreCode
            if (this.frameNumber === 10 && (value.ball1 === 'X' || value.ball2 === 'S')) {
                this.scoreCode += value.ball3;
            }

            let payload = {
                string: this.scoreCode,
                increment: true
            }

            this.fetchScore(payload);
        },
    },
}
</script>

<style lang="scss" scoped>
    .error {
        margin-top: 3em;
    }

    .logo {
        text-align: right;

        img {
            max-width: 4em;
        }
    }

    h3, p {
        margin-bottom: 0;
    }
</style>



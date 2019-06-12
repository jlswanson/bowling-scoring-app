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

        <b-row class="text-center current-score">
            <b-col>
                <h3>Current Score:</h3>
                <p>{{currentScore}}</p>
            </b-col>
        </b-row>

        <add-score-modal @frameScoreSubmitted="updateScore" />
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddScoreModal from './AddScoreModal.vue'

export default {
    components: {
        AddScoreModal,
    },
    data() {
        return {
            scoreCode: '',
        }
    },
    computed: {
        ...mapState([
            'username',
            'currentScore',
            'error',
            'frameNumber',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchScore',
        ]),

        updateScore(value) {
            if(value.ball1 === 'X') {
                this.scoreCode += value.ball1;
            } else {
                this.scoreCode += value.ball1 + value.ball2;
            }

            this.fetchScore(this.scoreCode);
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

    .current-score {
        margin: 3em 0 2em;

        p {
            font-size: 8em;
            line-height: 1;
        }
    }
</style>



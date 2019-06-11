<template>
    <b-container>
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

        <b-row class="text-center current-score">
            <b-col>
                <h3>Current Score:</h3>
                <p>{{currentScore}}</p>
            </b-col>
        </b-row>

        <add-score-modal :frame="frameNumber" />

        <b-button @click="computeScore">Click me</b-button>
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
            frameNumber: 3,
            currentScore: 53,
            scoreCode: '',
        }
    },
    computed: {
        ...mapState([
            'username',
        ]),
    },
    methods: {
        ...mapActions([
            'fetchScore',
        ]),

        updateScoreCode() {

        },

        async computeScore() {
            await this.fetchScore('2354S');
        }
    },
}
</script>

<style lang="scss" scoped>
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
        p {
            font-size: 8em;
            line-height: 1;
        }
    }
</style>



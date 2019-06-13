<template>
    <b-row class="text-center current-score">
        <b-col>
            <h3>{{text}}</h3>
            <p>{{currentScore}}</p>
        </b-col>
    </b-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TotalScore',
    props: [
        'text'
    ],
    computed: {
        ...mapState([
            'currentScore'
        ]),
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';
    
    .current-score {
        color: $white;
        margin: 3em 0 2em;

        p {
            font-size: 8em;
            line-height: 1;
        }
    }
</style>



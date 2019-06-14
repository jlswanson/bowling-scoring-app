<template>
    <header class="row">
        <b-col class="logo">
            <router-link to="/">Brooklyn</router-link>
        </b-col>

        <b-col class="end-game">
            <end-game />
        </b-col>
    </header>
</template>

<script>
import { mapState } from 'vuex'
import EndGame from './EndGame.vue'

export default {
    name: 'Header',
    components: {
        EndGame,
    },
    computed: {
        ...mapState([
            'frameNumber'
        ]),
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';

    header {
        background-color: #262626;
        box-shadow: 0px 3px 5px 0px rgba(41, 41, 41, .3);
        margin-bottom: 3em;
    }

    .logo {
        a {
            color: $white;
            display: block;
            font-family: 'Sacramento', Georgia, 'Times New Roman', Times, serif;
            font-size: 2em;
            margin: 0;
            padding: .35em 1em;
            transition: all .3s ease-in-out;

            &:hover, &:focus, &:active {
                color: $white;
                opacity: .5;
                text-decoration: none;
            }
        }
    }

    .end-game {
        display: flex;
        align-items: center;

        button {
            margin-left: auto;
            margin-right: 1em;
        }
    }
</style>



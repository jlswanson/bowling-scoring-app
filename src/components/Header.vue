<template>
    <header class="row">
        <b-col>
            <p>Brooklyn</p>
        </b-col>

        <b-col>
            <button v-if="isBeingScored">End Game</button>
        </b-col>
    </header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        isBeingScored: function() {
            return false;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';

    header {
        background-color: #262626;
        box-shadow: 0px 3px 5px 0px rgba(41, 41, 41, .3)
    }

    p {
        color: $white;
        font-family: 'Sacramento', Georgia, 'Times New Roman', Times, serif;
        font-size: 2em;
        margin: 0;
        padding: .35em 1em;
    }
</style>



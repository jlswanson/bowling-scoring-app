<template>
    <div>
        <b-button v-b-modal.add-frame-scores
            variant="secondary"
            size="sm">Add Next Frame's Scores</b-button>

        <b-modal id="add-frame-scores"
            :title="'Add Scores for Frame ' + frame">
            <div class="small">
                <p>How to enter your score:</p>
                <p>For a strike, enter an <span class="font-weight-bold">X</span> under Ball 1.</p>
                <p>For a spare, enter the number of pins (0-9) knocked down on the first ball, then an <span class="font-weight-bold">S</span> under Ball 2.</p>
                <p>Enter the number of pins (0-9) knocked down on each ball if less than ten pins were knocked down in the frame.</p>
            </div>
            <b-form inline>
                <b-form-group label="Ball 1">
                    <b-form-input v-model="form.ball1">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Ball 2">
                    <b-form-input v-model="form.ball2">
                    </b-form-input>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'AddScoreModal',
    props: [
        'frame',
    ],
    data() {
        return {
            form: {
                ball1: null,
                ball2: null,
            },
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';

    form {
        justify-content: space-evenly;
    }

    .modal-header {
        background-color: $primary;
        color: $white;
    }
</style>



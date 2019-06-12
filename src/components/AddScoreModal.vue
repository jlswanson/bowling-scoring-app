<template>
    <div class="text-center">
        <b-button v-b-modal.add-frame-scores
            variant="secondary"
            size="sm">Add Scores</b-button>

        <b-modal id="add-frame-scores"
            :title="'Add Scores for Frame ' + frameNumber"
            @cancel="cancelModal()"
            @ok="confirmModal()">
            <!-- <div class="small">
                <p>How to enter your score:</p>
                <p>For a strike, enter an <span class="font-weight-bold">X</span> under Ball 1.</p>
                <p>For a spare, enter the number of pins (0-9) knocked down on the first ball, then an <span class="font-weight-bold">S</span> under Ball 2.</p>
                <p>Enter the number of pins (0-9) knocked down on each ball if less than ten pins were knocked down in the frame.</p>
            </div> -->

            <b-form inline>
                <b-form-group label="How'd you do?">
                    <b-form-radio-group v-model="selected">
                        <b-form-radio @change="selectedStrike" value="strike">Strike!</b-form-radio>
                        <b-form-radio @change="selectedSpare" value="spare">Spare!</b-form-radio>
                        <b-form-radio @change="selectedNumerical" value="numbers">Less than 10 pins</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>

                <b-form-group v-if="selected === 'spare' || selected === 'numbers'">
                    <b-form-group label="Ball 1">
                        <b-form-input v-model="form.ball1">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Ball 2">
                        <b-form-input v-model="form.ball2"
                            :disabled="selected === 'spare'">
                        </b-form-input>
                    </b-form-group>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'AddScoreModal',
    data() {
        return {
            form: {
                ball1: null,
                ball2: null,
            },
            selected: '',
        }
    },
    computed: {
        ...mapState([
            'frameNumber'
        ])
    },
    methods: {
        validateScores() {
            /**
             * Form entries must follow these rules:
             * 
             * - Both fields must contain a number, 0-9, if the sum of the fields
             * is less than 10
             * 
             * - If a spare is recorded, the first field must be a number less
             * than 10, and the second field must be the letter 'S'
             * 
             * - If a strike is recorded, the first field must be a letter 'X',
             * and the second field must be blank or 0
            */
        },
        clearForm() {
            this.form.ball1 = null;
            this.form.ball2 = null;
        },
        selectedStrike() {
            this.clearForm();
            this.form.ball1 = 'X';
        },
        selectedSpare() {
            this.clearForm();
            this.form.ball2 = 'S';
        },
        selectedNumerical() {
            this.clearForm();
        },
        cancelModal() {
            this.clearForm();
            this.selected = '';
        },
        confirmModal(event) {
            this.$emit('frameScoreSubmitted', this.form);
            this.clearForm();
            this.selected = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';

    .modal-header {
        background-color: $primary;
        color: $white;
    }
</style>



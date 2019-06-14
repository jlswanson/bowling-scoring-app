<template>
    <div class="text-center">
        <b-button v-b-modal.add-frame-scores
            variant="secondary"
            size="sm">Add Scores</b-button>

        <b-modal id="add-frame-scores"
            :title="'Add Scores for Frame ' + frameNumber"
            @cancel="cancelModal()"
            @ok="validateScores($event)">

            <b-form>
                <b-form-group label="How'd you do?">
                    <b-form-radio-group v-model="selected">
                        <b-form-radio @change="selectedStrike" value="strike">Strike!</b-form-radio>
                        <b-form-radio @change="selectedSpare" value="spare">Spare!</b-form-radio>
                        <b-form-radio @change="selectedNumerical" value="numbers">Less than 10 pins</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>

                <b-alert variant="danger"
                    :show="validationError"
                    dismissible>
                    {{validationErrorMessage}}
                </b-alert>

                <b-form-group v-if="(selected === 'spare' || selected === 'numbers') && frameNumber !== 10"
                    class="ball-inputs">
                    <b-form-group label="Ball 1">
                        <b-form-input v-model="form.ball1"
                            :disabled="selected === 'strike'">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Ball 2">
                        <b-form-input v-model="form.ball2"
                            :disabled="selected === 'spare'">
                        </b-form-input>
                    </b-form-group>
                </b-form-group>
            
                <div class="small"
                    v-if="(selected === 'spare' || selected === 'strike') && frameNumber === 10">
                    <p>How to enter your score:</p>
                    <p>For a strike, enter an <span class="font-weight-bold">X</span>.</p>
                    <p>For a spare, enter the number of pins (0-9) knocked down on the first ball, then an <span class="font-weight-bold">S</span> on the second ball.</p>
                    <p>Enter the number of pins (0-9) knocked down on each ball if less than ten pins were knocked down.</p>
                </div>

                <b-form-group v-if="(selected === 'spare' || selected === 'strike') && frameNumber === 10"
                    class="ball-inputs">
                    <b-form-group label="Ball 1">
                        <b-form-input v-model="form.ball1"
                            :disabled="selected === 'strike'">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Ball 2">
                        <b-form-input v-model="form.ball2"
                            :disabled="selected === 'spare'">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Ball 3">
                        <b-form-input v-model="form.ball3">
                        </b-form-input>
                    </b-form-group>
                </b-form-group>

                <b-form-group v-if="selected === 'numbers' && frameNumber === 10"
                    class="ball-inputs">
                    <b-form-group label="Ball 1">
                        <b-form-input v-model="form.ball1"
                            :disabled="selected === 'strike'">
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
                ball3: null,
            },
            selected: '',
            validationError: false,
            validationErrorMessage: '',
        }
    },
    computed: {
        ...mapState([
            'frameNumber'
        ])
    },
    methods: {
        validateScores(event) {
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
             * and the second field must be blank
            */

           // less than 10 pins
           if (this.selected === 'numbers') {

               let regex = /[0-9]/;
               let ball1 = regex.test(this.form.ball1);
               let ball2 = regex.test(this.form.ball2);
               let sum = +this.form.ball1 + +this.form.ball2;

               if (ball1 === true && ball2 === true && sum < 10) {
                   this.validationError = false;
                   this.confirmModal();
               } else {
                   event.preventDefault();
                   this.validationError = true;

                   if (sum > 9) {
                       this.validationErrorMessage = 'The sum of Ball 1 and Ball 2 must be less than 10.';
                   } else {
                        this.validationErrorMessage = 'Please enter only numbers 0-9.';
                   }
               }
           }

            // spare
            if (this.selected === 'spare' && this.frameNumber !== 10) {
                let regex = /[0-9]/;
                let ball1 = regex.test(this.form.ball1);

                if (ball1 === true && +this.form.ball1 < 10) {
                    this.validationError = false;
                    this.confirmModal();
                } else {
                    event.preventDefault();
                    this.validationError = true;
                    this.validationErrorMessage = 'Ball 1 must be a number between 0 and 9.';
                }
            }

            // strike
            if (this.selected === 'strike' && this.frameNumber !== 10) {
                this.confirmModal();
            }

            // 10th frame
            if (this.frameNumber === 10) {
                // spare
                if (this.selected === 'spare') {
                    let regex = /[0-9]/;
                    let regex3 = /X|[0-9]/;

                    let ball1 = regex.test(this.form.ball1);
                    let ball3 = regex3.test(this.form.ball3);

                    if ((ball1 === true && +this.form.ball1 < 10) && (ball3 === true && (this.form.ball3 === 'X' || +this.form.ball3 < 10))) {
                        this.validationError = false;
                        this.confirmModal();
                    } else if (ball1 === false || +this.form.ball1 > 9) {
                        event.preventDefault();
                        this.validationError = true;
                        this.validationErrorMessage = 'Ball 1 must be a number between 0 and 9.';
                    } else if (ball3 === false || +this.form.ball3 > 9) {
                        event.preventDefault();
                        this.validationError = true;
                        this.validationErrorMessage = 'Final ball must be a strike (X) or a number between 0 and 9.';
                    }
                }

                // strike
                if (this.selected === 'strike') {
                    let regex2 = /X|[0-9]/;
                    let regex3 = /S|[0-9]/;

                    let ball2 = regex2.test(this.form.ball2);
                    let ball3 = regex3.test(this.form.ball3);

                    if ((ball2 === true && (this.form.ball2 === 'X' || +this.form.ball2 < 10)) && (ball3 === true && (this.form.ball3 === 'S' || +this.form.ball3 < 10))) {
                        if (this.form.ball2 === 'X' && this.form.ball3 === 'S') {
                            event.preventDefault();
                            this.validationError = true;
                            this.validationErrorMessage = 'Final ball can not be a spare when second ball is a strike.';
                        } else {
                            this.validationError = false;
                            this.confirmModal();
                        }
                    } else {
                        event.preventDefault();
                        this.validationError = true;
                        this.validationErrorMessage = 'Please enter a valid score following the instructions below.';
                    }
                }
            }
        },

        clearForm() {
            this.form.ball1 = null;
            this.form.ball2 = null;
            this.form.ball3 = null;
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

        confirmModal() {
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



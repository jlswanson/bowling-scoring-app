<template>
    <b-container>
        <b-row>
            <b-col class="text-center">
                <img src="../assets/logo.png"
                    alt="Brooklyn Logo"
                    title="Welcome to the Brooklyn application!">
                <h1>Welcome!</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center">
                <p>Who's playing?</p>
                <b-form>
                    <b-form-group>
                        <b-form-input v-model="form.name">
                        </b-form-input>
                    </b-form-group>
                    
                    <b-button size="sm"
                        variant="secondary"
                        @click="setAndContinue">Let's go!</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>    
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Welcome',
    data() {
        return {
            form: {
                name: '',
            }
        }
    },
    methods: {
        ...mapMutations([
            'setUsername',
        ]),
        setAndContinue: function() {
            this.setUsername(this.form.name);
            this.$router.push({name: 'scores'});
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/custom.scss';

    .container {
        color: $white;
    }

    img {
        max-width: 10em;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
    }

    p {
        font-size: 1.5rem;
    }
</style>



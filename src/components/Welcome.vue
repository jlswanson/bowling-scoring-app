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
                <b-form>
                    <div class="username-input">
                        <p>Who's playing?</p>
                        <b-form-group>
                            <b-form-input v-model="form.name">
                            </b-form-input>
                        </b-form-group>
                    </div>
                    
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
        setAndContinue() {
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
        margin-bottom: 1em;
        max-width: 10em;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
    }

    p {
        font-size: 1.2rem;
    }

    .username-input {
        margin-top: 2em;
    }

    input {
        display: block;
        margin: auto;
        max-width: 20rem;
    }

    button {
        margin-top: .5em;
    }
</style>



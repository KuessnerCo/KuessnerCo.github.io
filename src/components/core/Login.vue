<template>
  <v-dialog max-width="600px" v-model="firstTime">
    <v-card>
      <v-card-title class="font-weight-thin display-1 justify-center"><v-icon left size="30px">mdi-account</v-icon>Login</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-row>
            <v-col class="my-2" sm="2">
              Username:
            </v-col>
            <v-col>
              <v-text-field :rules="userNameRules" required v-model="typedInUserName"  dense label="Type in Username" filled outlined >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="my-2" sm="2">
              Password:
            </v-col>
            <v-col>
              <v-text-field :rules="passwordRules"  required type="password" v-model="typedInPassword" dense label="Type in Password" filled outlined >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <div v-if="this.wrong" class="">Wrong Username or Password</div>
        <v-divider></v-divider>
      </v-card-text>

      <v-card-actions>

        <v-btn text class="d-flex align-content-center text-capitalize">Cancel</v-btn>
        <v-spacer/>
        <v-btn v-if="valid" @click="validateCredentials" color="secondary" class="text-capitalize">Login</v-btn>
        <v-btn v-else disabled color="secondary" class="text-capitalize">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        wrong: false,
        valid: false,
        firstTime: true,
        typedInUserName: "",
        typedInPassword: "",
        username: 'Tobi',
        password: 'di-team2020',
        userNameRules: [
          v => !!v || 'Username can not be empty'],
        passwordRules: [
          v => !!v || 'Password can not be empty']
      }
    },
    methods: {
      validateCredentials() {

        if(this.typedInUserName === this.username && this.typedInPassword === this.password) {
        this.firstTime = false;
        }
        else {
          this.wrong= true;
        }

      }
    }

  }
</script>

<style scoped>

</style>

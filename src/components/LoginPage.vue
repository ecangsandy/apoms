<template>
  <section class="vh-100" style="background-color: #508bfc">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <form action="" @submit.prevent="userLogin">
                <h3 class="mb-5">Sign in</h3>
                <div
                  class="alert alert-danger alert-dismissible"
                  v-if="errorresponse"
                  role="alert"
                >
                  {{ errorresponse.message }}
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="email"
                    class="form-control form-control-lg"
                    v-model="form.nohp"
                    v-bind:class="{ 'is-invalid': form.emailRulle }"
                  />
                  <div
                    class="invalid-feedback"
                    id="feedback-1"
                    v-if="errors[0]"
                  >
                    {{ errors[0].message }}
                  </div>
                  <label class="form-label" for="typeEmailX-2">No HP</label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    v-model="form.password"
                    v-bind:class="{ 'is-invalid': form.passwordRulle }"
                  />
                  <div
                    class="invalid-feedback"
                    id="feedback-2"
                    v-if="errors[0]"
                  >
                    {{ errors[0].message }}
                  </div>
                  <label class="form-label" for="typePasswordX-2"
                    >Password</label
                  >
                </div>

                <!-- Checkbox -->
                <!-- <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div> -->

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import axios from "axios";
// import http from '@/http-commont'
export default {
  name: "Login-item",
  data: () => ({
    valid: true,
    name: "",
    form: {
      nohp: "",
      email: "",
      emailRulle: false,
      password: "",
      passwordRulle: false,
    },
    errors: [],
    errnum: 0,
    errorresponse: null,
  }),
  mounted() {
    // axios.get("K3/dokter").then((res) => {
    //     console.log(res);
    // });
    //   axios.get("K3/dokter").then((res) => {
    //   // this.load();
    //   // this.form.name = "";
    //   console.log(res.data);
    //   var dokterlis = res.data;
    //   //   for (let index = 0; index < dokterlis.length; index++) {
    //   //     // const element = array[index];
    //   //     console.log(res.data[index].FS_NM_PEG);
    //   //     //  data = res.data[index].FS_NM_PEG;
    //   //     data.push(res.data[index].FS_NM_PEG);
    //   //     this.items = data;
    //   //   }
    //   this.items = dokterlis;
    // });
  },
  methods: {
    validate() {
      this.errors = [];
      this.errnum = 0;
      var len = this.form.email.length;
      if ((len = 0)) {
        this.form.emailRulle = true;
        this.errors.push({
          message: "Please provide a valid email address.",
        });
        this.errnum += 1;
      } else {
        document.getElementById("email").className = "form-control is-valid";
      }
      // email validate
      if (this.form.password.length < 2) {
        this.form.passwordRulle = true;
        this.errors.push({
          message: "Please provide a valid email address.",
        });
        this.errnum += 1;
      } else {
        document.getElementById("password").className = "form-control is-valid";
      }
    },
    userLogin() {
      this.validate();
      if (this.errnum > 0) {
        // alert('Gagal');
      } else {
        // alert('ok')
        this.$store
          .dispatch("login", this.form)
          .then((response) => {
            console.log(response.data.status + "status");
            if (response.data.status == "401") {
              this.errorresponse = response.data;
              // alert(response.data.message)
              this.form.password = "";
              // this.form.password.focus();
              // console.log(error);
            } else {
              this.$router.push({ name: "keyboard" });
              console.log(response);
            }
          })
          .catch((error) => {
            console.log("err: " + error);
            // console.log(error.toJSON());
            //   alert(error)
            // this.errorresponse = error.response.data.errors;
            // console.log(errors);
          });
      }
    },
  },
};
</script>

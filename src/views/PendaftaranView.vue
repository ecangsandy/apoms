<template>
  <section>
    <body class="bg-light">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Main navigation"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Offcanvas navbar</a>
          <button
            class="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >Dashboard</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Notifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Switch account</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Settings</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main class="container">
        <div class="my-3 p-3 bg-body rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">Form Pendaftaran</h6>
          <div class="text-muted pt-3">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">No RM</label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="No RM"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          Cari
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-6 ">
                  <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-3 col-form-label"
                      >Nama Pasien</label
                    >
                    <div class="col-sm-9">
                      <input
                        v-model="form.nm_pasien"
                        type="text"
                        class="form-control"
                        id="nmPasien"
                        placeholder="Nama Pasien"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-3 col-form-label"
                      >Alamat</label
                    >
                    <div class="col-sm-9">
                     <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control mb-2"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                     <label for="colFormLabel" class="col-sm-3 col-form-label"
                      ></label
                    >
                    <div class="col-sm-9 ">
                     <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control mb-2"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                     <label for="colFormLabel" class="col-sm-3 col-form-label"
                      >Kota</label
                    >
                    <div class="col-sm-9 ">
                     <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control mb-2"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                     <label for="colFormLabel" class="col-sm-3 col-form-label"
                      >Layanan</label
                    >
                    <div class="col-sm-2 ">
                     <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control mb-2"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                    <div class="col-sm-7 ">
                     <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control mb-2"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <label for="nmPasien">Nama Pasien</label>
                      <input
                        v-model="form.nm_pasien"
                        type="text"
                        class="form-control"
                        id="nmPasien"
                        placeholder="Nama Pasien"
                      />
                    </div>
                    <div class="form-group">
                      <label for="alamatPasien">Alamat</label>
                      <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control mb-2"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        v-model="form.alamatPasien"
                        type="text"
                        class="form-control"
                        id="alamatPasien"
                        placeholder="Alamat"
                      />
                    </div>
                    <div class="form-group">
                      <label for="nmTempatLhr">Tempat Lahir</label>
                      <input
                        v-model="form.tempatlahir"
                        type="text"
                        class="form-control"
                        id="nmTempatLhr"
                        placeholder="Tempat lahir"
                      />
                    </div>
                    <div class="form-group">
                      <label for="tglLahir">Tanggal Lahir</label>
                      <input
                        v-model="form.tgl_lahir"
                        type="text"
                        class="form-control"
                        id="tglLahir"
                        placeholder="Tanggal Lahir"
                      />
                    </div>
                    <div class="form-group">
                      <label for="tglLahir">Layanan</label>
                      <div>
                        <input
                          v-model="form.tgl_lahir"
                          type="text"
                          class="form-control"
                          id="tglLahir"
                          placeholder="Layanan"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 align-self-end">
                  <div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Nama Pasien</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Alamat</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Tempat Lahir</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Tanggal Lahir</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">
                Continue to checkout
              </button>
            </form>
            <form></form>
          </div>
        </div>
      </main>
    </body>
  </section>
</template>
<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
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
      nm_pasien: "",
      alm_pasien: "",
      tempatlahir: "",
      tgl_lahir: "",
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

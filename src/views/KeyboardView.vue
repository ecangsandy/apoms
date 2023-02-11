<template>
<v-app>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12" class="justify-center">
        <p class="text-h4 text--primary text-center mb-10">
          Anjungan Pendaftaran Online Mandiri (APOM)
        </p>
        <v-text-field
          ref="booking"
          label=""
          filled
          dense
          :value="input"
          class="input"
          @input="onInputChange"
          placeholder="Masukan Kode Booking / No RM"
          @keyup.enter="onEnter"
          align="center"
          :disabled="this.$isMobile()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="justify-center">
        <SimpleKeyboard
          @onChange="onChange"
          @onKeyPress="onKeyPress"
          :input="input"
        />
      </v-col>
      <check-view
        :visible="isConfirm"
        @update-number="update"
        :users="bookingdata"
      />
      <setting :visible="isSetting" @close="close" :users="bookingdata" />
    </v-row>
    <v-dialog v-model="loaddialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Mengambil Data
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</v-app>
</template>

<script>
import SimpleKeyboard from "@/components/SimpleKeyboard.vue";
import CheckView from "@/views/CheckView.vue";
import Setting from "@/views/SettingView.vue";
import { apomAxios } from "@/utils/apilocal";
// import { nextTick } from "vue";
export default {
  //   name: "view-keyboard",
  components: {
    SimpleKeyboard,
    CheckView,
    Setting,
  },
  data: () => ({
    input: "",
    loaddialog: false,
    bookingdata: "",
    isConfirm: false,
    isSetting: false,
  }),
  methods: {
    changeConfirm(status) {
      this.isConfirm = true;
      this.input = "";
      this.$refs.booking.$el.focus();
    },
    onChange(input) {
      this.input = input;
      this.$refs.booking.$el.focus();
    },
    onKeyPress(button) {
      // console.log("button", button);
      if (button == "{enter}") {
        this.loaddialog = true;
        this.getDataFromAPI();
      }
    },
    onEnter() {
      this.loaddialog = true;
      this.getDataFromAPI();
    },
    onInputChange(input) {
      this.input = input;
      this.setFocus();
    },
    update(number) {
      this.isConfirm = number;
      this.input = "";
      this.$refs.booking.$el.focus();
    },
    close() {
      this.isSetting = false;
      this.input = "";
      this.$refs.booking.$el.focus();
    },
    getRequestParams(kd_booking) {
      let params = {};
      // console.log(kd_booking);
      if (kd_booking) {
        params["kd_booking"] = kd_booking;
      }
      return params;
    },
    logout(evt) {
      if (confirm("Are you sure you want to log out?")) {
        //    utils.removeHeaderToken()
        this.$router.push({ name: "login" });
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
      }
    },
    async getDataFromAPI() {
      console.log(this.input);
      if (this.input == ":logout") {
        this.logout();
      } else if (this.input == ":SETTING") {
        this.isSetting = true;
        this.loading = false;
        this.loaddialog = false;
      } else {
        const fmdt = new FormData();
        fmdt.append("kd_booking", this.input);
        apomAxios
          .post("WSDaftar/getRegistrasiByBooking", fmdt, { timeout: 2000 })
          // .post("Pendaftaran/getRegistrasiByBooking", fmdt)
          .then((response) => {
            console.log(response);
            if (response.data.error != true) {
              this.isConfirm = true;
              this.bookingdata = response.data.data;
            } else if (response.data.status == "204") {
              alert(response.data.message);
              this.input = "";
              this.setFocus();
            } else {
              alert(response.data.message);
            }
            this.loading = false;

            this.loaddialog = false;
            // this.dataPasien=
          })
          .catch(function (error) {
            var err = error.toJSON();
            // console.log(err.message);
            alert(err.message);
            this.loading = false;
            this.loaddialog = false;
            // this.loading = false;
            // this.loaddialog = false;
          });
      }
    },
    setFocus: function () {
      this.$refs.booking.focus();
    },

  },
  created() {
    // alert(navigator.userAgent)
    // console.log((navigator))
    window.addEventListener("keydown", (e) => {
      this.$nextTick(() => this.setFocus());
    });
  },
  mounted() {
    setInterval(this.setFocus(), 1000);
  },
};
</script>

<style>
body {
  overflow: hidden;
  height: 100vh;
}
input {
  width: 100%;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
  text-align: center;
}

.keyboardContainer {
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
}

.simple-keyboard.hg-theme-default {
  display: inline-block;
}

.simple-keyboard-main.simple-keyboard {
  width: 97%;
  min-width: 640px;
  background-color: transparent;
}

.simple-keyboard-arrows.simple-keyboard {
  align-self: flex-end;
  background-color: transparent;
}

.simple-keyboard .hg-button.selectedButton {
  background-color: rgba(5, 25, 70, 0.53);
  color: white;
}

.simple-keyboard .hg-button.emptySpace {
  pointer-events: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.simple-keyboard-arrows .hg-row {
  justify-content: center;
}

.simple-keyboard-arrows .hg-button {
  width: 50px;
  flex-grow: 0;
  justify-content: center;
  display: flex;
  align-items: center;
}

.controlArrows {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
}

.simple-keyboard-control.simple-keyboard {
  background-color: transparent;
}

.simple-keyboard-control.simple-keyboard .hg-row:first-child {
  margin-bottom: 10px;
}

.simple-keyboard-control .hg-button {
  width: 50px;
  flex-grow: 0;
  justify-content: center;
  display: flex;
  align-items: center;
}

.numPad {
  display: flex;
  align-items: flex-end;
}

.simple-keyboard-numpad.simple-keyboard {
  background-color: transparent;
}

.simple-keyboard-numpad.simple-keyboard {
  width: 160px;
}

.simple-keyboard-numpad.simple-keyboard .hg-button {
  width: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
}

.simple-keyboard-numpadEnd.simple-keyboard {
  width: 50px;
  background: transparent;
  margin: 0;
  padding: 5px 5px 5px 0;
}

.simple-keyboard-numpadEnd.simple-keyboard .hg-button {
  align-items: center;
  justify-content: center;
  display: flex;
}

.simple-keyboard-numpadEnd .hg-button.hg-standardBtn.hg-button-plus {
  height: 85px;
}

.simple-keyboard-numpadEnd.simple-keyboard .hg-button.hg-button-enter {
  height: 85px;
}

.simple-keyboard.hg-theme-default .hg-button.hg-selectedButton {
  background: rgba(5, 25, 70, 0.53);
  color: white;
}
.hg-theme-default .hg-row .hg-button {
  margin-right: 5px;
  min-width: 45px;
}
.hg-button.hg-functionBtn.hg-button-space {
  width: 350px;
}
.hg-theme-default .hg-button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #b5b5b5;
  border-radius: 5px;
  box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 52px;
  justify-content: center;
  padding: 5px;
}
.hg-row .hg-red {
  background: rgba(247, 0, 0, 0.466);
}
</style>
<style>
.v-application .py-8 {
  padding-top: 32px !important;
  padding-bottom: 32px !important;
  background-color: rgba(255, 255, 255, 0.897);
  margin-top: 10%;
}

.theme--light.v-application {
  color: rgba(0, 0, 0, 0.87);
  background-image: url('../assets/7080861.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>

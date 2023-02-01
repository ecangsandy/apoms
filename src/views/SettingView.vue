<template>
  <v-dialog v-model="visible" fullscreen transition="dialog-bottom-transition">
    <v-card tile align="center">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Setting</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-col cols="8">
        <v-container>
          <v-form ref="form">
            <v-text-field
              v-model="dataForm.printerserver"
              label="Printer Server"
              required
            ></v-text-field>

            <v-btn color="success" @click="saveSetting"> Save Setting </v-btn>
          </v-form>
        </v-container>
      </v-col> </v-card
    ><v-alert v-show="messagews" prominent type="warning">
      <v-row align="center">
        <v-col class="grow">
          {{ messagews }}
        </v-col>
      </v-row>
    </v-alert>
    <v-alert
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
    >
      Your IP <strong>{{}}</strong> .
    </v-alert>
  </v-dialog>
</template>
<script>
import { mainAxios } from "@/utils/apilocal";
export default {
  props: {
    users: {},
    visible: {
      default: false,
    },
  },
  data: () => ({
    messagews: false,
    iplocal: false,
    dataForm: {
      printerserver: "",
    },
  }),
  methods: {
    close() {
      this.$emit("close", false);
      // this.cetakulang = false;
    },

    saveSetting() {
       let fmdt = new FormData();
      fmdt.append("printerserver", this.dataForm.printerserver);
      mainAxios
          .post("Setting/saveSettingSEP/", fmdt)
          .then((response) => {
            if (response.data.data) {
              this.dataForm.printerserver = response.data.data.FS_PRINTER_NAME;
            } else {
              this.dataForm.printerserver = "";
            }
            this.iplocal = response.data.iplocal;
          })

    },
  },
  watch: {
    visible(envt) {
      console.log(envt);
      // Be sure to validate default values
      if (envt) {
        mainAxios
          .get("Setting/getWS/")
          .then((response) => {
            if (response.data.data) {
              this.dataForm.printerserver = response.data.data.FS_PRINTER_NAME;
            } else {
              this.dataForm.printerserver = "";
            }
            this.iplocal = response.data.iplocal;
          })
          .catch((err) => {
            this.iplocal = err;
          });
      }
    },
  },
  mounted() {
    //pseudo code
  },
};
</script>

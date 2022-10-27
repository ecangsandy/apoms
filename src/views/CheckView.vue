<template>
  <v-dialog
    v-model="visible"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card tile align="center">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Data Pasien</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon x-large to="/print">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-col cols="6">
        <v-card>
          <v-subheader></v-subheader>

          <v-list two-line>
            <template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Nama Pasien </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ users.FS_NM_PASIEN }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Layanan Tujuan </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ users.FS_NM_LAYANAN }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>NO RM </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ users.FS_MR }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Dokter </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ users.FS_NM_PEG }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Alamat </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ users.FS_ALM_PASIEN }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
            </template>
          </v-list>
          <v-card-actions>
            
          </v-card-actions>
        </v-card>
      </v-col>
    </v-card>
    <PrintView :sep="dataSEP" />
  </v-dialog>
</template>
<script>
import PrintView from "@/views/PrintView.vue";
export default {
  props: {
    users: {},
    visible: {
      default: false,
    },
  },
  components: {
    PrintView,
  },

  data: () => ({
    cards: ["Today"],
    loading2: false,
    dataSEP: {},
    no_sep: false,
    visible_sep: false,
    imgttd: "",
  }),
  methods: {
    close() {
      this.$emit("update-number", false);
      // this.visible= false;
    },
    saveSEP() {
      this.loading = true;
      const fmdt = new FormData();
      fmdt.append("kd_booking", this.input);
      axios.defaults.baseURL =
        "http://172.166.122.218/vue-service/index.php/api/";
      axios.post("Pendaftaran/SaveSEP", fmdt).then((response) => {
        // if(response.status == 201){
        console.log("tes");
        this.no_sep = response.data.data.no_sep;
        this.getDataSEP();
        //   this.visible_sep = true;
        // }

        //   this.dataSEP = response.data.data;
        // this.bookingdata = "ASDA"
        this.loaddialog = false;
        this.isConfirm = true;
        // this.dataPasien=
      });
    },
    async getDataSEP() {
      //   console.log(this.input);
      // const params = this.input;
      const fmdt = new FormData();
      fmdt.append("no_sep", this.no_sep);
      fmdt.append("kd_booking", "MAXMK1");
      axios.defaults.baseURL = "http://172.166.122.217/e-pasien/api/";
      axios.post("WSDaftar/getSEP", fmdt).then((response) => {
        this.loading = false;
        if (response.data.status == "201") {
          console.log(response.data);
          this.imgttd = "data:image/png;base64," + response.data.data.image_ttd;
          this.dataSEP = response.data.data;
          // this.$htmlToPaper("cetaksep");
          this.$htmlToPaper("cetaksep", null, (e) => {
            this.close();
          });
        }
        // this.bookingdata = "ASDA"
        this.loaddialog = false;
        this.isConfirm = true;
        // this.dataPasien=
      });
    },
    print() {
      // this.isConfirm = number;
    },
  },
  created: function () {
    console.log("user data from parent component:");
    console.log(this.user); //prints out an empty string
  },
};
</script>

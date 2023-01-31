<template>
  <v-dialog v-model="visible" fullscreen transition="dialog-bottom-transition">
    <v-card tile align="center">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Data Pasien</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            :loading="loading_print"
            :disabled="loading_print"
            icon
            x-large
            @click="saveSEP"
          >
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-col cols="6">
        <v-alert v-show="cetakulang" prominent type="error">
          <v-row align="center">
            <v-col class="grow">
              {{ messageerror }}
            </v-col>
            <v-col class="shrink">
              <v-btn @click="cetakUlang" v-show="cetak_btn">Cetak Ulang</v-btn>
            </v-col>
          </v-row>
        </v-alert>
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
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-card><v-alert prominent type="warning">
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
      Your IP <strong>{{iplocal}}</strong> .
    </v-alert>
    <PrintView :sep="dataSEP" :visible_sep="check_sep" />
  </v-dialog>
</template>
<script>
import PrintView from "@/views/PrintView.vue";
import { apomAxios, mainAxios, ips, iplocal } from "@/utils/apilocal";
// import "../plugins/axios";
// import { ips } from "@/utils/ws";
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
    messagews: false,
    iplocal: false,
    cards: ["Today"],
    loading2: false,
    dataSEP: [],
    no_sep: false,
    visible_sep: false,
    imgttd: "",
    check_sep: false,
    cetakulang: false,
    dtanrian: {},
    messageerror: null,
    loading_print: false,
    cetak_btn: false,
    connection: false,
  }),
  methods: {
    close() {
      this.$emit("update-number", false);
      this.cetakulang = false;
    },
    saveSEP() {
      this.loading_print = true;
      // console.log( this.users);
      const fmdt = new FormData();
      // fmdt.append("kd_booking", '9ZEUFO');
      fmdt.append("FS_MR", this.users.FS_MR);
      fmdt.append("FS_KD_JAMINAN", this.users.FS_KD_JAMINAN);
      fmdt.append("FS_KD_LAYANAN", this.users.FS_KD_LAYANAN);
      fmdt.append("FS_KD_CARA_MASUK_DK", this.users.FS_KD_CARA_MASUK_DK);
      fmdt.append("FS_KD_KARCIS", this.users.FS_KD_KARCIS);
      fmdt.append("FN_KARCIS", this.users.FN_KARCIS);
      fmdt.append("FS_KD_SMF", this.users.FS_KD_SMF);
      fmdt.append("FS_NO_RUJUKAN", this.users.FS_NO_RUJUKAN);
      fmdt.append("FS_KD_INSTALASI", this.users.FS_KD_INSTALASI);
      fmdt.append("FS_NO_PESERTA_ASURANSI", this.users.FS_NO_PESERTA_ASURANSI);
      fmdt.append("asalFaskes", this.users.asalFaskes);
      fmdt.append("FB_KECELAKAAN", this.users.FB_KECELAKAAN);
      fmdt.append("fs_tujuan_kunjungan", this.users.FS_TUJUAN_KUNJUNGAN);
      fmdt.append("fs_flag_proc", this.users.FS_FLAG_PROC);
      fmdt.append("fs_kd_penunjang", this.users.FS_KD_PENUNJANG);
      fmdt.append("fs_ass_pelayanan", this.users.FS_ASS_PELAYANAN);
      if (this.users.no_kontrol_bpjs != null) {
        fmdt.append("no_kontrol_bpjs", this.users.no_kontrol_bpjs);
      }
      fmdt.append("FS_KD_DPJP", this.users.FS_KD_DPJP);
      fmdt.append("FS_TLP_PASIEN", this.users.FS_TLP_PASIEN);
      fmdt.append("tglKunjungan", this.users.tglKunjunganBPJS);
      fmdt.append("kodePerujuk", this.users.kodePerujuk);
      fmdt.append("kodeICD", this.users.kodeICD);
      fmdt.append("FS_KD_KELAS_DIJAMIN", this.users.FS_KD_KELAS_DIJAMIN);
      fmdt.append("kd_booking", this.users.CODE_BOOKING_REG);
      // axios.defaults.baseURL = "http://172.166.122.217/e-pasien/Api/";
      apomAxios.post("WSDaftar/registrasi", fmdt).then((response) => {
        // console.log('res'+ response.data.status);
        var data = response.data;
        // console.log(data);
        if (data.status == 201) {
          //SEP SUCCESS
          // var sep_no = '1108R0011221V011987';
          var sep_no = data.data.FS_NO_SEP;

          // this.no_sep = response.data.data.no_sep;
          this.no_sep = sep_no;
          this.getDataSEP();
          //   this.visible_sep = true;
        } else if (data.status == 302) {
          // SEP already
          this.cetakulang = true;
          this.messageerror = data.message;
          // console.log(data.data.no_rm);
          this.cetak_btn = true;
          this.dtanrian = data.data;
          this.getAntrian();
        } else if (data.status == 204 || data.status == 400) {
          this.cetakulang = true;
          this.messageerror = data.message;
          this.cetak_btn = false;
        }
        // this.getDataSEP();

        //   this.dataSEP = response.data.data;
        // this.bookingdata = "ASDA"
        this.loading_print = false;
        this.isConfirm = true;
        // this.dataPasien=
      });
    },
    async getAntrian() {
      const fmdtsep = new FormData();
      // fmdtsep.append("no_rm", '332801100561871');
      fmdtsep.append("no_rm", this.dtanrian.no_rm);
      // axios.defaults.baseURL = "http://172.166.122.217/e-pasien/api/";
      apomAxios.post("WSDaftar/getAntrianMYSQL", fmdtsep).then((response) => {
        this.loading = false;
        // console.log(this.dtanrian.no_rm);
        if (response.data.status == "302") {
          console.log(response.data.data);
          // var datas = response.data;
          var formdatas = new FormData();
          formdatas.append("no_antri", response.data.data.NoAntri);
          formdatas.append("Nama", response.data.data.Nama);
          formdatas.append("NoRM", response.data.data.NoRM);
          //           for ( var key in response.data.data ) {
          //             console.log(item[key]);
          //     formdatas.append(key, item[key]);
          // }
          //  axios.defaults.baseURL = "http://172.166.122.218/vue-service/index.php/api";
          mainAxios.post("Antrian/cetakEps/", formdatas).then((response) => {});
          // this.imgttd = "data:image/png;base64," + response.data.data.image_ttd;
          // this.dataSEP = response.data.data;
          // this.$htmlToPaper("cetaksep");
        }
        // this.bookingdata = "ASDA"
        this.loaddialog = false;
        this.isConfirm = true;
        // this.dataPasien=
      });
    },
    sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
    async getDataSEP() {
      // console.log(this);
      // const params = this.input;
      const fmdt = new FormData();
      fmdt.append("no_sep", this.no_sep);
      // fmdt.append("no_sep", '0301R0011117V000008');
      // fmdt.append("kd_booking", "9ZEUFO");
      fmdt.append("kd_booking", this.users.CODE_BOOKING_REG);
      // axios.defaults.baseURL = "http://172.166.122.217/e-pasien/api/";
      apomAxios.post("WSDaftar/getSEP", fmdt).then((response) => {
        this.loading = false;
        console.log(response);
        // if (response.data.status == "201") {
        // console.log(response.data);
        // this.imgttd = "data:image/png;base64," + response.data.data.image_ttd;
        var res = {
          TTD_URL:
            process.env.VUE_APP_URL_IMG + "asset/upload/signature/NZM315.jpg",
        };
        this.dataSEP = response.data.data;
        Object.assign(this.dataSEP, res);

        var element = {};
        element.ttd_url = process.env.VUE_APP_BASE_API_APOM + this.dataSEP;
        // this.dataSEP = element.ttd_url;
        // this.dataSEP.push(element);
        this.check_sep = true;
        // this.$htmlToPaper("cetaksep");
        // send to ws Print

        const data = JSON.stringify({
          command: "cetak",
          type: "cetakSEPRJalan",
          message: this.dataSEP,
        });
        this.sendMessage(data);
        // this.$htmlToPaper("cetaksep", null, (e) => {
        //   this.close();
        // });
        // }
        // this.bookingdata = "ASDA"
        this.loaddialog = false;
        this.isConfirm = true;
        // this.dataPasien=
      });
    },
    async cetakUlang() {
      console.log(this.dtanrian.no_rm);
      this.no_sep = this.dtanrian.fs_no_sep;
      // this.no_sep = this.dtanrian.fs_no_sep
      this.getDataSEP();
    },
  },
  created: function () {
    // document.documentElement.style.overflow = "hidden"
    // console.log(this.users); //prints out an empty string
  },
  mounted() {

   
  },
  created: function () {
    //  console.log(ips);
    this.connection = new WebSocket(ips);
    this.messagews = ips
    this.iplocal = iplocal ;
    // console.log("Starting connection to WebSocket Server");

    this.connection.onmessage = function (event) {
      // this.messagews = "Nyambung";
      console.log(event);
    };

    this.connection.onopen = function (event) {
      this.messagews = "Nyambungss";
      // console.log(event)
      // console.log("Successfully connected to the echo websocket server...")
    };
  },
};
</script>

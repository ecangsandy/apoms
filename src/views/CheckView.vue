<template>
  <v-dialog
    v-model="visible"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Data Pasien</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
              icon
              x-large
            >
              <v-icon>mdi-printer</v-icon>
              
            </v-btn>

         
        </v-toolbar-items>
      </v-toolbar>

      <v-col>
        <v-card>
          <v-subheader></v-subheader>

          <v-list two-line>
            <template>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Nama Pasien </v-list-item-title>
                  <v-list-item-subtitle>
                  {{users.FS_NM_PASIEN}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Layanan Tujuan </v-list-item-title>
                  <v-list-item-subtitle>
                  {{users.FS_NM_LAYANAN}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>NO RM </v-list-item-title>
                  <v-list-item-subtitle>
                  {{users.FS_MR}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Dokter </v-list-item-title>
                  <v-list-item-subtitle>
                  {{users.FS_NM_PEG}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Alamat </v-list-item-title>
                  <v-list-item-subtitle>
                  {{users.FS_ALM_PASIEN}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    users: {},
    visible: {
      default: false,
    },
  },
  data: () => ({
    cards: ["Today"],
  }),
  methods: {
    close() {
      this.$emit("update-number", false);
      // this.visible= false;
    },
  },
  created: function () {
    console.log("user data from parent component:");
    console.log(this.user); //prints out an empty string
  },
};
</script>

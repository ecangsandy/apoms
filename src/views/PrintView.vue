<template>
  <div v-show="visible_sep" style="visible: false">
    <div id="cetaksep">
      <table width="100%">
        <tr>
          <td>
            <table>
              <tr>
                <td width="420">
                  <img
                    src="../assets/bpjslogo.png"
                    alt="Image"
                    width="400"
                    height="68"
                  />
                </td>
                <td width="580">
                  <div
                    style="
                      font-size: 28px;
                      text-align: center;
                      font-weight: bold;
                    "
                  >
                    SURAT ELEGIBILITAS PESERTA
                  </div>
                  <div style="font-size: 21px; text-align: center">
                    RSUD dr. SEOSELO SLAWI
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <div style="font-size: 20px" class="row">
        <div class="col-8">
          <table width="100%">
            <tr>
              <td width="170">No. SEP</td>
              <td>:</td>
              <td>
                <strong>{{ sep.FS_NO_SEP }}</strong>
              </td>
              <td>(MR. {{ sep.FS_MR }})</td>
            </tr>
            <tr>
              <td width="170">Tgl. SEP</td>
              <td>:</td>
              <td>
                {{ new Date(sep.FD_TGL_SEP) | dateFormat("DD MMM YYYY") }}
              </td>
              <td>
                (SEX. {{ sep.FB_JNS_KELAMIN == 1 ? "Perempuan" : "Laki-laki" }})
              </td>
            </tr>
            <tr>
              <td width="170">No. Kartu</td>
              <td>:</td>
              <td colspan="2">{{ sep.FS_NO_PESERTA }}</td>
            </tr>
            <tr>
              <td width="170">Nama Peserta</td>
              <td>:</td>
              <td colspan="2">{{ sep.FS_NM_PASIEN }}</td>
            </tr>
            <tr>
              <td width="170">Tgl. Lahir</td>
              <td>:</td>
              <td colspan="2">
                {{ new Date(sep.FD_TGL_LAHIR) | dateFormat("DD MMM YYYY") }}
              </td>
            </tr>
            <tr>
              <td width="170">No. Telpon</td>
              <td>:</td>
              <td colspan="2">{{ sep.FS_NO_TELP }}</td>
            </tr>
            <tr>
              <td width="170">Sub/Spesialis</td>
              <td>:</td>
              <td colspan="2">{{ sep.FS_NM_LAYANAN }}</td>
            </tr>
            <tr>
              <td width="170">Faskes Perujuk</td>
              <td>:</td>
              <td colspan="2">
                {{ sep.FS_KD_PPK_ASAL }} - {{ sep.FS_NM_PPK }}
              </td>
            </tr>
            <tr>
              <td width="170">Diagnosa Awal</td>
              <td>:</td>
              <td colspan="2">{{ sep.FS_KD_ICD }} - {{ sep.fs_nm_icd }}</td>
            </tr>
            <tr>
              <td width="170">Catatan</td>
              <td>:</td>
              <td colspan="2">{{ sep.FS_CATATAN }}</td>
            </tr>
          </table>
        </div>
        <div class="col-4">
          <table width="100%">
            <tr>
              <td width="120">PRB</td>
              <td>:</td>
              <td>
                <strong>{{ sep.FS_PROLANIS_PRB }}</strong>
              </td>
            </tr>
            <tr>
              <td width="120">Jenis Peserta</td>
              <td>:</td>
              <td>{{ sep.FS_JNS_PESERTA }}</td>
            </tr>
            <tr>
              <td width="120">COB</td>
              <td>:</td>
              <td>
                <span v-if="sep.COB == 1"> YA</span>
              </td>
            </tr>
            <tr>
              <td width="120">Jenis Rawat</td>
              <td>:</td>
              <td>
                <div v-if="sep.FN_JNS_LAYANAN == 2">R. Jalan</div>
                <div v-else>R. Inap</div>
              </td>
            </tr>
            <tr>
              <td width="120">Kelas Rawat</td>
              <td>:</td>
              <td>
                <span v-if="sep.FN_JNS_LAYANAN !== 2">
                  {{ sep.FS_KD_KELAS_RAWAT }}</span
                >
              </td>
            </tr>
            <tr>
              <td width="120">Penjamin</td>
              <td>:</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <table>
        <tr>
          <td></td>
          <td>Pasien / Keluarga Pasien</td>
        </tr>
        <tr>
          <td width="720" rowspan="2" style="vertical-align: top">
            <i style="font-size: 11px">
              *Saya Menyetujui BPJS Kesehatan menggunakan informasi Medis Pasien
              jika diperlukan.<br />
              **SEP bukan sebagai bukti penjaminan peserta<br />
              Cetakan ke 1 -
            </i>
          </td>
          <td><br /></td>
        </tr>
        <tr>
          <td style="padding: 0">
            <center>
              <img
                :src="'data:image/png;base64,' + sep.image_ttd"
                width="90px"
                style=""
              />
            </center>
            <br />
            ............................
          </td>
        </tr>
        <tr>
          <td>
            <strong>NO. REG : {{ sep.FS_KD_REG }}</strong>
          </td>
          <td>
            <strong>NO. RM : {{ sep.FS_MR }}</strong>
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <strong>NO. RUJUKAN : {{ sep.FS_NO_RUJUKAN }}</strong>
          </td>
        </tr>
      </table>
      <v-divider></v-divider>
      <table
        width="1000"
        id="resume"
        style="border-collapse: collapse; font-size: 20px"
        align="left"
        justify="start"
      >
        <thead>
          <tr>
            <td style="border: 1px solid black" align="center">RESUME</td>
            <td style="border: 1px solid black; height:20px" align="center">RESEP</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table>
                <tr>
                  <td width="170">Tgl. Rujukan</td>
                  <td>:</td>
                  <td>{{ sep.FD_TGL_RUJUKAN }}</td>
                </tr>
                <tr>
                  <td width="170">No. SKDP</td>
                  <td>:</td>
                  <td>{{ sep.FS_NO_SKDP }}</td>
                </tr>
                <tr>
                  <td width="170">Dokter DPJP</td>
                  <td>:</td>
                  <td>{{ sep.FS_NM_DOKTER }}</td>
                </tr>
                <tr>
                  <td width="170">Tanda Tangan DPJP</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Diagnosa</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Tindakan</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">ICD 9</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <th colspan="3" align="left">RUJUKAN INTERNAL</th>
                </tr>
                <tr>
                  <td width="170">Dokter</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Tanda Tangan DPJP</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Dokter DPJP</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Diagnosa</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Tindakan</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">ICD 9</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <th colspan="3" align="left">SURAT KONTROL</th>
                </tr>
                <tr>
                  <td width="170">Selanjutnya Kontrol Ke</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Pada tanggal</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <td width="170">Edukasi / Penkes</td>
                  <td>:</td>
                  <td>...................................</td>
                </tr>
                <tr>
                  <th colspan="3" align="left">KETERANGAN</th>
                </tr>
                <tr>
                  <td width="170">PUTIH</td>
                  <td>:</td>
                  <td>FARMASI</td>
                </tr>
                <tr>
                  <td width="170">MERAH</td>
                  <td>:</td>
                  <td>KLAIM BPJS</td>
                </tr>
                <tr>
                  <td width="170">KUNING</td>
                  <td>:</td>
                  <td>PASIEN</td>
                </tr>
                <tr>
                  <td width="170">HIJAU</td>
                  <td>:</td>
                  <td>REKAM MEDIS</td>
                </tr>
              </table>
            </td>
            <td style="vertical-align: top">
              <table>
                <tr>
                  <td width="100">Alergi</td>
                  <td>:</td>
                  <td colspan="4">......................................</td>
                </tr>
                <tr>
                  <td width="100">Berat Badan</td>
                  <td>:</td>
                  <td width="80">...........</td>
                  <td width="80">Vital Sign</td>
                  <td>:</td>
                  <td>...................</td>
                </tr>
              </table>
              <table
                width="100%"
                style="
                  border: 1px solid black;
                  border-collapse: collapse;
                  font-size: 12px;
                "
              >
                <tr>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Kegiatan
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Terima
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Pengkajian
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Etiket
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Penyiapan
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Koreksi
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Serah & Edukasi
                  </td>
                  <td
                    style="border: 1px solid black"
                    width="12.5"
                    class="kegiatan"
                  >
                    Paraf
                  </td>
                </tr>
                <tr>
                  <td style="border: 1px solid black" class="kegiatan">Jam</td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                </tr>
                <tr>
                  <td style="border: 1px solid black" class="kegiatan">
                    Petugas
                  </td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                  <td style="border: 1px solid black" class="kegiatan"></td>
                </tr>
                <tr></tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
@media print {
  @page {
    size: landscape;
  }
}

#cetaksep {
  font-size: 25px;
  font-family: Arial, sans-serif;
  margin: 20px;
}
.kegiatan {
  border: 1px solid black;
}
</style>
<script>
export default {
  props: {
    visible_sep: false,
    sep: {},
  },
  //   mount() {
  //     this.print;
  //   },
  methods: {
    print() {
      // alert("print");
      // Pass the element id here
      //   this.$emit("cetak", false);
      //   this.$htmlToPaper("cetaksep");
    },
  },
};
</script>

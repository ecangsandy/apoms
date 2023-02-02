<template>
  <div class="keyboardContainer">
    <div class="simple-keyboard-main"></div>
    <div class="numPad">
      <div class="simple-keyboard-numpad"></div>
      <div class="simple-keyboard-numpadEnd"></div>
    </div>
  </div>
</template>
<style>
.v-application .py-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
    background-color: white;
    margin-top: 10%;
}
.theme--light.v-application {
    /* background: #9d2929; */
    color: rgba(0, 0, 0, 0.87);
    background-image: url(https://rsudsoeselo.tegalkab.go.id/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-28-at-12.55.59.jpeg);
}
</style>
<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard-item",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String,
    },
    input: {
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
    keyboardNumPad: null,
    keyboardNumPadEnd: null,
  }),
  mounted() {
    let commonKeyboardOptions = {
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      theme: "simple-keyboard hg-theme-default hg-layout-default",
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
      mergeDisplay: true,
      debug: false,
      display: {
  '{backspace}': 'Hapus',
  '{enter}': 'OK',
}
    };
    this.keyboard = new Keyboard(".simple-keyboard-main", {
      ...commonKeyboardOptions,
      /**
       * Layout by:
       * Sterling Butters (https://github.com/SterlingButters)
       */
      layout: {
        default: [
          "Q W E R T Z U I O P {backspace}",
          "A S D F G H J K L",
          "Z X C V B N M",
          "{enter}",
        ],
      },
    });
    this.keyboardNumPad = new Keyboard(".simple-keyboard-numpad", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{numpad7} {numpad8} {numpad9}",
          "{numpad4} {numpad5} {numpad6}",
          "{numpad1} {numpad2} {numpad3}",
          "{numpad0}",
        ],
      },
    });
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      // console.log(button);
      this.$emit("onKeyPress", button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle,
      });
    },
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    },
  },
};
</script>

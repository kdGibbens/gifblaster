<template>
  <div class="home" @keydown="gifBlast(true)" @keyup="gifBlast(false)" tabindex="0">
    <img alt="Vue logo" :src="setImg()" v-if="showGif">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import store from "../store";
import axios from "axios";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public showGif: boolean = false;
  private beforeMount() {
    store.dispatch("setGif");
  }
  public setImg() {
    return store.state.gifURL;
  }
  private gifBlast(val: boolean) {
    this.showGif = val;
    if (!val) {
      store.dispatch("setGif");
    }
  }
}
</script>
<style lang="scss">
.home {
  position: relative;
}
</style>


<template>
  <div class="home" @keydown="gifBlast(true)" @keyup="gifBlast(false)" tabindex="0">
    <img alt="Gif" :src="setImg()" v-if="showGif">
    <HelloWorld />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import store from "../store";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public showGif: boolean = false;
  private created() {
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


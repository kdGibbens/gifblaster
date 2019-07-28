<template>
  <div class="home" @keydown="gifBlast(true)" @keyup="gifBlast(false)" tabindex="0">
    <img alt="Gif" :src="setImg()" v-if="showGif" />
    <h1>Press any key</h1>
    <audio
      src="https://ia800209.us.archive.org/32/items/WagnerTheRideOfTheValkyries/WagnerTheRideOfTheValkyrieswww.keepvid.com.mp3"
    ></audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store";

export default class Home extends Vue {
  public showGif: boolean = false;
  public audio: any = document.querySelector("audio");
  public home: any = document.querySelector("home");
  public created() {
    store.dispatch("setGif");
  }
  public mounted() {
    this.home.focus();
    this.audio = document.querySelector("audio");
    this.audio.play();
  }
  public setImg() {
    return store.state.gifURL;
  }
  public gifBlast(val: boolean) {
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


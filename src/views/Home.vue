<template>
  <div class="home" @keydown="gifBlast(true)" @keyup="gifBlast(false)" tabindex="0" ref="home">
    <img alt="Gif" :src="setImg()" v-if="showGif" />
    <h1>Press any key</h1>
    <audio
      src="https://ia800209.us.archive.org/32/items/WagnerTheRideOfTheValkyries/WagnerTheRideOfTheValkyrieswww.keepvid.com.mp3"
      ref="wagner"
    ></audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store";
@Component
export default class Home extends Vue {
  public showGif: boolean = false;
  public audio: any = null;
  public home: any = null;

  public created() {
    store.dispatch("setGif");
  }
  public mounted() {
    this.focusDiv();
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
  public playWagner() {
    this.audio = this.$refs.wagner;
    this.audio.play();
  }
  public focusDiv() {
    this.home = this.$refs.home;
    this.home.focus();
    this.playWagner();
  }
}
</script>
<style lang="scss">
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>


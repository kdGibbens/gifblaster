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
    this.audio.addEventListener("ended", () => {
      this.audio.currentTime = 0;
      this.audio.play();
    });
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
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    126deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(129, 129, 223, 1) 50%,
    rgba(0, 161, 255, 1) 100%
  );
}
.home img {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.home h1 {
  position: absolute;
  z-index: 100;
  width: 100%;
  color: #ffffff;
}
</style>


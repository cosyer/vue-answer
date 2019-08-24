<template>
  <div class="index-page">
    <router-link
      :to="{path: '/question'}"
      tag="button"
      class="begin-btn"
    >{{$t("m.start")}}</router-link>
    <button
      class="begin-btn"
      @click="changeLangEvent"
    >{{$t("m.switch")}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "zh-CN"
    };
  },
  methods: {
    changeLangEvent() {
      if (this.lang === "zh-CN") {
        this.lang = "en-US";
        this.$i18n.locale = this.lang; //关键语句
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang; //关键语句
      }
    }
  }
};
</script>
<style>
.index-page {
  padding: 50px 0;
  text-align: center;
}
.begin-btn {
  width: 3.8rem;
  height: 1rem;
  background: #e14f4f;
  color: #fff;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
}
</style>

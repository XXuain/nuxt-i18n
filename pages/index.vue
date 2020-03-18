<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        text_nuxt
      </h1>
      <h2 class="subtitle">
        {{ $t("webTitle") }}
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link class="button--green" :to="localePath('/home')"
          >HOME PAGE</nuxt-link
        >
      </div>
      <nuxt-link
        v-for="(locale, i) in showLocales"
        :key="i"
        :to="switchLocalePath(locale.code)"
      >
        <span @click="handleChangeLang(locale.code)"
          >点击切换{{ locale.name }}</span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "Home",
  components: {
    Logo
  },
  computed: {
    showLocales() {
      // console.log("showLocales: ", this.$i18n.locales);
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    }
  },
  mounted() {
    console.log("locale: ", this.$i18n.locale);
    console.log("locales: ", this.$i18n.locales);
  },
  methods: {
    handleChangeLang(lang) {
      this.$store.commit("setLang", lang);
      Cookie.set("lang", lang);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

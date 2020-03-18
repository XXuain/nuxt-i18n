export const state = () => ({
  lang: "zh"
});

export const mutations = {
  setLang(state, lang) {
    state.lang = lang;
  }
};

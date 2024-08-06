<template>
  <div id="app">
    <component :is="headerComponent"></component>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useMemberStore } from './stores/useMemberStore';
import HeaderComponent from './components/common/HeaderComponent.vue';
import LoggedInHeaderComponent from './components/login/LoggedInHeaderComponent.vue';
import FooterComponent from './components/common/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LoggedInHeaderComponent,
    FooterComponent,
  },
  setup() {
    const memberStore = useMemberStore();
    const headerComponent = computed(() =>
      memberStore.isLoggedIn ? 'LoggedInHeaderComponent' : 'HeaderComponent'
    );

    return {
      headerComponent,
    };
  },
};
</script>

<style>
* {
  word-break: break-word;
}

*,
:after,
:before {
  box-sizing: border-box;
}

div {
  display: block;
  unicode-bidi: isolate;
}

input {
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: field;
  margin: 0em;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  padding-block: 1px;
  padding-inline: 2px;
}
</style>

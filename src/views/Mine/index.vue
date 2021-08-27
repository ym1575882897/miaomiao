<template>
  <div id="main">
    <Header title="我的喵喵" />
    <div id="contenet">
      <Login />
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Login from "@/components/Login";
export default {
  name: "Mine",
  components: {
    Header,
    TabBar,
    Login,
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
</style>
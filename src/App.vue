<template>
  <!-- <Counter :start="101"/> -->
  <!-- <Counter /> -->
  <!-- <Counter :title="counter2"/>
  <Counter /> -->
  <Indesicion />
</template>

<script>
// import Counter from "@/components/Counter.vue";
import Indesicion from "@/components/Indesicion.vue";
export default {
  name: "App",
  components: {
    // Counter,
    Indesicion,
  },
  data() {
    return {
      counter1: "Entraron2",
      counter2: "Salieron2",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

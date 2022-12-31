import props from '../../../../vuex/vuex/src/components/BotonAccion.vue';
<template>
  <h2>{{customTitle}} {{start}}</h2>
  <!-- <h2>{{title || 'Titulo por default'}} </h2> -->
  <p>{{ counter }} <sup>2</sup> = {{getSquaredValueComputed}}</p>
  
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>  
    </div>

</template>

<script>
export default {
  name: "Counter",
  props: {
    title: {
      type: String,
      // default: "Counter",
    },
    start: {
      type: Number,
      // required: true,
      default: 100,
      validator(value) {
        return value > 100;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquaredValueMethod() {
      console.log("method propiety");
      return this.counter * this.counter;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  // Propiedades computadas se guardan en memoria y se ejecutan solo cuando cambia el valor de la propiedad
  computed: {
    getSquaredValueComputed() {
      // console.log("computed propiety");
      return this.counter * this.counter;
    },
    incrementComputed() {
      return this.counter++;
    },
    decrementComputed() {
      return this.counter--;
    },
    customTitle() {
      return this.title || "Title from computed propiertie";
    },
  },
};
</script>

<style>
button {
  margin: 10px;
  background-color: #4caf50;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #3e8e41;
  transition: 0.3s ease-in-out;
}
</style>
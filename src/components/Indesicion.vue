<template>
    <img v-if="img" :src="img" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input type="text" placeholder="Ask me a question" v-model="question">
        <p>Remember to finish your question with a cuote mark (?)</p>

        <!-- <div v-if="isValidQuestion"> -->
        <div v-if="isValidQuestion">
            <h2> {{question}}</h2>
            <h1>{{answer}}</h1>
            <!-- <h1>{{answer === 'yes' ? "Si" : "No"}}</h1> -->
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      img: null, //this.image,
      isValidQuestion: false,
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      //   console.log("newQuestion", newQuestion);
      //   this.question = newQuestion;
      this.isValidQuestion = false;
      if (!newQuestion.includes("?")) return;

      //   realizar peticion http
      this.isValidQuestion = true;
      return this.getAnswer();
    },
  },
  methods: {
    async getAnswer() {
      // realizar peticion http
      try {
        this.answer = "Thinking...";
        const peticion = await fetch("https://yesno.wtf/api");
        const { answer, image } = await peticion.json();
        this.img = image;
        this.answer = answer;
        // this.question = "";
        // this.answer = answer === "yes" ? "Si" : "No";
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}
.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}
.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}
h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
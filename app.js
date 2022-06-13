var app = new Vue({
  el: '#app',
  data: {
    prompt: 'Ask a Question',
    message: '',
    mesageBank: [
      'Yes',
      'No',
      'Maybe',
      'Ask again tomorrow',
      'Probably',
      'Probably Not',
    ],
    question: '',
  },
  methods: {
    askQuestion: function () {
      if (!this.isValidQuestion) {
        return;
      }
      let nextIndex = Math.floor(Math.random() * this.messageBank.length);
      let nextResponse = this.messageBank[nextIndex];
      this.message = nextResponse;
      this.prompt = 'Ask another question';
      this.question = '';
    },
    isValidQuestion: function () {
      return this.question[this.question.length - 1] == '?';
    },
  },
});

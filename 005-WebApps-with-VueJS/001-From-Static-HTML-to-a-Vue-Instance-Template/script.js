Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      currentTime: new Date().toLocaleString("en-us"),
    };
  },
}).mount("#mainContainder");

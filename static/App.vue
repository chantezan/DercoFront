<template>
  <div id="app">
    <span>holaaa233333333 develop</span>
    <span>{{info}}</span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Base",
  data() {
    return {
      info: []
    }
  },
  mounted () {
  console.log("url lamndaaaa",process.env.url_lamda)
    axios
      .get('https://bs8e9e1s09.execute-api.us-east-1.amazonaws.com/pruebaDerco6')
      .then(response => (this.info = response.data))
  }
};
</script>


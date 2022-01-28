<template>
  <div id="app">
    <span>holaaa233333333 produccion</span>
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
    axios
      .get('https://bs8e9e1s09.execute-api.us-east-1.amazonaws.com/pruebaDerco5')
      .then(response => (this.info = response))
  }
};
</script>


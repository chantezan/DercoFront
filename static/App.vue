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
    axios
      .get(process.env.url_lamda)
      .then(response => (this.info = response))
  }
};
</script>


<template>
  <div>
    <span>d memeeeeeeeeeeeee</span>
    <span>{{info}}</span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BaseCripto",
  data() {
    return {
      info: []
    }
  },
  mounted () {
    axios
      .get('https://bs8e9e1s09.execute-api.us-east-1.amazonaws.com/pruebaDerco5')
      .then(response => (this.info = response.data))
  }
};
</script>


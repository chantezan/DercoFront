import { createApp } from 'vue'
import BaseCripto from './BaseCripto'
// Creamos una instancia de la aplicación Vue
const app = createApp({
  // Elemento html donde se va ha renderizar el contenido
  el: '#app',
  // Activamos el componente dentro de la app
  components : {
    BaseCripto,
  },
})
// Montamos la app en el div #app de nuestra plantilla index.html.
app.mount('#app')

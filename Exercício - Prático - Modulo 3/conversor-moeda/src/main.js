import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue);
app.component('InputNumber', InputNumber);
app.component('ButtonPrime', Button);


app.mount('#app');

import { createApp } from 'vue'

import App from './App.vue';
import DirectusService from './services/directus.service';
import PrimeVue from 'primevue/config';

import * as PrimeVueComponents from 'primevue';
// import InputText from 'primevue/inputtext';
// import InputNumber from 'primevue/inputnumber';
// import Select from 'primevue/select';
// import TextArea from 'primevue/textarea';
// import Button from 'primevue/button';
// import DatePicker from 'primevue/datepicker';
// import Divider  from 'primevue/divider';
import Lara from '@primeuix/themes/lara';

import ToastService from 'primevue/toastservice';

import 'primeicons/primeicons.css'
import './style.scss'
import './styles/dymik.scss';

import DymikForm from '@dymik-form/dymik-vue';
import '@dymik-form/dymik-vue/dist/dymik-vue.css';

import router from './router';
import { isVueComponent } from './utils/isVueComponent';

DirectusService.init(import.meta.env.VITE_DIRECTUS_URL, import.meta.env.VITE_DIRECTUS_STATIC_TOKEN);

const app = createApp(App);

app.use(DymikForm);

app.use(PrimeVue, {
    theme: {
        preset: Lara 
    }
});

app.use(ToastService);

app.use(router);

// // Register PrimeVue components globally
// app.component('InputText', InputText);
// app.component('InputNumber', InputNumber);
// app.component('Select', Select);
// app.component('TextArea', TextArea);
// app.component('Button', Button);
// app.component('DatePicker', DatePicker);
// app.component('Divider', Divider);

for (const key of Object.keys(PrimeVueComponents) as Array<keyof typeof PrimeVueComponents>) {
    if (isVueComponent(PrimeVueComponents[key])) {
        app.component(key, PrimeVueComponents[key]);
    }
}


app.mount('#app')


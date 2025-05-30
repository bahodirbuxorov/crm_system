
import VueCal from 'vue-cal';

import 'vue-cal/dist/vuecal.css';

import 'vue-cal/dist/i18n/ar.es.js';
import 'vue-cal/dist/i18n/en.es.js';
import 'vue-cal/dist/i18n/es.es.js';
import 'vue-cal/dist/i18n/fa.es.js';
import 'vue-cal/dist/i18n/tr.es.js';
import 'vue-cal/dist/i18n/pt-br.es.js';
import 'vue-cal/dist/i18n/vi.es.js';

export default {
    install: (app, options) => app.component('v-vue-cal', VueCal),
};

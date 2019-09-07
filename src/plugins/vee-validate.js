import Vue from "vue";
import * as VeeValidate from 'vee-validate';

import validationRu from "../../node_modules/vee-validate/dist/locale/ru";

Vue.use(VeeValidate, {
  dictionary: {
    en: validationRu,
  },
});


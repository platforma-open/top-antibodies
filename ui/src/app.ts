import { model } from '@platforma-open/milaboratories.top-antibodies.model';
import { defineApp } from '@platforma-sdk/ui-vue';
import MainPage from './pages/MainPage.vue';

export const sdkPlugin = defineApp(model, () => {
  return {
    routes: {
      '/': () => MainPage,
    },
  };
});

export const useApp = sdkPlugin.useApp;

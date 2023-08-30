// import { ref, onMounted } from '@nuxtjs/composition-api';
import * as VueYandexMaps from 'vue-yandex-maps';

export default function useYandexMaps(apiKey) {
  const mapRef = ref(null);

  onMounted(() => {
    const settings = {
      apiKey,
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1'
    };

    VueYandexMaps.default(mapRef, settings);
  });

  return { mapRef };
}

import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

const isRtl = true;

const cacheRtl = createCache({
  key: isRtl ? 'muirtl' : 'mui',
  stylisPlugins: isRtl ? [rtlPlugin] : [],
});

export default cacheRtl;

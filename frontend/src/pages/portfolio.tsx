import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { PortfolioView } from 'src/sections/portfolio/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`نمونه کارها - ${CONFIG.appName}`}</title>

      <PortfolioView posts={_posts} />
    </>
  );
}

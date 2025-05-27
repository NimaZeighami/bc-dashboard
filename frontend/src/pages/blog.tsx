import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`نمونه کارها - ${CONFIG.appName}`}</title>

      <BlogView posts={_posts} />
    </>
  );
}

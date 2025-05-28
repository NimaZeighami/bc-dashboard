import { CONFIG } from 'src/config-global';

import { ClientProjectsView } from 'src/sections/client-projects/view';


export default function Page() {
  return (
    <>
      <title>{`پروژه ها  - ${CONFIG.appName}`}</title>

      <ClientProjectsView />
    </>
  );
}

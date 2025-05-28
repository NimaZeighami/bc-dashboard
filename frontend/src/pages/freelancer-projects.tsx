import { CONFIG } from 'src/config-global';

import { FreeLancerProjectsView } from 'src/sections/project-freelancer/project-freelancer-view';


export default function Page() {
  return (
    <>
      <title>{`درخواست ها  - ${CONFIG.appName}`}</title>

          <FreeLancerProjectsView />
    </>
  );
}

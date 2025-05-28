import { CONFIG } from 'src/config-global';

import { ExpertsView } from 'src/sections/expert/view';


export default function Page() {
  return (
    <>
      <title>{`متخصصین - ${CONFIG.appName}`}</title>

      <ExpertsView />
    </>
  );
}

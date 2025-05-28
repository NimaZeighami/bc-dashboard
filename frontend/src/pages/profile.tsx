import { CONFIG } from 'src/config-global';

import { ProfileView } from 'src/sections/profile/view/profile-view';


export default function Page() {
  return (
    <>
      <title>{` پروفایل - ${CONFIG.appName}`}</title>

          <ProfileView />
    </>
  );
}
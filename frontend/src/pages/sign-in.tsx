import { CONFIG } from 'src/config-global';

import { SignInView } from 'src/sections/auth';

export default function Page() {
  return (
    <>
      <title>{`ورود | ثبت نام - ${CONFIG.appName}`}</title>

      <SignInView />
    </>
  );
}

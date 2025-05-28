import { CONFIG } from 'src/config-global';

import { ProfileManagementView} from 'src/sections/profile-management/profile-management-view';


export default function Page() {
    return (
        <>
            <title>{`مدیریت پروفایل - ${CONFIG.appName}`}</title>

            <ProfileManagementView/>
        </>
    );
}
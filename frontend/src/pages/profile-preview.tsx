import { CONFIG } from 'src/config-global';

import { ProfilePreviewView} from 'src/sections/profile-preview/profile-preview-view';


export default function Page() {
    return (
        <>
            <title>{`مدیریت پروفایل - ${CONFIG.appName}`}</title>

            <ProfilePreviewView/>
        </>
    );
}
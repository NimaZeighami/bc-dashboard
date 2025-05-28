import { RoleEnum } from 'src/context/AuthContext'

import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
  role?: RoleEnum;
};

export const navData = [
  {
    title: 'داشبورد مدیریت',
    path: '/',
    icon: icon('ic-analytics'),
    role: RoleEnum.Client,
  },
  {
    title: 'مدیریت پروژه ها   ----  ( کارفرما )',
    path: '/project-management-client',
    // project-management-user
    icon: icon('ic-cart'),
    role: RoleEnum.Client,
  },
  {
    title: 'انتخاب متخصص',
    path: '/select-freelancer',
    icon: icon('ic-user'),
    info: (
      <Label color="error" variant="inverted">
        حرفه ای
      </Label>
    ),
    role: RoleEnum.Client,
  },
  {
    title: 'نمونه کارها',
    path: '/portfolio',
    icon: icon('ic-blog'),
    role: RoleEnum.Client,
  },
  {
    title: 'مدیریت پروفایل',
    path: '/profile-management',
    icon: icon('ic-analytics'),
    role: RoleEnum.Freelancer,
  },
  {
    title: 'پیش نمایش پروفایل',
    path: '/profile-management',
    icon: icon('ic-blog'),
    role: RoleEnum.Freelancer,
  },
  {
    title: 'مدیریت پروژه های درخواستی',
    path: '/project-management-freelancer',
    icon: icon('ic-cart'),
    role: RoleEnum.Freelancer,
  },
];

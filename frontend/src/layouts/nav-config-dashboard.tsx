import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: 'داشبورد',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'مدیریت پروژه ها   ----  ( کارفرما )',
    path: '/project-management-client',
    // project-management-user
    icon: icon('ic-cart'),
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
  },
  {
    title: 'نمونه کارها',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];

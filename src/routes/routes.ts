import Home from 'components/Home/Home';
import Profile from 'components/Profile/Profile';
import Settings from 'components/Settings/Settings';
import Follows from "components/MyFollows/Follows";

export enum RouteNames {
  DIALOGS = '/dialogs/',
  HOME = '/home/',
  HOME1 = '/home/',
  USERS = '/users/',
  LOGIN = '/login/',
  SETTINGS = '/settings/',
  PROFILE = 'profile',
  MY_FOLLOWS = 'follows',
}

export const routes = [
  {
    path: RouteNames.HOME,
    Component: Home,
  },
  {
    path: RouteNames.PROFILE,
    Component: Profile,
  },
  {
    path: RouteNames.SETTINGS,
    Component: Settings,
  },
  {
    path: RouteNames.MY_FOLLOWS,
    Component: Follows,
  },
];

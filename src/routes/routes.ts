import Home from 'pages/Home/Home';
import Follows from 'components/MyFollows/Follows';
import Profile from 'components/Profile/Profile';
import Settings from 'components/Settings/Settings';
import {
  HOME_ROUTE,
  MY_FOLLOWS_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
} from 'constants/base';

export const routes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: `${PROFILE_ROUTE}/:id`,
    Component: Profile,
  },
  {
    path: SETTINGS_ROUTE,
    Component: Settings,
  },
  {
    path: MY_FOLLOWS_ROUTE,
    Component: Follows,
  },
];

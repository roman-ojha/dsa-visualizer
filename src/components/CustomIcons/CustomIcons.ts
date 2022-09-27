import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './customIcons.json';
const CustomIcons = createIconSetFromIcoMoon(
  icoMoonConfig,
  'MainIcons',
  'app-icons.ttf',
);

export type CustomIconsType =
  | 'arrow-circle'
  | 'chart-graph'
  | 'graph'
  | 'great-wall'
  | 'people-queue'
  | 'point'
  | 'stack-pop'
  | 'stack-push'
  | 'stack'
  | 'walk'
  | 'wave';

export default CustomIcons;

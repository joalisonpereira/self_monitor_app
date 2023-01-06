declare module 'react-native-pixel-perfect' {
  type Dimensions = {width: number; height: number};

  type PerfectSizeFn = (n: number) => number;

  export const create: (d: Dimensions) => PerfectSizeFn;
}

import chrome from 'chroma-js';

// xl?: number; // > 1200px dan katta
// lg?: number; // > 992px && < 1200px
// md?: number; // > 768px && < 992px
// sm?: number; // > 576px && < 768px
// xs?: number; // < 576px dan kichik

export const theme = {
  primary_color: '#264796',
  blue: '#0091FF',
  red: '#FF4242',
  green: '#22B573',
  light_grey: '#EAEDF5',
  grey1: '#797979',
  grey2: '#BDBDBD',
  grey3: '#D1D1D1',
  grey4: '#F2F2F2',
  primary_color_shade: chrome('#318CE7').darken(0.7),
  insignificant: '#F8F8F8',
  secondary_color: '#CDCDCD',
  third_color: '#CC0000',
  grey: '#C4C4C4',
  shadow: '0px 10px 30px rgba(0, 0, 0, 0.07);',
  shadow1: '0px 0px 3px 2px rgba(0,0,0,0.63)',
  breakpoints: {
    xs: 'only screen and (max-width: 575px)',
    sm: 'only screen and (min-width: 576px)',
    md: 'only screen and (min-width: 768px)',
    lg: 'only screen and (min-width: 992px)',
    xl: 'only screen and (min-width: 1280px)',
  },
};

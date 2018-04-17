import { injectGlobal } from 'styled-components';
import myfont1 from '../fonts/NeoSansPro-Bold.otf';
import myfont2 from '../fonts/Calibri.ttf'

injectGlobal`
  @font-face {
    font-family: 'Neo Sans Pro';
    src: url(${myfont1}) format('opentype');
    font-weight: bold;
    font-style: bold;
  }
  @font-face {
    font-family: 'Calibri';
    src: url(${myfont2}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
import { createGlobalStyle } from "styled-components";

import SegoeUi from "./SegoeUi.ttf";
import DINCondensedBlack from "./DINProCondensedBlack.ttf";
import DINCondensedBold from "./DINProCondensedBold.ttf";
import DINCondensedMedium from "./DINProCondensedMedium.ttf";
import DINCondensedRegular from "./DINProCondensedRegular.ttf";
import BebasNeueBold from "./BebasNeueBold.otf";
import BebasNeueLight from "./BebasNeueLight.otf";
import BebasNeueRegular from "./BebasNeueRegular.otf";
import OpenSansBold from "./OpenSansBold.ttf";
import Opensans from "./Opensans.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Segoe Ui";
    src: url(${SegoeUi}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "DIN CondensedBlack";
    src: url(${DINCondensedBlack}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "DIN CondensedBold";
    src: url(${DINCondensedBold}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "DIN CondensedMedium";
    src: url(${DINCondensedMedium}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "DIN CondensedRegular";
    src: url(${DINCondensedRegular}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "BebasNeue Bold";
    src: url(${BebasNeueBold}) format('opentype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "BebasNeue Light";
    src: url(${BebasNeueLight}) format('opentype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "BebasNeue Regular";
    src: url(${BebasNeueRegular}) format('opentype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: 'OpenSans Bold';
    src: url(${OpenSansBold}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: 'OpenSans';
    src: url(${Opensans}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
`;

export default FontStyles;

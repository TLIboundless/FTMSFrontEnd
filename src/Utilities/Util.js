import { isMobileOnly } from 'react-device-detect';

const desktopStyle = {
  textAlign: 'center',
  width: '50%',
  marginLeft: '25%',
  marginRight: '25%'
}

const mobileStyle = {
  textAlign: 'center',
  width: '70%'
}

const styleToImport = isMobileOnly ? mobileStyle : desktopStyle;

export default {styleToImport}
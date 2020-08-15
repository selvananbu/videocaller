import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';


const LoginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:appTheme().darkerBackgroundColor,
      alignItems:"center",
      justifyContent:"center",
      height:height(81.5)
    }
  })

  export default LoginStyles;
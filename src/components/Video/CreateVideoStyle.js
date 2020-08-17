import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import CreateVideo from './CreateVideo';


const CreateVideoStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:appTheme().darkerBackgroundColor,
      alignItems:"center",
      justifyContent:"center"
    }
  })

  export default CreateVideoStyle;
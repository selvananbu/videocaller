import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import { mainFont } from '../../assets/fonts/index';
import { colors } from 'react-native-elements';


const friendStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:appTheme().darkerBackgroundColor,
        alignItems:"center",
        justifyContent:"center",
        height:height(81.5)
      },
      friendContainer:{
        height:height(5),
        width:width(95),
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row"
    },
    friendtext:{
        fontSize:22,
        fontFamily:mainFont.medium,
        color:appTheme().textColor
    },
    friendcontainer:{
        height:height(80),
        width:width(95),
        alignItems:"center",
        justifyContent:"flex-start"
    },
    
    bottomcontainer:{
        height:height(80),
        width:width(95),
        alignItems:"center",
        justifyContent:"flex-start"
    },
    friendContainer:{
        height:height(12),
        width:width(95),
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    friendImageContainer:{
        width:width(25),
        height:height(12),
        alignItems:"center",
        justifyContent:"center"
    },
    friendImage:{
        width:width(10),
        height:width(10),
        borderRadius:width(10)/2
    },
    friendLabelContainer:{
        width:width(55),
        height:height(12),
        alignItems:"flex-start",
        justifyContent:"center"
    },
    friendTimeContainer:{
        width:width(20),
        height:height(12),
        alignItems:"center",
        justifyContent:"center"
    },
    friendText:{
        color:colors.textColor,
        fontSize:16,
        fontFamily:mainFont.medium
    }
  })

  export default friendStyle;
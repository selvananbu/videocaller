import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';


const SignUpStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:appTheme().darkerBackgroundColor,
      alignItems:"center",
      justifyContent:"center",
      height:height(81.5)
    },
    headerView: {
        alignSelf: 'center',
        marginBottom: 35,
    },
    title:{
        fontSize: 30
    },
    nextBotton:{
        position: 'absolute',
        bottom:10,
        right:10,
        borderWidth:1,
        width:width(25),
        borderRadius:12,
        borderColor:"#227fdc"
    },
    headerContainer:{
        width:responsiveWidth(375),
        height:responsiveHeight(80),
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
     color:appTheme().textColor,
     fontSize:36,
     fontWeight:"bold",
     fontFamily:"Rubik-Bold"
     
    },
    
    nameContainer:{
        width:width(85),
        height:height(8),
        marginBottom:5,
        alignItems:"center",
        justifyContent:"center"
      },
      textInputContainer:{
        width:width(85),
        height:height(8),
        alignItems:"center",
        justifyContent:"center"
      },
  })

  export default SignUpStyles;
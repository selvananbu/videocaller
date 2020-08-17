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
    groupAvatarContainer:{
        width:width(30),
        height:height(15),
        alignItems:"center",
        justifyContent:"center"
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
      imageContainer:{
        width:width(85),
        height:height(15),
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
      },
      uploadImageContainer:{
        width:width(37),
        height:width(14),
        alignItems:"center",
        justifyContent:"center"
      },
      avatarIconStyle:{
        width:width(18),
        height:height(12)
      },
      iconStyle:{
        width:width(10),
        height:height(10)
      },
      interestStyle:{
        color:appTheme().textColor,
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"Rubik-Bold"

      },
      plusIconStyle:{
        backgroundColor:"#cccccc",
        borderRadius:width(14)/2,
        height:width(14),
        width:width(14),
        alignItems:"center",
        justifyContent:"center"
      },
  })

  export default SignUpStyles;
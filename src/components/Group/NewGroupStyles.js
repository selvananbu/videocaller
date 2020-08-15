import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';


const NewGroupStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:appTheme().darkerBackgroundColor,
      alignItems:"center",
      justifyContent:"center",
      height:height(81.5)
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
    descriptionContainer:{
      width:width(85),
      height:height(20),
      alignItems:"center",
      justifyContent:"center"
    },
    plusIconStyle:{
      backgroundColor:"#cccccc",
      borderRadius:width(14)/2,
      height:width(14),
      width:width(14),
      alignItems:"center",
      justifyContent:"center"
    },
    groupAvatarContainer:{
      width:width(30),
      height:height(15),
      alignItems:"center",
      justifyContent:"center"
    },
    descriptionTextInputStyle:{
      borderWidth:1,
      height:height(18),
      alignItems:"flex-start",
      justifyContent:"flex-start"
    }
  })

  export default NewGroupStyles;
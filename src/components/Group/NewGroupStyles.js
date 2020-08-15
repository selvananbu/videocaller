import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'


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
    headerEditContainer:{
      width:responsiveWidth(360),
      height:responsiveHeight(80),
      alignItems:"flex-start",
      justifyContent:"center"
  },
    headerText:{
     color:appTheme().textColor,
     fontSize:36,
     fontFamily: mainFont.bold
     
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
    },
    approvalContainer:{
      width:width(85),
      height:height(10),
      alignItems:"flex-end",
      justifyContent:"flex-end",
      flexDirection:"row"
    },
    approvalTextContainer:{
      width:width(30),
      height:height(10),
      alignItems:"center",
      justifyContent:"center"
    },
    approvalSwitchContainer:{
      width:width(15),
      height:height(10),
      alignItems:"center",
      justifyContent:"center"
    },
    createButtonContainer:{
      width:width(85),
      height:height(15),
      alignItems:"center",
      justifyContent:"center"
    },
    createButton:{
      borderWidth:1,
      width:width(25),
      borderRadius:12,
      backgroundColor:appTheme().darkerBackgroundColor,
      borderColor: appTheme().borderColor
    },
    createButtonText:{
      color:appTheme().textColor,
      fontFamily: mainFont.bold
    },
    avatarIconStyle:{
      width:width(18),
      height:height(12)
    }
  })

  export default NewGroupStyles;
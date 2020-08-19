import {StyleSheet} from 'react-native';
import { responsiveWidth, responsiveHeight } from  '../../utils/Themes/metrics';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';


const SettingsStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:appTheme().darkerBackgroundColor,
      alignItems:"center",
      justifyContent:"center",
      height:height(81.5)
    },
    settingsList:{ width: width(100), flexDirection: 'column', marginTop: height(1), height: height(15), backgroundColor: "#EDEDED" },
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
      iconStyle:{
        width:width(7),
        height:height(4),
        paddingRight: width(10),
        justifyContent: "center"
      },
      interestStyle:{
        color:appTheme().textColor,
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"Rubik-Bold",
        paddingLeft: width(5)
      },
      interestStyleSettings:{
        color:appTheme().textColor,
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"Rubik-Bold",
        justifyContent: "center",
        alignItems: "flex-start"
      },
      settingsList:{
        width: width(100), height: height(10), flexDirection: "row", justifyContent: 'space-between', alignItems: "center",  borderWidth: 1
      }
  })

  export default SettingsStyle;
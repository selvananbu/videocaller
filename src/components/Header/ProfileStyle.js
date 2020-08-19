import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'

const ProfileStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:appTheme().darkerBackgroundColor
    },
    topContainer:{
        height:height(8),
        alignItems:"center",
        justifyContent:"center",
        width:width(99),
        flexDirection:"row"
    },
    friendButton:{
        borderWidth:1,
        height:height(4),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:appTheme().darkerBackgroundColor,
        borderColor: appTheme().borderColor
      },
      friendButtonText:{
        color:appTheme().textColor,
        fontFamily: mainFont.bold
      },
      heartContainer:{
          width:width(20),
          alignItems:"center",
          justifyContent:"center",
          height:height(8)
      },
      heartImage:{
          width:width(10),
          height:height(4)
      },
      giftContainer:{
          width:width(20),
          alignItems:"center",
          justifyContent:"center"
      },
      avatarContainer:{
          width:width(99),
          height:height(30),
          alignItems:"center",
          justifyContent:"center"
      },
      image:{
          width:width(95),
          height:height(30)
      },
      bottomContainer:{
          width:width(99),
          height:height(40)
      },
      interestStyle:{
        color:appTheme().textColor,
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"Rubik-Bold",
        paddingLeft: width(5)
      },
      settingsList:{
        width: width(100), height: height(10), flexDirection: "row", justifyContent: 'space-between', alignItems: "center",  borderWidth: 1
      },
      iconStyle:{
        width:width(7),
        height:height(4),
        paddingRight: width(10),
        justifyContent: "center"
      },
    
    
})

export default ProfileStyle;
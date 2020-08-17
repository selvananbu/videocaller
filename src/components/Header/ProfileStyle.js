import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'

const ProfileStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
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
          height:height(45),
          alignItems:"center",
          justifyContent:"center"
      },
      image:{
          width:width(95),
          height:height(35)
      },
      bottomContainer:{
          width:width(99),
          height:height(40)
      }
    
    
})

export default ProfileStyle;
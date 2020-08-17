import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'

const VideoListStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:appTheme().darkerBackgroundColor
    },
    statusContainer:{
        width:width(35),
        alignItems:"flex-start",
        justifyContent:"center"
    },
      videoContent:{
        width:width(55),
        alignItems:"flex-start",
        justifyContent:"center"
      },
      
    createButton:{
        borderWidth:1,
        // width:width(25),
        height:height(4),
        alignItems:"center",
        justifyContent:"center",
        // borderRadius:12,
        backgroundColor:appTheme().darkerBackgroundColor,
        borderColor: appTheme().borderColor
      },
      createButtonText:{
        color:appTheme().textColor,
        fontFamily: mainFont.bold
      },
      participantContainer:{
          paddingLeft:width(2)
      },
      videoTextStatus:{
        color:appTheme().textColor,
        fontSize:14
      },
      videoText:{
          color:appTheme().primaryColor,
          fontSize:14,
          textDecorationLine: 'underline',
          
      },
      textRecommended:{
        color:appTheme().dangerColor,
        fontSize:14,
        
    }
    
})

export default VideoListStyle;
import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'

const GroupListAbstractStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:appTheme().darkerBackgroundColor
    },
    
    groupContainer:{
        flexGrow : 1, 
        alignItems:"center",
        justifyContent:"flex-start"
    },
    groupHolder:{
        width:width(95),
        height:height(25),
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    image:{
        width:width(75),
        height:height(15)
    },
    
})

export default GroupListAbstractStyle;
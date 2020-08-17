import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';

import { width, height } from 'react-native-dimension';


const HomeStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:appTheme().darkerBackgroundColor
    },
    tabContainer:{
        width:width(95),
        height:height(5),
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row"
    },
    myGroupContainer:{
        width:width(25),
        height:height(5)
    },
    myGroupText:{
        fontSize:18,
        color:appTheme().textColor
    },
    myRecommendedContainer:{
        
        width:width(35),
        height:height(5)
    },
    hostingContainer:{
        flexDirection:"row",
        borderBottomWidth:1
    },
    rightArrowContainer:{
        width:width(10),
        height:height(18),
        alignItems:"center",
        justifyContent:"center"
    }
    
})

export default HomeStyles;
import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'

const SearchHomeStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:appTheme().darkerBackgroundColor
    },
    searchInputContainer:{
        width:width(85)
    },
    tabContainer:{
        width:width(95),
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    tabHeaderTextContainer:{
        width:width(30),
        alignItems:"center",
        justifyContent:"center"

    },
    tabHeaderText:{
        color:appTheme().primaryColor,
        fontSize:18,
        textDecorationLine:"underline"
    },
    tabContent:{
        width:width(95),
        height:height(70),
        alignItems:"center",
        justifyContent:"center"
    }
})

export default SearchHomeStyle;
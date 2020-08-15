import {StyleSheet} from 'react-native';
import { appTheme } from '../../utils/Themes/appTheme';
import { width, height } from 'react-native-dimension';
import {mainFont} from '../../assets/fonts'

const EditGroupStyles = StyleSheet.create({
    descriptionContainer:{
        height:height(5),
        width:width(95),
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    descriptiontext:{
        fontSize:18,
        fontFamily:mainFont.medium,
        color:appTheme().textColor
    },
    descriptionEditContainer:{
        width:width(70)
    },
    joinbuttonStyle:{
        width:width(20),
        height:height(4),
        backgroundColor:appTheme().darkerBackgroundColor,
        borderWidth:1,
        borderColor:appTheme().borderColor
    },
    jointextstyle:{
        color:appTheme().textColor
    },
    joinButtonContainer:{
         width:width(25),
         alignItems:"center",
         justifyContent:"center"
    },
    hasttagText:{
        fontSize:26,
        fontFamily:mainFont.medium,
        color:appTheme().textColor
    },
    hashtagContainer:{
        height:height(5),
        width:width(93),
        alignItems:"flex-start",
        justifyContent:"center"
    },
    editgroupIconContainer:{
        width:width(95),
        height:height(40),
        alignItems:"center",
        justifyContent:"center"
    },
    editgroupIcon:{
        width:width(90),
        height:height(35)
    },
    editgroupDescriptionContainer:{
        width:width(93),
        height:height(12),
        alignItems:"flex-start",
        justifyContent:"center"
    },
    descriptionTextHeader:{
        fontSize:18,
        fontFamily:mainFont.bold,
        color:appTheme().textColor
    },
    descriptionTextContent:{
        fontSize:16,
        fontFamily:mainFont.medium,
        color:appTheme().textColor
    }
})


export default EditGroupStyles;
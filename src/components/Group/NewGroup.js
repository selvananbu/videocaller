//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,PermissionsAndroid,Switch } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';
import  Icon  from 'react-native-vector-icons/AntDesign';
import  FaceIcon  from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Localized } from '../../utils';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewGroupStyles from './NewGroupStyles';
import LabelTextInput from '../common/LabelTextInput';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

// create a component
class NewGroup extends Component {
    constructor(props){
        super(props)
        this.state={
            avatarSource:require("../../assets/icons/user.png"),
            name:'',
            description:'',
            hashtag:'',
            approvalRequired:true
        }

        this.onUploadImagePressed = this.onUploadImagePressed.bind(this);
        this.onNewGroupAdded = this.onNewGroupAdded.bind(this);
    }

    onNewGroupAdded(){
        var group = {
            name:this.state.name,
            description:this.state.description,
            hashtag:this.state.hashtag,
            avatar:this.state.avatarSource,
            approvalRequired:this.state.approvalRequired
        }

        var groupList = this.props.grouplist.groupList;
        groupList.push(group)

        this.props.setGroupList(groupList);
        this.props.navigation.navigate("New");
    }
    async checkForPermission() {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
            // console.log("njknjknjknkjn");
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                try {
                    // console.log('asdasdasd')
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        this.openImagePicker();
                    } else {
                        Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
                    }
                } catch (err) {
                    console.warn(err);
                }
            } else {
                Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
            }
        } catch (err) {
            console.warn(err);
        }
    }
    openImagePicker(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                avatarSource: source,
                });
  }
});
    }
    onUploadImagePressed(){

        this.checkForPermission();
           
    }
    render() {
        return (
            <KeyboardAwareScrollView>
            <View style={NewGroupStyles.container}>
                <View style={NewGroupStyles.headerContainer}>
                <Text style={NewGroupStyles.headerText}>{Localized.t("newgroup.title")}</Text>
                </View>

                <View style={NewGroupStyles.nameContainer}>
                <Input placeholder={Localized.t("common.name")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>

                <View style={NewGroupStyles.descriptionContainer}>
                <Input placeholder={Localized.t("newgroup.description")} inputContainerStyle={NewGroupStyles.descriptionTextInputStyle} multiline={true} maxLength={300}  onChangeText={(text) => this.setState({description:text})}/>
                </View>

                <View style={NewGroupStyles.textInputContainer}>
                <Input placeholder={Localized.t("newgroup.hastags")} inputContainerStyle={{borderWidth:1}} onChangeText={(text) => this.setState({hashtag:text})}/>
                </View>

                <View style={NewGroupStyles.imageContainer}>
                <TouchableOpacity onPress={this.onUploadImagePressed.bind(this)} style={NewGroupStyles.plusiconStyle} onPress={() => this.onUploadImagePressed()}>
                <Icon name="pluscircleo" size={width(14)} color="#000"/>
                </TouchableOpacity>

                <View style={NewGroupStyles.uploadImageContainer}>
                  <Text>{Localized.t("newgroup.uploadimage")}</Text>
                </View>
                <View style={NewGroupStyles.groupAvatarContainer}>
                
                <Image source={this.state.avatarSource} style={styles.uploadAvatar}  resizeMode="contain"/>
                </View>
                </View>

                <View style={{width:width(85),height:height(10),alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"row"}}>
                <View style={{width:width(30),height:height(10),alignItems:"center",justifyContent:"center"}}>
                <Text>Approval Required</Text>
                </View>
                <View style={{width:width(15),height:height(10),alignItems:"center",justifyContent:"center"}}>
                <Switch
                    trackColor={{ false: "#767577", true: "#6aa84f" }}
                    thumbColor={this.state.approvalRequired ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => this.setState({approvalRequired:!this.state.approvalRequired})}
                    value={this.state.approvalRequired}
                />
                </View>
                </View>

                <View style={{width:width(85),height:height(15),alignItems:"center",justifyContent:"center"}}>
                <Button
                    title="Create"
                    type="outline"
                    onPress={() => this.onNewGroupAdded()}
                    containerStyle={{borderWidth:1,width:width(25),borderRadius:12,borderColor:"#227fdc"}}
                    />
                </View>
                
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    uploadAvatar:{
        width:width(18),
        height:height(12),

    }
});

function mapStateToProps(state) {
    return {
        grouplist: state.Group,

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGroupList: Action.setGroupList
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NewGroup);


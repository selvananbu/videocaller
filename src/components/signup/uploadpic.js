import React, { Component } from 'react';
import { View, PermissionsAndroid} from 'react-native';
import { Text, Input, Image, Button } from 'react-native-elements';

import { width, height } from 'react-native-dimension';
import  Icon  from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

const options = {
    title: 'Select Avatar',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require("../../assets/icons/user.png"),

        }
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed() {
        this.props.navigation.navigate("SigUpScreen", { screen: 'UserInterests' })
    }

    onUploadImagePressed() {
        console.log("asdasd");
        this.checkForPermission();

    }

    async checkForPermission() {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
            console.log("njknjknjknkjn");
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

    openImagePicker() {
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

    render() {
        return (
            <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('newgroup.uploadimage')}</Text>
                </View>
                <View style={SignUpStyles.imageContainer}>
                    <TouchableOpacity onPress={this.onUploadImagePressed.bind(this)} style={SignUpStyles.plusiconStyle} >
                        <Icon name="pluscircleo" size={width(14)} color="#000" />
                    </TouchableOpacity>

                    <View style={SignUpStyles.uploadImageContainer}>
                        <Text>{Localized.t("newgroup.uploadimage")}</Text>
                    </View>
                    <View style={SignUpStyles.groupAvatarContainer}>

                        <Image source={this.state.avatarSource} style={SignUpStyles.avatarIconStyle} resizeMode="contain" />
                    </View>
                </View>
                {/* <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.birthday")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                {/* <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={this.onNextPressed}
                    containerStyle={SignUpStyles.nextBotton}
                />
            </View>
        );
    }
}

export default UserData;
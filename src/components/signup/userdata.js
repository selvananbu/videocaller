import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

class UserData extends Component {
    constructor(props){
        super(props);
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed(){
        this.props.navigation.navigate("SigUpScreen", { screen: 'UploadPic' })
    }

    render() {
        return (
            <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.title')}</Text>
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t('signup.birthday')} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t('signup.fullName')} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
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
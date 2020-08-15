import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';

import { Localized } from '../../utils';
import LoginStyle from './LoginStyle';

class SignUp extends Component {

    onLoginPressed(){

    }
    render() {
        return (
            <View style={LoginStyle.container}>
                <View style={LoginStyle.headerView}>
                    <Text style={LoginStyle.title}>{Localized.t('signup.title')}</Text>
                </View>
                <View style={LoginStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.email")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                <View style={LoginStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.phone")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View><View style={LoginStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View><View style={LoginStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.password")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View><View style={LoginStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.confirmPassword")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                {/* <View style={LoginStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={this.onLoginPressed}
                    containerStyle={LoginStyle.nextBotton}
                />
            </View>
        );
    }
}

export default SignUp;
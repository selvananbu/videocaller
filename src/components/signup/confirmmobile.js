import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';

import { Localized } from '../../utils';
import SignupStyles from './signupstyles';

class ConfirmMobile extends Component {
    constructor(props){
        super(props);
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed(){
        this.props.navigation.navigate("SigUpScreen", { screen: 'UserData' })
    }
    render() {
        return (
            <View style={SignupStyles.container}>
                <View style={SignupStyles.headerView}>
                    <Text style={SignupStyles.title}>{Localized.t('verifyCode.title')}</Text>
                </View>
                <View style={SignupStyles.nameContainer}>
                    <Input placeholder={Localized.t("verifyCode.fieldInput")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={this.onNextPressed}
                    containerStyle={SignupStyles.nextBotton}
                />
            </View>
        );
    }
}

export default ConfirmMobile;
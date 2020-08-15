import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed(){
        this.props.navigation.navigate("SigUpScreen", { screen: 'UserData' })
    }
    
    render() {
        return (
            <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.title')}</Text>
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.email")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.phone")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View><View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View><View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.password")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View><View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.confirmPassword")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
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

export default SignUp;
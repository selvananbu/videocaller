import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            phone: "",
            username: "",
            password: "",
            confirmpassword: "",
        }
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed(){
        this.props.navigation.navigate("SigUpScreen", { screen: 'ConfirmMobile' })
    }
    
    render() {
        return (
            <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.title')}</Text>
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input value = {this.state.email} placeholder={Localized.t("controls.email")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({email:text})}/>
               
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input value = {this.state.phone} placeholder={Localized.t("controls.phone")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({phone:text})}/>
               
                </View><View style={SignUpStyles.nameContainer}>
                    <Input value = {this.state.username} placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({username:text})}/>
               
                </View><View style={SignUpStyles.nameContainer}>
                    <Input value = {this.state.password} placeholder={Localized.t("controls.password")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({password:text})}/>
               
                </View><View style={SignUpStyles.nameContainer}>
                    <Input value = {this.state.confirmpassword} placeholder={Localized.t("controls.confirmPassword")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({confirmpassword:text})}/>
               
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

function mapStateToProps(state) {
    return {
        signUp: state.SignUp,

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setUserData: Action.setUserData
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
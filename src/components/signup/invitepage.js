import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Image, Button } from 'react-native-elements';
import { width, height } from 'react-native-dimension';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

const inviteOptions = [
    "Email",
    "Contacts",
    "Instagram",
    "Meetup",
    "Facebook",
    "LinkedIn"
]

class InvitePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed() {
        this.props.navigation.navigate("SigUpScreen", { screen: 'AddressBook' })
    }

    render() {
        console.log(this.state, 'sda')
        return (
            <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.invitePeople')}</Text>
                </View>
                <ScrollView>
                
                {inviteOptions.map((key, index) => {
                    return(
                        <View key = {index} style={[{ width: width(100), flexDirection: 'column', marginTop: height(1), marginBottom:height(2), justifyContent: 'space-between', height: height(8), backgroundColor: "#EDEDED" }]}>
                            
                            <TouchableOpacity style={{ width: width(68), height: height(10), justifyContent: 'center', paddingLeft: width(5) }}>
                                <Text style={SignUpStyles.interestStyle}>
                                    {key}
                                </Text>
                            </TouchableOpacity>
                            
                        </View>
                    )
                })}
                
                {/* <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.birthday")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                {/* <View style={SignUpStyles.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                </ScrollView>
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

export default InvitePage;
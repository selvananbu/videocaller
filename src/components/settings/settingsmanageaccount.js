import React, { Component } from 'react';

import { View, Switch } from 'react-native';
import { Text, Input, Image, Button } from 'react-native-elements';
import { width, height } from 'react-native-dimension';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { Localized } from '../../utils';
import SettingsStyle from './settingsstyle';

class SettingsManageAccount extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEnabled: false
        }
    }

    toggleSwitch(){
        this.setState({isEnabled: !this.state.isEnabled})
    }

    render() {
        return (
            <View style={SettingsStyle.container}>
                <View style={SettingsStyle.headerView}>
                    <Text style={SettingsStyle.title}>Manage Account</Text>
                </View>
                <View style={SettingsStyle.nameContainer}>
                    <Input placeholder={Localized.t('controls.email')} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                <View style={SettingsStyle.nameContainer}>
                    <Input placeholder={Localized.t('controls.password')} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                <View style={SettingsStyle.nameContainer}>
                    <Text>Save Login Info</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.toggleSwitch.bind(this)}
                        value={this.state.isEnabled}
                    />
                </View>
                {/* <View style={SettingsStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.birthday")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                {/* <View style={SettingsStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                
            </View>
        );
    }
}

export default SettingsManageAccount;
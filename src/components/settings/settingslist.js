import React from 'react';

import { View } from 'react-native';
import { Text, Input, Image, Button } from 'react-native-elements';
import { width, height } from 'react-native-dimension';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { Localized } from '../../utils';
import SettingsStyle from './settingsstyle';

function SettingsList(props) {

    const openList = (type) => {
        console.log(props, 'sadsad')
        switch(type){
            case 'ManageAccounts':
                props.navigation.navigate("Settings", { screen: 'SettingsManageAccount' })
            break;
            default:
            break;
        }
    }

    return (
        <View style={SettingsStyle.container}>
                <View style={SettingsStyle.headerView}>
                    <Text style={SettingsStyle.title}>{Localized.t('settings.setting')}</Text>
                </View>
                <ScrollView>
                
                    <View key = {'0'} style={SettingsStyle.settingsList}>
                                
                            <TouchableOpacity style={SettingsStyle.settingsList} onPress={ () => openList("ManageAccounts")}>
                                <Text style={SettingsStyle.interestStyle}>
                                    Manage my account
                                </Text>
                                <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                            </TouchableOpacity>
                    </View>
                    <View key = {'1'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Billing
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'2'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Coin
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'3'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Language
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'4'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Coin
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'5'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        FAQ - Privacy
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'6'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Friends
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'7'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Sharing
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'8'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Chat history
                                    </Text>
                                    
                                        <Image source={require('../../assets/icons/righticon.png')} style={SettingsStyle.iconStyle} resizeMode='contain' />
                                    
                                </TouchableOpacity>
                        </View>
                        <View key = {'9'} style = {SettingsStyle.settingsList}>
                                
                                <TouchableOpacity style={SettingsStyle.settingsList} onPress={openList}>
                                    <Text style={SettingsStyle.interestStyle}>
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                        </View>
                {/* <View style={SettingsStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.birthday")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                {/* <View style={SettingsStyle.nameContainer}>
                    <Input placeholder={Localized.t("controls.username")} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View> */}
                </ScrollView>
            </View>
    );
}

export default SettingsList;
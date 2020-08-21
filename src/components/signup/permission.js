import React from 'react';
import { View } from 'react-native';
import { Text, Input, Image, Button } from 'react-native-elements';
import { width, height } from 'react-native-dimension';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

export function AddressBook(props) {
    const onNextPressed = () => {
        props.navigation.navigate("SigUpScreen", { screen: 'ConnectFacebook' })
    }
    return (
        <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.allowAddress')}</Text>
                </View>
                <View style={{ width: width(60), height:height(20), marginRight: 5, borderWidth: 1}}>
                    <Text>You need Friends to video chat,</Text>
                    <Text>Use your contact to find them</Text>
                </View>
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={onNextPressed}
                    containerStyle={SignUpStyles.nextBotton}
                />
        </View>
    );
}

export function ConnectFacebook(props) {
    const onNextPressed = () => {
        props.navigation.navigate("SigUpScreen", { screen: 'Share' })
    }
    return (
        <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.connectFb')}</Text>
                </View>
                <View style={{ width: width(60), height:height(20), marginRight: 5, borderWidth: 1}}>
                    <Text>Company wants facebook.com to signi n,</Text>
                    <Text>This allows the app and website to share information about you</Text>
                </View>
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={onNextPressed}
                    containerStyle={SignUpStyles.nextBotton}
                />
        </View>
    );
}

export function Share(props) {
    const onNextPressed = () => {
        props.navigation.navigate("SigUpScreen", { screen: 'IOPermission' })
    }
    return (
        <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.share')}</Text>
                </View>
                <View style={{ width: width(60), height:height(20), marginRight: 5, borderWidth: 1}}>
                    <Text>Company only shares work your friends</Text>
                    <Text>This app is for talking to your friends. Share your profile link</Text>
                </View>
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={onNextPressed}
                    containerStyle={SignUpStyles.nextBotton}
                />
        </View>
    );
}

export function IOPermission(props) {
    const onNextPressed = () => {
        props.navigation.navigate("Home")
    }
    return (
        <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.permission')}</Text>
                </View>
                <View style={{ width: width(60), height:height(20), marginRight: 5, borderWidth: 1}}>
                    <Text>Microphone</Text>
                    <Text>Camera</Text>
                </View>
                <Button
                    title={Localized.t("signup.nextButton")}
                    type="outline"
                    onPress={onNextPressed}
                    containerStyle={SignUpStyles.nextBotton}
                />
        </View>
    );
}


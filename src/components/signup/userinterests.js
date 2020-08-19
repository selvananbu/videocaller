import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Image, Button } from 'react-native-elements';
import { width, height } from 'react-native-dimension';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import { Localized } from '../../utils';
import SignUpStyles from './signupstyles';

const userInterest = {
    "Sports": ["golf", "football", "basketball"],
    "Movies": ["2 Guns", "A Team"],
    "Books": ["Harrypotter", "Lordoftherings"],
    "Language": ["English", "French"],
    "Location": ["Canada", "NY"]
}

class UserInterests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.onNextPressed = this.onNextPressed.bind(this);
    }

    onNextPressed() {
        this.props.navigation.navigate("SigUpScreen", { screen: 'InvitePage' })
    }

    openList() {

    }

    selectInterest(eachItem){
        console.log(eachItem)
        this.setState((prevState)=> {
            let name = prevState.name;
            name += eachItem + ",";

            return {name}
        })
    }

    render() {
        console.log(this.state, 'sda')
        return (
            <View style={SignUpStyles.container}>
                <View style={SignUpStyles.headerView}>
                    <Text style={SignUpStyles.title}>{Localized.t('signup.selectInterest')}</Text>
                </View>
                <View style={SignUpStyles.nameContainer}>
                    <Input value = {this.state.name} placeholder={Localized.t('signup.selectedInterest')} inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
               
                </View>
                <ScrollView>
                
                {Object.keys(userInterest).map((key, index) => {
                    return(
                        <View key = {index} style={[{ width: width(100), flexDirection: 'column', marginTop: height(1), marginBottom:height(2), justifyContent: 'space-between', height: height(15), backgroundColor: "#EDEDED" }]}>
                            
                            <TouchableOpacity style={{ width: width(68), height: height(10), justifyContent: 'center', paddingLeft: width(5) }} onPress={this.openList.bind(this)}>
                                <Text style={SignUpStyles.interestStyle}>
                                    {key}
                                </Text>
                            </TouchableOpacity>
                            <View key = {index} style={{ width: width(100), flexDirection: 'row', height: height(5), backgroundColor: "#EDEDED", marginLeft: width(5), justifyContent: 'flex-start' }}>
                                {userInterest[key].map((eachItem, index) => {
                                    return(
                                        <TouchableOpacity onPress={this.selectInterest.bind(this, eachItem)} style={{ width: width(15), height:height(5), marginRight: 5, borderWidth: 1}} key = {index}>
                                            <Text numberOfLines = {1}> {eachItem}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
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

export default UserInterests;
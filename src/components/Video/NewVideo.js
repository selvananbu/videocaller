//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput,Switch } from 'react-native';
import { Button,Text,Input } from 'react-native-elements';
import { height, width } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-community/picker';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// create a component
class NewVideo extends Component {
    constructor(props){
        super(props)
        this.state={
            avatarSource:'',
            name:'',
            description:'',
            topics:'',
            hashtag:'',
            starttime:'',
            selectedtime:0,
            noofparticipants:0,
            ispublic:true,
            rsvpstarttime:'',
            rsvpendtime:'',
            location:'',
            approvalrequired:true
        }

        this.onVideoCreatePressed = this.onVideoCreatePressed.bind(this);
    }
    onVideoCreatePressed(){
        var video = {
            name:this.state.name,
            description:this.state.description,
            hashtag:this.state.hashtag,
            ispublic:this.state.ispublic,
            starttime:this.state.starttime,
            rsvpstarttime:this.state.rsvpstarttime,
            rsvpendtime:this.state.rsvpendtime,
            topics:this.state.topics,
            noofparticipants:this.state.noofparticipants,
            approvalRequired:this.state.approvalRequired
        }

        var videolist = this.props.videolist.videoList;
        videolist.push(video)

        this.props.setVideoList(videolist);
       this.props.navigation.navigate("EditVideo",{params:video})
    }
    render() {
        return (
            <KeyboardAwareScrollView>
            <View style={styles.container}>
                 <View style={{height:height(12),width:width(95),alignItems:"center",justifyContent:"center"}}>
                    <Text h3>New Room</Text>
                </View>
                <View style={{width:width(85),height:height(6),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="Name" inputContainerStyle={{borderWidth:1,height:height(4)}}  onChangeText={(text) => this.setState({name:text})}/>
                </View>

                <View style={{width:width(85),height:height(12),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="Description (max 300 characters)" inputContainerStyle={{borderWidth:1,height:height(10),alignItems:"flex-start",justifyContent:"flex-start"}} multiline={true} maxLength={300}  onChangeText={(text) => this.setState({description:text})}/>
                </View>

                <View style={{width:width(85),height:height(6),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="#hashtags" inputContainerStyle={{borderWidth:1,height:height(4)}} onChangeText={(text) => this.setState({hashtag:text})}/>
                </View>
                <View style={{width:width(95),height:height(8),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                    <View style={{width:width(20),height:height(6),alignItems:"center",justifyContent:"center"}}>
                <Text>
                    Topics ( optional )
                </Text>
                </View>
                <View style={{width:width(55),height:height(6),alignItems:"center",justifyContent:"center"}}>
                <View>
                <TextInput placeholder="Topics 1 ,Topics 2..." style={{borderWidth:0.5,height:height(6),width:width(50),alignItems:"center",justifyContent:"center"}}   onChangeText={(text) => this.setState({topics:text})}/>
                </View>
                </View>
                </View>

                <View style={{width:width(92),height:height(6),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
               

                <View style={{width:width(43),height:height(6),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="Start Time" inputContainerStyle={{borderWidth:1,height:height(4),marginTop:height(4)}}  onChangeText={(text) => this.setState({starttime:text})}/>
                </View>
                
               <View style={{width:width(43),height:height(4),borderWidth:0.5,alignItems:"center",justifyContent:"center"}}>
                <Picker
                    selectedValue={this.state.selectedtime}
                    style={{ height: height(4), width: width(40),alignItems:"center",justifyContent:"center" }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedtime:itemValue})}
                >
                    <Picker.Item label="Duration" value="" />
                    <Picker.Item label="30 mins" value="0" />
                    <Picker.Item label="45 mins" value="1" />
                    <Picker.Item label="60 mins" value="2" />
                    <Picker.Item label="90 mins" value="3" />
                    <Picker.Item label="120 mins" value="4" />
                </Picker>
                </View>
                </View>
                <View style={{width:width(82),height:height(6),alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
                
                <View style={{width:width(39),height:height(4),borderWidth:0.5,alignItems:"center",justifyContent:"center"}}>
                <Picker
                    selectedValue={this.state.noofparticipants}
                    style={{ height: height(4), width: width(39) }}
                    onValueChange={(itemValue, itemIndex) => this.setState({noofparticipants:itemValue})}
                >
                    <Picker.Item label="Maximum Participants" value="" />
                    <Picker.Item label="1" value="0" />
                    <Picker.Item label="5" value="1" />
                    <Picker.Item label="10" value="2" />
                    <Picker.Item label="15" value="3" />
                    <Picker.Item label="20" value="4" />
                </Picker>
                </View>
                </View>
                <View style={{width:width(92),height:height(6),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
               

               <View style={{width:width(43),height:height(6),alignItems:"center",justifyContent:"center"}}>
               <Input placeholder="RSVP Start Time" inputContainerStyle={{borderWidth:1,height:height(4),marginTop:height(4)}}  onChangeText={(text) => this.setState({rsvpstarttime:text})}/>
               </View>
               <View style={{width:width(43),height:height(6),alignItems:"center",justifyContent:"center"}}>
               <Input placeholder="RSVP End Time" inputContainerStyle={{borderWidth:1,height:height(4),marginTop:height(4)}}  onChangeText={(text) => this.setState({rsvpendtime:text})}/>
               </View>
               </View>
               <View style={{width:width(92),height:height(6),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
               

               <View style={{width:width(85),height:height(6),alignItems:"center",justifyContent:"center"}}>
               <Input placeholder="Location (Optional)" inputContainerStyle={{borderWidth:1,height:height(4),marginTop:height(4)}}  onChangeText={(text) => this.setState({location:text})}/>
               </View>
               </View>
               <View style={{width:width(92),height:height(10),alignItems:"flex-end",justifyContent:"flex-end",flexDirection:"column"}}>
                   <View style={{width:width(20),alignItems:"center",justifyContent:"center",height:height(5),flexDirection:"row"}}>
                       <Text>
                           Public
                       </Text>
               <Switch
                    trackColor={{ false: "#767577", true: "#6aa84f" }}
                    thumbColor={this.state.ispublic ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => this.setState({ispublic:!this.state.ispublic})}
                    value={this.state.ispublic}
                />
                </View>
                <View style={{width:width(40),alignItems:"center",justifyContent:"center",height:height(5),flexDirection:"row"}}>
                       <Text>
                           Approval Required
                       </Text>
                 <Switch
                    trackColor={{ false: "#767577", true: "#6aa84f" }}
                    thumbColor={this.state.approvalrequired ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => this.setState({approvalrequired:!this.state.approvalrequired})}
                    value={this.state.approvalrequired}
                />
                </View>
               </View>
               <View style={{width:width(40),alignItems:"center",justifyContent:"center",height:height(8),flexDirection:"row"}}>
               <Button
                         title="Create"
                         buttonStyle={{width:width(25),height:height(4),backgroundColor:"whi=tesmoke",borderWidth:1,borderColor:"#000"}}
                         titleStyle={{color:"#000"}}
                         onPress={this.onVideoCreatePressed}
                         />
                </View>
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        height:height(99)
    },
});

function mapStateToProps(state) {
    return {
        videolist: state.Video,

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setVideoList: Action.setVideoList
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NewVideo);

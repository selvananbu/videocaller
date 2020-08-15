//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button,Text,Input } from 'react-native-elements';
import { height, width } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Member from './Member';


import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

// create a component
class EditVideo extends Component {
    constructor(props){
        super(props)
        this.state={
            index:0,
            members:[{name:"AB"},{name:"CD"},{name:"HU"},{name:"AB"},{name:"CD"},{name:"HU"}]
        }
    }
    render() {
        console.log(this.props);
        return (
            <KeyboardAwareScrollView>
            <View style={styles.container}>
                 <View style={{height:height(12),width:width(95),alignItems:"center",justifyContent:"center"}}>
                    <Text h3>Video Call</Text>
                </View>
                <View style={{width:width(90),height:height(15),alignItems:"center",justifyContent:"center"}}>
                <View style={{width:width(90),height:height(4),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18}}>
                    {this.props.route.params.params.name}
                </Text>
                </View>
                <View style={{width:width(90),height:height(4),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18}}>
                    {this.props.route.params.params.hashtag}
                </Text>
                </View>
                </View>
                <View style={{width:width(90),height:height(15),alignItems:"center",justifyContent:"center"}}>
               
                <View style={{width:width(90),height:height(4),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18}}>
                    {this.props.route.params.params.starttime}
                </Text>
                </View>
                <View style={{width:width(90),height:height(4),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18}}>
                    Max:{this.props.route.params.params.noofparticipants}
                </Text>
                </View>
                </View>
                <View style={{width:width(90),height:height(6),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18}}>
                    Topics of Discussion
                </Text>
                <Text style={{fontSize:18}}>
                    {this.props.route.params.params.topics}
                </Text>
                </View>
                <View style={{width:width(90),height:height(6),alignItems:"flex-start",justifyContent:"center",flexDirection:"row"}}>
               <TouchableOpacity style={{width:width(45),height:height(4),alignItems:"center",justifyContent:'center',backgroundColor:this.state.index === 0 ? "#94bdf2" :"#fff",borderWidth:1}} onPress={() => this.setState({index:0})}>
                <Text>
                    RSVPs
                </Text>
               </TouchableOpacity>
               <TouchableOpacity style={{width:width(45),height:height(4),alignItems:"center",justifyContent:'center',backgroundColor:this.state.index === 1 ? "#94bdf2" :"#fff",borderWidth:1,borderLeftWidth:0}} onPress={() => this.setState({index:1})}>
                <Text>
                   Waiting List
                </Text>
               </TouchableOpacity>
               
               </View>
               <View style={{width:width(90),height:height(30),alignItems:"flex-start",justifyContent:"center"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.members.map((member,idx) =>{
                        return(
                            <Member key={idx} member={member}/>
                        )
                    })}
                </ScrollView>

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
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
export default connect(mapStateToProps, mapDispatchToProps)(EditVideo);

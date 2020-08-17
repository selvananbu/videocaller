import React, { Component } from 'react';
import { View,SafeAreaView, Image } from 'react-native';
import { Button,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { width, height } from 'react-native-dimension';

import { Localized } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Hosting from './Hosting';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeStyles from './HomeStyles';
import GroupList from './GroupList';
import VideoList from './VideoList';

var hostingData = {
  time:"Saturday 3pm-4pm",
  type:"Video Call",
  desc:"Movies",
  Description:"Group,Screen",
  count:"3/4"
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onGroupItemPressed = this.onGroupItemPressed.bind(this);
    this.onVideoPressed = this.onVideoPressed.bind(this);
  }

  
  onNewGroupPressed(){
    this.props.navigation.navigate("NewGroup");
  }

  onGroupItemPressed(group){
    this.props.navigation.navigate("EditGroup",{'param':group});
  }
  onVideoPressed(video){
    this.props.navigation.navigate("EditVideo",{'params':video});
  }
  onNewVideoPressed(){
    this.props.navigation.navigate("CreateVideo");
  }

  render() {
    return (
        <SafeAreaView style={HomeStyles.container}>
          <View style={HomeStyles.tabContainer}>
            <View style={HomeStyles.myGroupContainer}>
                <Text style={HomeStyles.myGroupText}>
                  {Localized.t("home.mygroup")}
                </Text>
            </View>
            <View style={HomeStyles.myRecommendedContainer}>
            <Text style={HomeStyles.myGroupText}>
            {Localized.t("home.recommended")}
                </Text>
            </View>
          </View>

          <View style={HomeStyles.hostingContainer}>
              <GroupList onGroupItemPressed={this.onGroupItemPressed}/>
              <TouchableOpacity style={HomeStyles.rightArrowContainer}>
              <Image source={require("../../assets/icons/right-arrow.png")} style={{width:width(8),height:height(15)}} resizeMode="contain"/>
              </TouchableOpacity>
          </View>

          <View style={{width:width(95),height:height(20),alignItems:"center",justifyContent:"center",borderBottomWidth:1}}>

            <View style={{width:width(95),height:height(4),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18}}>
                  Hosting
                </Text>
            </View>
            <View style={{width:width(95),height:height(16),alignItems:"center",justifyContent:"center"}}>
              <Hosting hostingData={hostingData} style={{width:width(95),height:height(14)}}/>
            </View>

          </View>
          <View style={{width:width(95),height:height(30),alignItems:"center",justifyContent:"center"}}>
            <VideoList isHomeScreen={true} onVideoItemPressed={this.onVideoPressed}/>
          </View>
          <View style={{width:width(95),flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
       <Button
       onPress={() => this.onNewGroupPressed()}
       icon={
        <Icon
          name="pluscircleo"
          size={15}
          color="white"
        />
      }
      containerStyle={{width:width(35),marginRight:width(5)}}
          title="  New Group"
          style={{borderRadius:12}}
        />
         <Button
       onPress={() => this.onNewVideoPressed()}
       icon={
        <Icon
          name="pluscircleo"
          size={15}
          color="white"
        />
      }
      containerStyle={{width:width(35)}}
          title="  New Video"
          style={{borderRadius:12}}
        />
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
      grouplist: state.Group,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      setGroupList: Action.setGroupList
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

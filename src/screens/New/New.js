import React, { Component } from 'react';
import { View,SafeAreaView, Image } from 'react-native';
import { Button,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { width, height } from 'react-native-dimension';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Hosting from './Hosting';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var hostingData = {
  time:"Saturday 3pm-4pm",
  type:"Video Call",
  desc:"Movies",
  Description:"Group,Screen",
  count:"3/4"
}

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onGroupItemPressed = this.onGroupItemPressed.bind(this);
  }

  componentDidMount(){
    console.log("Mounteddddddd");
  }

  onNewGroupPressed(){
    this.props.navigation.navigate("NewGroup");
  }

  onGroupItemPressed(group){
    this.props.navigation.navigate("EditGroup",{'param':group});
  }
  onNewVideoPressed(){
    this.props.navigation.navigate("CreateVideo");
  }

  render() {
    return (
        <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <View style={{width:width(95),height:height(5),alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
            <View style={{width:width(25),height:height(5)}}>
                <Text style={{fontSize:18}}>
                  My Groups
                </Text>
            </View>
            <View style={{width:width(45),height:height(5)}}>
            <Text style={{fontSize:18}}>
                  Recommended
                </Text>
            </View>
          </View>
          <View style={{flexDirection:"row",borderBottomWidth:1}}>
          <View style={{width:width(85),height:height(20),alignItems:"center",justifyContent:"center"}}>

            <ScrollView horizontal  contentContainerStyle={{flexGrow : 1, alignItems:"center",justifyContent:"flex-start"}}>
              {this.props.grouplist.groupList.map((group,idx) => {
                return(
                  <TouchableOpacity style={{width:width(35),height:height(18),alignItems:"center",justifyContent:"center",flexDirection:"column"}} key={idx} onPress={() => this.onGroupItemPressed(group)}>
                    <Image source={group.avatar} style={{width:width(20),height:height(15)}}/>
                      <View style={{width:width(35),height:height(4),alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:16,fontWeight:"500"}}>
                        {group.name}
                      </Text>
                      </View>
                      
                  </TouchableOpacity>
                )
              })}
            </ScrollView>

          </View>
          <TouchableOpacity style={{width:width(10),height:height(18),alignItems:"center",justifyContent:"center"}}>
          <Image source={require("../../image/right-arrow.png")} style={{width:width(8),height:height(15)}} resizeMode="contain"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(New);

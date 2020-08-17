//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,ScrollView,TouchableOpacity,Image,Text } from 'react-native';

import { width, height } from 'react-native-dimension';
import {Button} from 'react-native-elements';
import { Localized } from '../../utils';


import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupListStyle from './GroupListStyle';
import GroupListAbstractStyle from './GroupListAbstractStyle';
import VideoListStyle from './VideoListStyle';

// create a component
class GroupListAbstract extends Component {

  getGroupComponent(group,idx){
   return(
      <TouchableOpacity style={GroupListAbstractStyle.groupHolder} key={idx} onPress={() => this.props.onGroupItemPressed(group)}>

                <View style={GroupListStyle.statusContainer}>
                      <Button
                    title={idx % 2  === 1 ? Localized.t("video.rsvp"): Localized.t("video.cancel")}
                    type="outline"
                    containerStyle={VideoListStyle.createButton}
                    titleStyle={VideoListStyle.createButtonText}
                    />
                    <View style={VideoListStyle.participantContainer}>
                    <Text>
                        {idx}/{this.props.grouplist.groupList.length}
                    </Text>
                    </View>
                   
                      </View>
                      <View style={GroupListStyle.videoContent}>
                      <Image source={group.avatar} style={GroupListAbstractStyle.image}/>
                      <View style={GroupListStyle.groupHeaderTextContainer}>
                      <Text style={GroupListStyle.groupHeaderText}>
                        {group.name}
                      </Text>
                      </View>
                      </View>
                 
                      
                  </TouchableOpacity>
              )
          }
    render() {
        return (
            <View style={GroupListAbstractStyle.container}>

            <ScrollView   contentContainerStyle={GroupListStyle.groupContainer}>
            {this.props.grouplist.groupList.map((group,idx) => {
                  
                  return(
                      this.props.isHomeScreen !== undefined || this.props.searchText.searchText === ''
                      ?
                          this.getGroupComponent(group,idx)
                      :
                      group.name.includes(this.props.searchText.searchText)
                      ?
                          this.getGroupComponent(group,idx)
                      :
                          <View/>
                  
                  )
                })}
            </ScrollView>

          </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
function mapStateToProps(state) {
  return {
      grouplist: state.Group,
      searchText:state.Util

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      setGroupList: Action.setGroupList,
      setSearchText:Action.setSearchText
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupListAbstract);

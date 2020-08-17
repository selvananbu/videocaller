//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,ScrollView,TouchableOpacity,Image,Text } from 'react-native';

import { width, height } from 'react-native-dimension';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupListStyle from './GroupListStyle';

// create a component
class GroupList extends Component {
    render() {
        return (
            <View style={GroupListStyle.container}>

            <ScrollView horizontal  contentContainerStyle={GroupListStyle.groupContainer}>
              {this.props.grouplist.groupList.map((group,idx) => {
                return(
                  <TouchableOpacity style={GroupListStyle.groupHolder} key={idx} onPress={() => this.props.onGroupItemPressed(group)}>
                    <Image source={group.avatar} style={GroupListStyle.image}/>
                      <View style={GroupListStyle.groupHeaderTextContainer}>
                      <Text style={GroupListStyle.groupHeaderText}>
                        {group.name}
                      </Text>
                      </View>
                      
                  </TouchableOpacity>
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

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      setGroupList: Action.setGroupList
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupList);

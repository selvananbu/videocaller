//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import VideoListStyle from './VideoListStyle';
import { ScrollView } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import { Localized } from '../../utils';


import { width, height } from 'react-native-dimension';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// create a component
class VideoList extends Component {

    getVideoComponent(video,idx){
        return(
            <TouchableOpacity style={{width:width(99),height:height(12),alignItems:"center",justifyContent:"center",flexDirection:"row"}} key={idx} onPress={() => this.props.onVideoItemPressed(video)}>
            <View style={VideoListStyle.statusContainer}>
            <Button
          title={idx % 2  === 1 ? Localized.t("video.rsvp"): Localized.t("video.cancel")}
          type="outline"
          containerStyle={VideoListStyle.createButton}
          titleStyle={VideoListStyle.createButtonText}
          />
          <View style={VideoListStyle.participantContainer}>
          <Text>
              {video.noofparticipants}/{video.noofparticipants}
          </Text>
          </View>
         
            </View>
          
            <View style={VideoListStyle.videoContent}>
        {idx/2 === 1 
          ?
          <Text style={VideoListStyle.textRecommended}>
          Recommended
          </Text>
          :
          <View/>}
          <Text style={VideoListStyle.videoTextStatus}>
              (Video Call)
          </Text>
          <Text style={VideoListStyle.videoText}>
              {video.name}
          </Text>
            </View>
        </TouchableOpacity>
        )
    }
    render() {
        console.log("wwwwwwww",this.props.videolist);
        return (
            <View style={VideoListStyle.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                {this.props.videolist.videoList.map((video,idx) => {
                  
                return(
                    this.props.isHomeScreen !== undefined || this.props.searchText.searchText === ''
                    ?
                        this.getVideoComponent(video,idx)
                    :
                    video.name.includes(this.props.searchText.searchText)
                    ?
                        this.getVideoComponent(video,idx)
                    :
                        <View/>
                
                )
              })}
                </ScrollView>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        videolist: state.Video,
        searchText:state.Util
  
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGroupList: Action.setGroupList,
        setSearchText:Action.setSearchText
    }, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

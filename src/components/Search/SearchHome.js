//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Group } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import SearchHomeStyle from './SearchHomeStyle';
import { appTheme } from '../../utils/Themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VideoList from '../Home/VideoList';
import GroupListAbstract from '../Home/GroupListAbstract';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const tabOptions = [
    "Video Calls",
    "LiveStreams",
    "Groups"
]
// create a component
class SearchHome extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedTab:0
        }

        this.onGroupItemPressed = this.onGroupItemPressed.bind(this);
        this.onVideoPressed = this.onVideoPressed.bind(this);
        this.onTabChanged = this.onTabChanged.bind(this);
    }
    onTabChanged(index){
        console.log(index);
        this.setState({selectedTab:index})
    }
    componentDidMount(){
        // this.props.navigation.navigate("CreateNewScreen")
    }
    onGroupItemPressed(group){
        this.props.navigation.navigate("EditGroup",{'param':group});
      }
      onVideoPressed(video){
        this.props.navigation.navigate("EditVideo",{'params':video});
      }
    render() {
        return (
            <KeyboardAwareScrollView>
            <View style={SearchHomeStyle.container}>
                <Input
                    placeholder='Search As you want..'
                    containerStyle={SearchHomeStyle.searchInputContainer}
                    inputStyle={{borderBottomColor:"green"}}
                    onChangeText={value => this.props.setSearchText(value)}
                    value={this.props.searchText.searchText}
                    leftIcon={
                        <Icon
                        name='search'
                        size={24}
                        color={appTheme().textColor}
                        />
                    }
                    />
                <View style={SearchHomeStyle.tabContainer}>
                    {tabOptions.map((tab,idx) => {
                        return(
                        <TouchableOpacity style={idx !== tabOptions.length-1 ?
                            [SearchHomeStyle.tabHeaderTextContainer,{borderRightWidth:1}] : SearchHomeStyle.tabHeaderTextContainer} onPress={() => this.onTabChanged(idx)}>
                        <Text style={this.state.selectedTab === idx ? [SearchHomeStyle.tabHeaderText,{fontSize:20,fontWeight:"bold"}] : SearchHomeStyle.tabHeaderText}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={SearchHomeStyle.tabContent}>
                    {this.state.selectedTab === 0
                    ?
                    <VideoList onVideoItemPressed={this.onVideoPressed}/>
                    :
                    this.state.selectedTab === 1
                    ?
                    <Text>No hostiong Available...</Text>
                    :
                    <GroupListAbstract  onGroupItemPressed={this.onGroupItemPressed}/>
                    }
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
        searchText: state.Util,
  
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setSearchText: Action.setSearchText
    }, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SearchHome);

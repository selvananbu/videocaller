//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Input } from 'react-native';
import friendStyle from './friendstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Friend from './friend';
import NotificationScreenStyle from '../Notification/NotificationScreenStyle';
import { friendsData } from '../../utils/staticData';
import SearchHomeStyle from '../Search/SearchHomeStyle';

import * as Action from '../../action/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appTheme } from '../../utils/Themes/appTheme';

// create a component
class friendscreen extends Component {
    render() {
        return (
            <View style={friendStyle.container}>
                 <View style={NotificationScreenStyle.descriptionContainer}>
                 {/* <Input
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
                    }/> */}
                </View>
                <View style={friendStyle.bottomcontainer}>
                    {friendsData.friends.map((friend,idx) => {
                        return(
                            <Friend friend={friend} key={idx}/>
                        )
                    })}
                </View>
            </View>
            // <TouchableOpacity style={friendStyle.container}>
            //      <View style={NotificationScreenStyle.descriptionContainer}>
            //         <Text style={NotificationScreenStyle.descriptiontext}>Notifications</Text>
            //     </View>
            // </TouchableOpacity>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         searchText: state.Util,
  
//     };
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         setSearchText: Action.setSearchText
//     }, dispatch)
//   }
//   export default connect(mapStateToProps, mapDispatchToProps)(friendscreen);
export default friendscreen;
import React, { Component } from 'react';
import { Button,Text } from 'react-native-elements';
import { View, StyleSheet, Image } from 'react-native';
import { height, width } from 'react-native-dimension';
import EditGroupStyles from './EditGroupStyles';
import NewGroupStyles from './NewGroupStyles';
import { Localized } from '../../utils';


class EditGroup extends Component {
    render() {
        var group = this.props.route.params.param
        return (
            <View style={NewGroupStyles.container}>
                <View style={NewGroupStyles.headerEditContainer}>
                    <Text style={NewGroupStyles.headerText}>{group.name}</Text>
                </View>
                <View style={EditGroupStyles.descriptionContainer}>
                    <View style={EditGroupStyles.descriptionEditContainer}>
                    <Text style={EditGroupStyles.descriptiontext}>{group.description.length > 8 ? group.description.substring(0,5) + "..." :group.description}</Text>
                    </View>
                    <View style={EditGroupStyles.joinButtonContainer}>
                        <Button
                         title={Localized.t("editgroup.join")}
                         buttonStyle={EditGroupStyles.joinbuttonStyle}
                         titleStyle={EditGroupStyles.jointextstyle}
                         />
                    </View>
                </View>
                <View style={EditGroupStyles.hashtagContainer}>

                    <Text style={EditGroupStyles.hasttagText}>{group.hashtag}</Text>
                </View>
                <View style={EditGroupStyles.editgroupIconContainer}>
                    <Image source={group.avatar} style={EditGroupStyles.editgroupIcon} resizeMode="cover"/>
                </View>

                <View style={EditGroupStyles.editgroupDescriptionContainer}>
                <Text style={EditGroupStyles.descriptionTextHeader}>
                        Description
                    </Text>
                    <Text style={EditGroupStyles.descriptionTextContent}>
                        {group.description}
                    </Text>
                </View>

            </View>
        );
    }
}
export default EditGroup;

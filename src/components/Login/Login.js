//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input ,Image,Button} from 'react-native-elements';
import { width, height } from 'react-native-dimension';

// create a component
class Login extends Component {
    constructor(props){
        super(props);
        this.onLoginPressed = this.onLoginPressed.bind(this);
        this.onSignUpPressed = this.onSignUpPressed.bind(this);
    }

    onLoginPressed(){
        this.props.navigation.navigate("Home")
    }

    onSignUpPressed(){
        this.props.navigation.navigate("SigUpScreen", { screen: 'UserDetails' })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width:width(99),height:height(40),alignItems:"center",justifyContent:"center"}}>
                <Text>Welcome to Login Screen</Text>
                </View>
                <Button
                    title="Sign In"
                    type="outline"
                    onPress={this.onLoginPressed}
                    containerStyle={{borderWidth:1,width:width(75), marginBottom: 20,borderRadius:12,borderColor:"#227fdc"}}
                    />
                <Button
                    title="Sign UP"
                    type="outline"
                    onPress={this.onSignUpPressed}
                    containerStyle={{borderWidth:1,width:width(75), marginBottom: 20, borderRadius:12,borderColor:"#227fdc"}}
                />
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
        backgroundColor: 'whitesmoke',
    },
});

//make this component available to the app
export default Login;

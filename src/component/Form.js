import { View,StyleSheet,Text, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addWord} from "../redux/actionCreators"
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            en: '',
            vn: '',
        }
        this.onAdd = this.onAdd.bind(this);// bi loi tao ra nhieu du lieu
    }
   onAdd(){
       const {en, vn} = this.state;
        this.props.addWord(en,vn);
   }
    render() {
        return (
            <View style= {styles.container}>
                <TextInput
                value={this.state.en}
                placeholder="English Text"
                style = {styles.textInput}
                onChangeText = { text => this.setState({en: text})} />
                
                <TextInput 
                value = {this.state.vn}
                style = {styles.textInput}
                placeholder="Vietnamese Meaning"
                onChangeText = { text => this.setState({vn: text})}/>
                <TouchableOpacity onPress={() => this.onAdd()}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }

   
}
const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
        textInput:{
            height: 50,
            width: 400,
            backgroundColor: '#E4F6D4',
            margin: 10,
            paddingHorizontal: 10,
        }

})

export default connect(null, {addWord})(Form);
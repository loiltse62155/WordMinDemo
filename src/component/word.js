import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Word extends Component {
    state = {}
    changeWordStatus = () => {
        this.props.dispatch({
            type: 'MEMORISED_CHANGE',
            id: this.props.myWords.id
        })
    }
    render() {
        const { en, vn, memorized, isShow } = this.props.myWords;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const buttonName = memorized ? 'Forget' : 'Memorised';
        const meaning = isShow ? vn : '-----------'
        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity style={styles.button} onPress={this.changeWordStatus.bind(this)}>
                        <Text style={styles.controllerButton}>{buttonName}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.dispatch({
                        type: 'MEANING_CHANGE',
                        id: this.props.myWords.id
                    })}>
                        <Text style={styles.controllerButton}>Show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3e5f5',
        padding: 10,
        margin: 10,
        
        //  color: 'white'
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    controllerButton: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10
    },
    button: {
        
    }

});

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWordss: state.arrayWord,
        
    };
}
export default connect(mapStateToProps)(Word);
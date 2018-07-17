import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
class Menu extends Component {
    getFilterStatus(filterStatusName) {
        
        if (filterStatusName === this.props.myFilters) {
            return { color: 'yellow', fontWeight: 'bold' };
        }
        return styles.button;
    }

    setFilterStatus(actionType){
        this.props.dispatch({type: actionType});
    }
    render() {


        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={this.getFilterStatus('SHOW_ALL')} onPress={()=>{
                        this.setFilterStatus('SHOW_ALL')
                    }}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={()=>{
                        this.setFilterStatus('MEMORISED')
                    }} style={this.getFilterStatus('MEMORISED')}>MEMORISED</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={()=>{
                        this.setFilterStatus('NEED_PRACTISE')
                    }} style={this.getFilterStatus('NEED_PRACTISE')}>NEED PRACTISE</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
function mapStateToProps(state) {
    //alert("adfgfg" + state.filterStatus);
    return {
        myFilters: state.filterStatus
    }
}
export default connect(mapStateToProps)(Menu);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        color: 'white'
    }
})
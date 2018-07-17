import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Word from './word';
import Menu from './Menu';
import Form from './Form';
import {toggleIsAdding} from '../redux/actionCreators'

class Main extends Component {
    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'MEMORISED')
            return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTISE')
            return myWords.filter(e => !e.memorized);
        return myWords;
    }
    render() {
        const sign = this.props.myIsAdding ? 'X' : '+'
        return (
          
            <View style={{ flex: 1, backgroundColor: '#df78ef', alignSelf: 'stretch' }}>
                <Menu />
                <View style={styles.header}>
                    <Text></Text>
                    <Text>Your words list</Text>
                    <TouchableOpacity onPress={()=> this.props.toggleIsAdding() }><Text>{sign}</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{ flex: 10 }}>
                {this.props.myIsAdding ? <Form /> : null}
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myWords={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        myFilter: state.filterStatus,
        myWords: state.arrayWord,
        myIsAdding: state.isAdding,
    };
} 
export default connect(mapStateToProps, {toggleIsAdding})(Main);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
 
const ShowScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost, updateBlogPost } = useContext(Context);
    const id = navigation.getParam('id')

    function currentBlog() {
       return state.find(data => data.id === id)
    }

    return (
        <View>
            <Text>{ currentBlog().title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'gray'
    },

    contentContainer: {
        paddingHorizontal: 20
    },

    rowSeperator: {
        height: 10,
        backgroundColor: 'lightgray'
    }
});

export default ShowScreen;
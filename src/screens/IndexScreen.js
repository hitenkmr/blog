import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                ItemSeparatorComponent={(props) => {
                    return (<View style={styles.rowSeperator} />);
                }}
                contentContainerStyle={styles.contentContainer}
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (<View style={styles.container}>
                        <Text>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <AntDesign name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    );
                }}
            />
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

export default IndexScreen;
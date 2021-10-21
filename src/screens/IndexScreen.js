import React, { useContext } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {

    const value = useContext(BlogContext);

    console.log("data");

    return <View>

        <Button title='Add Post' onPress={() => { value.addBlogPosts() }}></Button>

        <FlatList
            keyExtractor={(item, index) => item.title}
            data={value.data}
            renderItem={({ item, index }) => {
                return (
                    <View>
                        <Text>
                            {item.title}
                        </Text>
                    </View>
                );
            }}
        />

        <Button title='See Posts' onPress={() => { navigation.push('Index') }}></Button>

    </View>
};

const styles = StyleSheet.create({

});

export default IndexScreen;
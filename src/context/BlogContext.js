import React, { useState } from 'react';
import { add } from 'react-native-reanimated';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);

    function addBlogPosts() {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }

    return <BlogContext.Provider value={ {data: blogPosts, addBlogPosts: addBlogPosts} }>{children}</BlogContext.Provider>;
};

export default BlogContext;
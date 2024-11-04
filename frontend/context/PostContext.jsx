import { useState, createContext, useContext } from 'react';

// Create the context
export const PostContext = createContext();

// Custom hook to use the PostContext
export const usePostContext = () => {
    return useContext(PostContext);
};

// Provider component
export const PostContextProvider = ({ children }) => {
    const [post, setPost] = useState(JSON.parse(localStorage.getItem("created-post")) || null);

    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
};

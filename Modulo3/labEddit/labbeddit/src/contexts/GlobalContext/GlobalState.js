import React, {useState, useEffect} from 'react'; 
import { GetPosts } from '../../services/requests';
import {GlobalContext} from './GlobalContext'; 

function GlobalState( {children} ) {
    //posts currently being shown
    let [postsOnDisplay, setPostsOnDisplay] = useState([]); 

    //list of posts I have interacted with (saving upvotes and downvotes)
    let [postsInteractions, setPostsInteractions] = useState([]);

    //current pagecount
    let [pageCount, setPageCount] = useState(1); 

    // //post offset for pagination
    // let [postOffset, setPostOffset] = useState(0)


    let [detailedPost, setDetailedPost] = useState({}); 


    const loadPostsToDisplay = () => {
        let token = window.localStorage.getItem('token'); 

        //add posts to PostsInteractions if they are not there
        if(token && token.length > 0) 
        {
            GetPosts(`posts?page=1&size=${10*pageCount}`, token, setPostsOnDisplay); 
        }

    }

    useEffect(() => {
      //initial loadup on page 1 for all posts and posts on display

      let token = window.localStorage.getItem('token'); 

      if(token && token.length > 0) 
      {
          GetPosts(`posts?page=1`, token, setPostsOnDisplay);    
      }
        
    }, [])


    let states = {postsOnDisplay, postsInteractions, pageCount, detailedPost}; 
    let setters = {setPostsOnDisplay, setPostsInteractions, setPageCount, setDetailedPost}; 
    let requests = {loadPostsToDisplay}; 

   return (
       <GlobalContext.Provider value = { {states,setters,requests} }>
           {children}
       </GlobalContext.Provider>
   )

}

export default GlobalState; 
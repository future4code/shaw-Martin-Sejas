import React, { useState, useEffect, useContext } from 'react';
import upvoteIcon from '../../assets/upvote.svg';
import greenUpvote from '../../assets/greenUpvote.svg'
import downvoteIcon from '../../assets/downvote.svg';
import redDownvote from '../../assets/redDownvote.svg';
import commentIcon from '../../assets/commentLogo.svg';
import { PostBoxCommentDiv, PostBoxInteractionDiv, PostBoxMainDiv, PostBoxTitleDiv, PostBoxUpvoteDiv, PostBoxUserNameDiv } from './styled'
import { useNavigate } from 'react-router-dom';
import {goToPost} from '../../services/Routes/coordinates';
import { CreatePostVote, ChangePostVote, DeletePostVote } from '../../services/requests';
import {GlobalContext} from '../../contexts/GlobalContext/GlobalContext';

function PostBox(props) {
    //receive props post
    // id, body, commentCount, createdAt, title, userId, userVote, username, voteSum
    const [upvoted, setUpvoted] = useState(false); 
    const [downvoted, setDownvoted] = useState(false); 
    const {states, setters} = useContext(GlobalContext); 

    let {detailedPost} = states; 
    let {setDetailedPost} = setters; 
    const navigate = useNavigate(); 

    useEffect(() => {
      
    
     
    }, [upvoted,downvoted])

    const handleUpvote = () => {
        //if no downvote or upvote registered, make new vote
        let token = window.localStorage.getItem('token'); 
        if (!upvoted && !downvoted)
        {
           
            //request (POST) new vote creation with direction 1
            let body = {
                direction: 1
            }
            let answer = CreatePostVote(`posts/${props.post.id}/votes`,body, token);
            answer.then( (response) => {
                setUpvoted(true); 
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            // setUpvoted to true
        }

        //if downvoted but actually upvoting now
        else if( !upvoted && downvoted) 
        {
            
            //request (PUT) direction 1 
             let body = {
                direction: 1
            }
            let answer = ChangePostVote(`posts/${props.post.id}/votes`,body, token);
            answer.then( (response) => {
                setUpvoted(true); 
                setDownvoted(false); 
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            // setUpvoted to true, downvoted to false
        } 

        //else we are already upvoted, we are going to remove the upvote
        else {
            //request (DELETE) post vote
          
            let answer = DeletePostVote(`posts/${props.post.id}/votes`, token);
            answer.then( (response) => {
                setUpvoted(false);  
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            //set Upvoted to false
        }
    }


    const handleDownvote = () => {
        //if no downvote or upvote registered, make new downvote
        let token = window.localStorage.getItem('token'); 
        if (!upvoted && !downvoted)
        {
            
            //request (POST) new vote creation with direction 1
            let body = {
                direction: -1
            }
            let answer = CreatePostVote(`posts/${props.post.id}/votes`,body, token);
            answer.then( (response) => {
                setDownvoted(true); 
            }).catch( (error) => alert("Erro ao dar downvote no post!"))
            // setUpvoted to true
        }

        //if upvoted but actually downvoting now
        else if( upvoted && !downvoted) 
        {
           
            //request (PUT) direction 1 
             let body = {
                direction: -1
            }
            let answer = ChangePostVote(`posts/${props.post.id}/votes`,body, token);
            answer.then( (response) => {
                setUpvoted(false); 
                setDownvoted(true); 
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            // setUpvoted to true, downvoted to false
        } 

        //else we are already downvoted, we are going to remove the downvote
        else {
            //request (DELETE) post vote
            
            let answer = DeletePostVote(`posts/${props.post.id}/votes`, token);
            answer.then( (response) => {
                setDownvoted(false);  
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            //set Downvoted to false
        }
    }
    
//   if(props.post.id === "4f3f4da7-46a2-4b1c-b1e0-cd7c6d11d5db")
//   {
//       console.log(upvoted, "upvoted status")
//       console.log(downvoted, "downvoted status")
//   }

const handlePostClick = () => {
    setDetailedPost(props.post); 
    goToPost(navigate, props.post.id)
}

  return (
    <PostBoxMainDiv>
        <PostBoxUserNameDiv>
            <p>{`Enviado por: ${props.post.username}`}</p>
        </PostBoxUserNameDiv>
        
        <PostBoxTitleDiv onClick={props.fromFeed? ()=> {handlePostClick()} : null}>
            <h2>{props.post.title}</h2>
        </PostBoxTitleDiv>

        <PostBoxInteractionDiv>
            <PostBoxUpvoteDiv>
                {upvoted ? <img alt="green upvote icon" src={greenUpvote} id="upvoteIcon" onClick={()=> {handleUpvote()}}/>
                :<img alt="upvote icon" src={upvoteIcon} id="upvoteIcon" onClick={()=> {handleUpvote()}}/> }

            <p> {` ${props.post.voteSum === null ? 0: (Number(props.post.voteSum)) }`}</p>  

            {downvoted? <img alt=" reddownvote icon" src={redDownvote} id="downvoteIcon" onClick={()=> {handleDownvote()}}/> : 
            <img alt="downvote icon" src={downvoteIcon} id="downvoteIcon" onClick={()=> {handleDownvote()}}/>}

            </PostBoxUpvoteDiv>
            
           <PostBoxCommentDiv onClick={props.fromFeed? ()=> {handlePostClick()} : null}>
           <img alt=" comment icon" src={commentIcon} />
           <p> {` ${props.post.commentCount === null ? 0: props.post.commentCount}`}</p>
           </PostBoxCommentDiv>
        </PostBoxInteractionDiv>




    </PostBoxMainDiv>
  )
}

export default PostBox
import React, { useState, useEffect } from 'react';
import upvoteIcon from '../../assets/upvote.svg';
import greenUpvote from '../../assets/greenUpvote.svg'
import downvoteIcon from '../../assets/downvote.svg';
import redDownvote from '../../assets/redDownvote.svg';
import commentIcon from '../../assets/commentLogo.svg';
import { PostBoxCommentDiv, PostBoxInteractionDiv, PostBoxMainDiv, PostBoxTitleDiv, PostBoxUpvoteDiv, PostBoxUserNameDiv } from './styled'
import { useNavigate } from 'react-router-dom';
import {goToPost} from '../../services/Routes/coordinates';

function PostBox(props) {
    //receive props post
    // id, body, commentCount, createdAt, title, userId, userVote, username, voteSum
    const [upvoted, setUpvoted] = useState(false); 
    const [downvoted, setDownvoted] = useState(false); 

    const navigate = useNavigate(); 

    useEffect(() => {
      
    
     
    }, [upvoted,downvoted])
    
  

  return (
    <PostBoxMainDiv>
        <PostBoxUserNameDiv>
            <p>{`Enviado por: ${props.post.username}`}</p>
        </PostBoxUserNameDiv>
        
        <PostBoxTitleDiv onClick={()=> {goToPost(navigate, props.post.id)}}>
            <h2>{props.post.title}</h2>
        </PostBoxTitleDiv>

        <PostBoxInteractionDiv>
            <PostBoxUpvoteDiv>
                {upvoted ? <img alt="green upvote icon" src={greenUpvote} id="upvoteIcon" onClick={()=> {setUpvoted(!upvoted)}}/>
                :<img alt="upvote icon" src={upvoteIcon} id="upvoteIcon" onClick={()=> {setUpvoted(!upvoted)}}/> }

            <p> {` ${props.post.voteSum === null ? 0: (Number(props.post.voteSum) + ( (downvoted*-1) + (upvoted))) }`}</p>  

            {downvoted? <img alt=" reddownvote icon" src={redDownvote} id="downvoteIcon" onClick={()=> {setDownvoted(!downvoted)}}/> : 
            <img alt="downvote icon" src={downvoteIcon} id="downvoteIcon" onClick={()=> {setDownvoted(!downvoted)}}/>}

            </PostBoxUpvoteDiv>
            
           <PostBoxCommentDiv>
           <img alt=" comment icon" src={commentIcon} />
           <p> {` ${props.post.commentCount === null ? 0: props.post.commentCount}`}</p>
           </PostBoxCommentDiv>
        </PostBoxInteractionDiv>




    </PostBoxMainDiv>
  )
}

export default PostBox
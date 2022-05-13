import React, { useState, useEffect, useContext } from 'react';
import upvoteIcon from '../../assets/upvote.svg';
import greenUpvote from '../../assets/greenUpvote.svg'
import downvoteIcon from '../../assets/downvote.svg';
import redDownvote from '../../assets/redDownvote.svg';
import {  CommentInteractionDiv, CommentMainDiv, CommentBodyDiv, CommentUpvoteDiv, CommentUserNameDiv } from './styled'
import { useNavigate } from 'react-router-dom';
import { CreatePostVote, ChangePostVote, DeletePostVote } from '../../services/requests';
import {GlobalContext} from '../../contexts/GlobalContext/GlobalContext';


function CommentBox(props) {
   //receive props comment
    // id, body, commentCount, createdAt, title, userId, userVote, username, voteSum
    const [upvoted, setUpvoted] = useState(false); 
    const [downvoted, setDownvoted] = useState(false); 
    const {states, setters} = useContext(GlobalContext); 
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
            let answer = CreatePostVote(`comments/${props.comment.id}/votes`,body, token);
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
            let answer = ChangePostVote(`comments/${props.comment.id}/votes`,body, token);
            answer.then( (response) => {
                setUpvoted(true); 
                setDownvoted(false); 
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            // setUpvoted to true, downvoted to false
        } 

        //else we are already upvoted, we are going to remove the upvote
        else {
            //request (DELETE) post vote
          
            let answer = DeletePostVote(`comments/${props.comment.id}/votes`, token);
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
            let answer = CreatePostVote(`comments/${props.comment.id}/votes`,body, token);
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
            let answer = ChangePostVote(`comments/${props.comment.id}/votes`,body, token);
            answer.then( (response) => {
                setUpvoted(false); 
                setDownvoted(true); 
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            // setUpvoted to true, downvoted to false
        } 

        //else we are already downvoted, we are going to remove the downvote
        else {
            //request (DELETE) post vote
            
            let answer = DeletePostVote(`comments/${props.comment.id}/votes`, token);
            answer.then( (response) => {
                setDownvoted(false);  
            }).catch( (error) => alert("Erro ao dar upvote no post!"))
            //set Downvoted to false
        }
    }
    
  return (
    <CommentMainDiv>
        <CommentUserNameDiv>
            <p>{`Enviado por: ${props.comment.username}`}</p>
        </CommentUserNameDiv>

        <CommentBodyDiv>
            <p>{props.comment.body}</p>
        </CommentBodyDiv>
        

        <CommentInteractionDiv>

            <CommentUpvoteDiv>
                {upvoted ? <img alt="green upvote icon" src={greenUpvote} id="upvoteIcon" onClick={()=> {handleUpvote()}}/>
                :<img alt="upvote icon" src={upvoteIcon} id="upvoteIcon" onClick={()=> {handleUpvote()}}/> }

            <p> {` ${props.comment.voteSum === null ? 0 : (Number(props.comment.voteSum)) }`}</p>  

            {downvoted? <img alt=" reddownvote icon" src={redDownvote} id="downvoteIcon" onClick={()=> {handleDownvote()}}/> : 
            <img alt="downvote icon" src={downvoteIcon} id="downvoteIcon" onClick={()=> {handleDownvote()}}/>}

            </CommentUpvoteDiv>
            
         
        </CommentInteractionDiv>




    </CommentMainDiv>
  )
}

export default CommentBox
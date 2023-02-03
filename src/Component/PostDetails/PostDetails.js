import './PostDetails.css'
import {useContext} from "react";
import {PostIdContext} from "../../Context/PostIdContext";

const PostDetails = (props) => {

    const postDetailState = useContext(PostIdContext);

    console.log(postDetailState.postDetailState.id);

    return (<div>
            <label>Id: {postDetailState.postDetailState.id}</label>
            <h2> test</h2>
            <p> {postDetailState.postDetailState.content}</p>
            <label>By: {postDetailState.postDetailState.author}</label><br/>
            <input type='button' value='Delete' onClick={() => props.delete(postDetailState.postDetailState.id)}/>
        </div>);

}
export default PostDetails;
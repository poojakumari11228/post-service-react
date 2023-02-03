import './Post.css'
import PostDetails from "./PostDetails/PostDetails";
import {useState} from "react";
// import axios from "axios";
import {PostIdContext} from "../Context/PostIdContext";
import axios from "axios";

const Post = (props) => {

    const [postDetailState, setPostDetailState] = useState([]);
    const fetchById = () => {

        axios.get('http://localhost:8081/api/v1/posts/' + props.id)
            .then(respose => {
                setPostDetailState(respose.data)
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <PostIdContext.Provider value={{postDetailState, setPostDetailState}}>
            <div>
                <label>ID: {props.id}</label><br/>
                <label>TITLE: {props.title}</label><br/>
                <label>AUTHOR: {props.author}</label><br/>
                <input type='button' value='Show Details' onClick={fetchById}/>
            </div>

            {Object.entries(postDetailState).length !== 0 ? (

                    <div className="post-details"><h1>Details</h1>
                        <PostDetails

                            delete={props.delete}

                        />
                    </div>)
                : null}
        </PostIdContext.Provider>

    );
}

export default Post;


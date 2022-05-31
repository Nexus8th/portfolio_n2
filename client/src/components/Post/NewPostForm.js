import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../actions/post.actions";
import { isEmpty } from "../Context/Utils";

const NewPostForm = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const userData = useSelector((state) => state.userReducer)

    const handlePost = async () => {
        if (message) {
            const data = new FormData()
            data.append('posterId', userData._id)
            data.append('message', message)

            await 
            dispatch(addPost(data))
            dispatch(getPosts())
            cancelPost()
        } else {
            alert("Post form is empty !")
        }
    }

    const cancelPost = () => {
        setMessage('')
    }

    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false)
    }, [userData])

    return (
        <div className="post-container">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <div className="post-form">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="ADD AN ARTICLE"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>

                    <div className="btn-send">
                        <button className="send" onClick={handlePost}>SEND</button>
                        {message ? (
                            <button className="cancel" onClick={cancelPost}>CANCEL</button>
                        ) : null}
                    </div>
                </>
            )}
        </div>
    )
}

export default NewPostForm;
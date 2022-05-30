import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Context/Utils";

const NewPostForm = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState("")
    const [postPicture, setPostPicture] = useState(null)
    const [url, setUrl] = useState("")

    const userData = useSelector((state) => state.userReducer)

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
                            placeholder="Ajouter un article"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default NewPostForm;
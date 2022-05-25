import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Context/Utils";

const Card = ({ post }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [isUpdated, setIsUpdated] = useState(false)
    const [textUpdate, setTextUpdate] = useState(null)
    const userData = useSelector((state) => state.usersReducer)

    const updateItem = async () => {
        
        
    }

    useEffect(() => {
        !isEmpty(userData[0]) && setIsLoading(false)
    }, [userData])

    return (
        <li className="card-li-container" key={post.id}>
            {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
            ) : (
                <>
                    {isUpdated === false && <p className="card-post-guest">{post.message}</p>}
                    {isUpdated && (
                        <div className="card-post-container">
                            <textarea
                            className="card-post-message"
                            defaultValue={post.message}
                            onChange={(e) => setTextUpdate(e.target.value)}
                            />
                            <div>
                                <button onClick={updateItem}>EDIT</button>
                            </div>
                        </div>
                    )}
                    {userData._id === post.posterId && (
                        <div>
                            <button onClick={() => setIsUpdated(!isUpdated)}>UPDATE</button>
                        </div>
                    )}
                </>
            )}
        </li>
    );
};

export default Card;
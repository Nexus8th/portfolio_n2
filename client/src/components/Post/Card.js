import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Context/Utils";

const Card = ({ post }) => {

    const [isLoading, setIsLoading] = useState(true)
    const userData = useSelector((state) => state.usersReducer)

    useEffect(() => {
        !isEmpty(userData[0]) && setIsLoading(false)
    }, [userData])

    return (
        <li className="card-li-container" key={post.id}>
            {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
            ) : (
                <h2>test</h2>
            )}
        </li>
    );
};

export default Card;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/post.actions";
import { isEmpty } from "../Context/Utils";
import "./card.scss";
import DeleteCard from "./DeleteCard";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch()

  const updateItem = async () => {
      if (textUpdate) {
        dispatch(updatePost(post._id, textUpdate))
      }
      setIsUpdated(false)
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-li-container" key={post.id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          {isUpdated === false && (
            <p className="card-post-guest">{post.message}</p>
          )}

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
              <DeleteCard id={post._id}/>
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default Card;
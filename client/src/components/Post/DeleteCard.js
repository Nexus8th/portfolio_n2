import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = (props) => {
    const dispatch = useDispatch()

    const deleteQuote = () =>{
        dispatch(deletePost(props.id))
    }

    return (
        <button onClick={() => {
            if (window.confirm('Are you sure you want to delete this post ?')) {
                deleteQuote()
            }
        }}>DELETE</button>
    );
};

export default DeleteCard;
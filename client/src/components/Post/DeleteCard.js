import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";
import './deletecard.scss';

const DeleteCard = (props) => {
    const dispatch = useDispatch()

    const deleteQuote = () =>{
        dispatch(deletePost(props.id))
    }

    return (
        <button className="deletecard-btn" onClick={() => {
            if (window.confirm('Are you sure you want to delete this post ?')) {
                deleteQuote()
            }
        }}>DELETE</button>
    );
};

export default DeleteCard;
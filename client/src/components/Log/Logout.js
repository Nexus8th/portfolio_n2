import axios from 'axios'
import cookie from "js-cookie"
import './logout.scss'

const Logout = () => {

    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, {expires: 1})
        }
    }

    const logout = async () => {
        await axios({
            method:"get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true
        })
        .then(() => removeCookie('jwt'))
        .catch((err) => console.log(err))

        window.location = "/"
    }
    return (
        <li className="logout-li" onClick={logout}>LOGOUT</li>
    );
};

export default Logout;
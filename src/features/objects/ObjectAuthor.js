import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const ObjectAuthor = ({ explorer }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.explorer === explorer)

    return <span>by {author ? author.explorer : 'Unknown author'}</span>
}

export default ObjectAuthor
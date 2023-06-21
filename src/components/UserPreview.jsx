import { UserDetails } from "./UserDetails";
import { UserPosts } from "./UserPosts";

export const UserPreview = ({ userId = 1 }) => {
    return (
        <div style={{ display: 'flex', minWidth: '400px', justifyContent: "space-between" }} >
            <UserDetails userId={userId} />
            <UserPosts userId={userId} />
        </div>
    )
}

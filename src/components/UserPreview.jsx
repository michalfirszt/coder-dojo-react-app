import { useTheme } from "../providers/ThemeProvider";
import { UserDetails } from "./UserDetails";
import { UserPosts } from "./UserPosts";

export const UserPreview = ({ userId = 1 }) => {
    const { toggleTheme, isLightTheme } = useTheme()

    return (
        <div>
            <div>
                <button onClick={toggleTheme}>Switch to { isLightTheme ? 'dark' : 'light'} theme</button>
            </div>
            <div style={{ display: 'flex', minWidth: '400px', justifyContent: "space-between" }} >
                <UserDetails userId={userId} />
                <UserPosts userId={userId} />
            </div>
        </div>
    )
}

import { useFetchData } from "../hooks/useFetchData"
import { useTheme } from "../providers/ThemeProvider"

export const UserPosts = ({ userId }) => {
    const { theme: { palette } } = useTheme()

    const {
        data: posts,
        isLoading,
        errorMessage,
        loadData
    } = useFetchData({
        url: `${import.meta.env.VITE_API_URL}/posts?userId=${userId}`,
        initialFetch: false
    })

    if (errorMessage) {
        return (
            <div style={{ color: 'red' }}>
                {errorMessage}
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: palette.background, color: palette.textColor }} >
            <div>
                <button onClick={loadData}>
                    Load data
                </button>
            </div>
            {isLoading ? 'Loading...' : (
                <ul>
                    {posts.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
import { useFetchData } from "../hooks/useFetchData";

export const UserDetails = ({ userId }) => {
    const { data: user, isLoading, errorMessage } = useFetchData({
        url: `${import.meta.env.VITE_API_URL}/users/${userId}`
    })

    if (isLoading) {
        return 'Loading...'
    }

    if (errorMessage) {
        return (
            <div style={{ color: 'red' }}>
                {errorMessage}
            </div>
        )
    }

    return (
        <div>
            <ul>
                <li>{user?.id}</li>
                <li>{user?.name}</li>
                <li>{user?.username}</li>
                <li>{user?.name}</li>
            </ul>
        </div>
    )
}

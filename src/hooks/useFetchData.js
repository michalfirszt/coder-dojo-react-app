import { useCallback, useEffect, useState } from "react"

export const useFetchData = ({ url, initialFetch = true }) => {
    const [data, setData] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const isLoading = data === null

    const loadData = useCallback(async () => {
        const response = await fetch(url)

        if (response?.status === 404) {
            setErrorMessage('Data not found :(')
        }

        const responseData = await response.json()
        setData(responseData)
    }, [url])

    useEffect(() => {
        if (initialFetch) {
            loadData()
        }
    }, [loadData])

    return {
        data,
        isLoading,
        errorMessage,
        loadData
    }
}

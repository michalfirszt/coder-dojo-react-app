import { createContext, useCallback, useContext, useEffect, useState } from "react"

const commonColors = {
    error: '#eb3d3d',
    success: '#4edb23'
}

const lightTheme = {
    primary: '#e6cc91',
    secondary: '#d9d9d9',
    background: '#ededed',
    textColor: '#242424',
    ...commonColors
}

const darkTheme = {
    primary: '#4d2ba1',
    secondary: '#dbcc46',
    background: '#2b2b2b',
    textColor: '#e8e8e8',
    ...commonColors
}

export const ThemeContext = createContext(null)

export const useTheme = () => {
    const contextData = useContext(ThemeContext)

    return contextData
}

export const ThemeProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true)

    const palette = isLightTheme ? lightTheme : darkTheme

    const toggleTheme = useCallback(() => {
        const stateNewValue = !isLightTheme

        setIsLightTheme(stateNewValue)
        localStorage.setItem('isLightTheme', stateNewValue)
    }, [isLightTheme])

    useEffect(() => {
        const lightThemeValue = localStorage.getItem('isLightTheme') !== 'false'

        setIsLightTheme(lightThemeValue)
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme: { palette },
            isLightTheme,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

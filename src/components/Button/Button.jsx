import classNames from "classnames";
import styled from 'styled-components';
import { createUseStyles } from "react-jss";

import styles from "./Button.module.css";

const StyledButton = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
`

const useStyles = () => {
    return createUseStyles({
        btn: {
            borderRadius: 8,
            border: '1px solid transparent',
            padding: '0.6em 1.2em',
            fontSize: '1em',
            fontWeight: 500,
            fontFamily: 'inherit',
            backgroundColor: '#1a1a1a',
            cursor: 'pointer',
            transition: 'border-color 0.25s',
        }
    })()
}

export const ModuleCssButton = ({ children, className, ...props }) => {
    return (
        // className={[styles.btn, className].filter((classElement) => !!classElement).join(' ')}
        <button {...props} className={classNames(styles.btn, className)}>
            {children}
        </button>
    )
}

export const StyledComponentsButton = ({ children, className, ...props }) => {
    return (
        <StyledButton {...props} className={classNames(styles.btn, className)}>
            {children}
        </StyledButton>
    )
}

export const Button = ({ children, className, ...props }) => {
    const classes = useStyles()

    return (
        <button {...props} className={classNames(classes.btn, className)}>
            {children}
        </button>
    )
}

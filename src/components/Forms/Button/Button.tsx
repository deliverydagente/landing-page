import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./Button.module.scss";
import { ButtonContainer } from "./styles";

type ButtonProps = {
    label?: string;
    onClick?: () => void;
    isLoading?: boolean;
};

const Button = ({ label, onClick, isLoading }: ButtonProps): JSX.Element => {
    return (
        <ButtonContainer>
            <button
                type="button"
                className={styles.BoxButtonDefault}
                onClick={onClick}
            >
                {isLoading ? (
                    <>
                        <CircularProgress size={20} color="info" />
                    </>
                ) : (
                    <>{label ?? "Button"}</>
                )}
            </button>
        </ButtonContainer>
    );
};

export default Button;

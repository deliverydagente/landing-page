import ReactLoading from "react-loading";

import styles from "./Button.module.scss";

type ButtonProps = {
    label?: string;
    onClick?: () => void;
    isLoading?: boolean;
};

const Button = ({ label, onClick, isLoading }: ButtonProps) => {
    return (
        <button
            type="button"
            className={styles.BoxButtonDefault}
            onClick={onClick}
        >
            {isLoading ? (
                <ReactLoading className={styles.Loading} type="spin" />
            ) : (
                <>{label ?? "Button"}</>
            )}
        </button>
    );
};

export default Button;

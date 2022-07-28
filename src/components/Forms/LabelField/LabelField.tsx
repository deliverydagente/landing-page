import { ReactChild } from "react";

import styles from "./LabelField.module.scss";

type LabelFieldProps = {
    value?: string;
    children?: ReactChild;

    classNames?: string;
};

const LabelField = ({ value, children, classNames }: LabelFieldProps) => {
    return (
        <div className={[styles.BoxLabelField, classNames].join(" ")}>
            {value ?? children}
        </div>
    );
};

export default LabelField;

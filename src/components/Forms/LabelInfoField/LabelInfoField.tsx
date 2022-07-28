import { ReactChild } from "react";

import styles from "./LabelInfoField.module.scss";

type LabelInfoFieldProps = {
    children: ReactChild;
    classNames?: string;
};

const LabelInfoField = ({ children, classNames }: LabelInfoFieldProps) => {
    return (
        <div className={[styles.BoxLabelInfoField, classNames].join(" ")}>
            {children}
        </div>
    );
};

export default LabelInfoField;

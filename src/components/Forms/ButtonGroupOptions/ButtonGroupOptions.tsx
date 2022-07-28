import { useState } from "react";
import styles from "./ButtonGroupOptions.module.scss";

export type ButtonGroupOptionsItemProps = {
    label: string;
};

type ButtonGroupOptionsProps = {
    options?: ButtonGroupOptionsItemProps[];

    selectedIndex?: number;
    onChangeIndex?: (value: number) => void;
};

const ButtonGroupOptions = ({
    options,
    onChangeIndex,
}: ButtonGroupOptionsProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleOnChangeIndex = (indexed: number) => {
        onChangeIndex && onChangeIndex(indexed);
        setSelectedIndex(indexed);
    };

    return (
        <div className={styles.BoxButtonGroupOptions}>
            {options &&
                options?.map((button, _index) => {
                    return (
                        <div
                            key={_index}
                            onClick={() => handleOnChangeIndex(_index)}
                            aria-hidden
                            className={[
                                styles.ButtonGroupeItem,
                                _index === selectedIndex
                                    ? styles.Selected
                                    : null,
                            ].join(" ")}
                        >
                            {button.label}
                        </div>
                    );
                })}
        </div>
    );
};

export default ButtonGroupOptions;

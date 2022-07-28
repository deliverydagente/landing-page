import { useState } from "react";
import IconSVG from "../../IconSVG";
import { IconSVGNameProps } from "../../IconSVG/IconSVG";
import styles from "./InputTextField.module.scss";

type InputFieldProps = {
    value?: string;
    onChangeValue?: (value: string) => void;

    placeholder?: string;

    classNames?: string;
    icon?: IconSVGNameProps;
    password?: boolean;
};

const InputTextField = ({
    icon,
    value,
    onChangeValue,
    placeholder,
    classNames,
    password,
}: InputFieldProps) => {
    const [localState, setLocalState] = useState<string>("");

    const handleOnChangeValue = (eventValue: string) => {
        onChangeValue && onChangeValue(eventValue);
        setLocalState(eventValue);
    };

    return (
        <div className={[styles.BoxInputField, classNames].join(" ")}>
            {icon ? <IconSVG name={icon} /> : null}
            <input
                type={password ? "password" : "text"}
                placeholder={placeholder ?? ""}
                value={value ?? localState}
                onChange={(event) => handleOnChangeValue(event.target.value)}
            />
        </div>
    );
};

export default InputTextField;

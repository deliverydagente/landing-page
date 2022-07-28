import { useHistory } from "react-router-dom";
import IconSVG from "../IconSVG";
import { IconSVGNameProps } from "../IconSVG/IconSVG";
import styles from "./FooterItem.module.scss";

export type FooterItemProps = {
    label?: string;
    iconLeft?: IconSVGNameProps;
    toUrl?: string;
    space?: boolean;
};

const FooterItem = ({ iconLeft, label, toUrl, space }: FooterItemProps) => {
    const history = useHistory();

    const handleClick = (url: string | undefined) => {
        if (url && url.startsWith("https")) {
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) newWindow.opener = null;
            return null;
        }
        if (url) history.push(`${url}`);
    };

    return (
        <div
            aria-hidden
            className={[
                styles.BoxItemFooter,
                space === true ? styles.Space : undefined,
            ].join(" ")}
            onClick={() => handleClick(toUrl)}
        >
            <div className={styles.BoxLefted}>
                <div className={styles.BoxIcon}>
                    <IconSVG name={iconLeft} />
                </div>
                <div className={styles.Label}>{label ?? "Label"}</div>
            </div>
            <div className={styles.BoxIconGo}>
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </div>
    );
};

export default FooterItem;

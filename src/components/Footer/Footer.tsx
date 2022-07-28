import { FooterItem, FooterItemProps } from "../FooterItem";

import styles from "./Footer.module.scss";

type FooterProps = {
    data: Array<FooterItemProps>;
    disabledSignature?: boolean;

    disabledColor?: boolean;
};

const Footer = ({ data, disabledSignature, disabledColor }: FooterProps) => {
    return (
        <div className={styles.BoxFooter}>
            {disabledColor === true ? null : (
                <div className={styles.BoxSubFooter}>&nbsp;</div>
            )}
            <div className={styles.BoxResponsive}>
                {disabledColor === true ? null : (
                    <>
                        {data.map((footerItem, _index) => {
                            return (
                                <FooterItem
                                    key={_index}
                                    iconLeft={footerItem.iconLeft}
                                    label={footerItem.label}
                                    toUrl={footerItem.toUrl}
                                    space={footerItem.space}
                                />
                            );
                        })}
                    </>
                )}
                {!disabledSignature ? (
                    <div className={styles.BoxSignature}>
                        &copy; Delivery Dagente 2022.{" "}
                        {disabledColor === true ? <br /> : null} Todos os
                        direitos reservados.
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Footer;

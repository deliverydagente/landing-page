import { useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconDD from "../IconDD";

import DeliverySvg from "../../assets/images/delivery.svg";

import styles from "./HeaderLanding.module.scss";

type HeaderLandingProps = {
    refPlaces?: any;
};

const HeaderLanding = ({ refPlaces }: HeaderLandingProps) => {
    const history = useHistory();

    const isNotMobile = useMediaQuery("(min-width:840px)");
    const isNotMobile2 = useMediaQuery("(min-width:350px)");

    const handleOnClick = () => {
        const newWindow = window.open(
            "https://app.deliverydagente.com/",
            "_blank",
            "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
    };

    const handleGoToPlaces = () => {
        if (refPlaces) refPlaces.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className={styles.BoxHeaderLanding}>
            <div className={styles.BoxResponsive}>
                <section className={styles.BoxLeftHeaderLanding}>
                    <div
                        className={styles.BoxButtonLogo}
                        onClick={() => history.push("/")}
                        aria-hidden
                    >
                        {isNotMobile ? (
                            <div className={styles.BoxIcon}>
                                <img src={DeliverySvg} alt="Logo" />
                            </div>
                        ) : (
                            <div className={styles.BoxIcon}>
                                <IconDD color="#e01f40" />
                            </div>
                        )}
                        {isNotMobile2 ? (
                            <div className={styles.BoxText}>
                                Delivery Dagente
                            </div>
                        ) : null}
                    </div>
                </section>
                {isNotMobile ? (
                    <section className={styles.BoxRightHeaderLanding}>
                        {refPlaces ? (
                            <div
                                className={[styles.ButtonRegular].join(" ")}
                                aria-hidden
                                onClick={handleGoToPlaces}
                            >
                                Estabelecimentos
                            </div>
                        ) : null}
                        <div
                            onClick={handleOnClick}
                            className={[
                                styles.ButtonRegular,
                                styles.Active,
                            ].join(" ")}
                            aria-hidden
                        >
                            Ir para o App
                        </div>
                    </section>
                ) : (
                    <div
                        onClick={handleOnClick}
                        className={[styles.ButtonRegular, styles.Active].join(
                            " "
                        )}
                        aria-hidden
                    >
                        Ir para o App
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderLanding;

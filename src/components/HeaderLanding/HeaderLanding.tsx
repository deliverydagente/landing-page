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
              <div className={styles.BoxText}>Delivery Dagente</div>
            ) : null}
          </div>
        </section>
        <section className={styles.BoxRightHeaderLanding}></section>
      </div>
    </header>
  );
};

export default HeaderLanding;

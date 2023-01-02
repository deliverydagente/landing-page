import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Footer, DataFooterV1 } from "../../components/Footer";
import HeaderLanding from "../../components/HeaderLanding";
import styles from "./LandingPageIndex.module.scss";

const LandingPage = () => {
    const history = useHistory();

    const refPlaces = useRef(null);
    const refTitle = useRef(null);

    useEffect(() => {
        // @ts-ignore
        refTitle.current.scrollIntoView({
            behavior: "smooth",
        });
    }, []);

    const handleOnClickPlaces = () => {
        history.push("/estabelecimentos");
    };

    return (
        <div className={styles.BoxLandingPage} ref={refTitle}>
            <HeaderLanding refPlaces={refPlaces} />
            <div className={styles.BoxLandingOne}>
                <div className={styles.BoxResponsive}>
                    <div className={styles.Leftbox}>
                        <div className={styles.BoxMiniTitle}>
                            O que é o Delivery Dagente
                        </div>
                        <div className={styles.BoxBigTitle}>
                            Somos um App de Entregas exclusivo em João Alfredo!
                        </div>
                        <div className={styles.BoxSubitle}>
                            Conectamos você ao comércio local, oferecendo os
                            melhores recursos da tecnologia.
                            {/* Faça o Pré Registro
                            e garanta 10 entregas grátis! */}
                        </div>
                        {/* <div
                            className={styles.BoxButonIcon}
                            onClick={handleOnClick}
                            aria-hidden
                        >
                            <div className={styles.BoxLabel}>Pré Registro</div>
                            <div className={styles.BoxIcon}>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    version="1.1"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z" />
                                </svg>
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.Rightbox} />
                </div>
            </div>
            <div className={styles.BoxEstabelecimentos} ref={refPlaces}>
                <div className={styles.BoxResponsive}>
                    <div className={styles.BoxTitle}>Estabelecimentos</div>
                    <div className={styles.BoxBigTitle}>
                        Quer ter seu estabelecimento no nosso App?
                    </div>
                    <div className={styles.BoxSubTitle}>
                        Estamos analisando todos os perfis para liberação das
                        vendas no App. Entre em contato, e assim que possível te
                        damos uma resposta!
                    </div>
                    <div
                        className={styles.BoxButonIcon}
                        onClick={handleOnClickPlaces}
                        aria-hidden
                    >
                        <div className={styles.BoxLabel}>Estabelecimentos</div>
                        <div className={styles.BoxIcon}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                version="1.1"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer data={DataFooterV1} />
        </div>
    );
};

export default LandingPage;

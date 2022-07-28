import React, { useEffect, useRef, useState } from "react";
import * as QueryString from "query-string";

import Loading from "react-loading";
import { useHistory } from "react-router-dom";
import Button from "../../components/Forms/Button";
import HeaderLanding from "../../components/HeaderLanding";

import ImageSuccessEmailConfirm from "../../assets/images/success_email_confirm.svg";

import styles from "./styles.module.scss";
import handleConfirmEmail from "./utils/handleConfirmEmail";

const EstabelecimentosConfirmacao = () => {
    const history = useHistory();
    const refTitle = useRef(null);
    const refPlaces = useRef(null);

    const [hasCode, setHasCode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { query } = QueryString.parseUrl(window.location.href);
        if (query.code && query.code.length >= 10) {
            handleConfirmEmail({
                code: `${query.code}`,
                setHasCode,
                setIsLoading,
            });
        } else {
            setIsLoading(true);
        }
    }, []);

    return (
        <div className={styles.BoxEstabelecimentos} ref={refTitle}>
            <HeaderLanding refPlaces={refPlaces} />
            <div className={styles.BoxLandingOne}>
                {hasCode && !isLoading ? (
                    <>
                        <img
                            src={ImageSuccessEmailConfirm}
                            alt="Succed Confirm"
                        />
                        <h1>E-mail confirmado!</h1>
                        <h3>
                            Pronto, agora vamos analisar as informações e em
                            breve te daremos uma resposta.
                        </h3>

                        <Button
                            label="Voltar"
                            onClick={() => history.push("/")}
                        />
                    </>
                ) : (
                    <div style={{ marginTop: 140 }}>
                        <Loading color="#e01f40" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EstabelecimentosConfirmacao;

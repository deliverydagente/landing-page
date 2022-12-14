import { useEffect, useRef } from "react";

import useSetState from "../../hooks/useSetState";

import { ButtonGroupOptionsItemProps } from "../../components/Forms/ButtonGroupOptions/ButtonGroupOptions";

import LabelField from "../../components/Forms/LabelField";
import Button from "../../components/Forms/Button";
import LabelInfoField from "../../components/Forms/LabelInfoField";
import InputTextField from "../../components/Forms/InputTextField";
import ButtonGroupOptions from "../../components/Forms/ButtonGroupOptions";
import { Footer, DataFooterV1 } from "../../components/Footer";
import HeaderLanding from "../../components/HeaderLanding";

import SuccessEmalSend from "../../assets/images/success_email.svg";

import styles from "./Estabelecimentos.module.scss";
import handleSubmitPlace from "./utils/handleSubmitPlace";

export type placeStateProps = {
    email?: string;
    name?: string;
    instagram?: string;
    productQty?: number;
    hasDeliveryman?: number;
    physicalSpace?: number;
};

type auxDataProps = {
    isLoadingButton?: boolean;
    isErrorRequest?: boolean;
    isSuccedRequest?: boolean;
    isErrorRequestMessage?: string;
};

const Estabelecimentos = () => {
    const refPlaces = useRef(null);
    const refTitle = useRef(null);

    const [placeState, setPlaceState] = useSetState<placeStateProps>({
        email: "",
        name: "",
        instagram: "",
    });

    const [auxData, setAuxData] = useSetState<auxDataProps>({
        isLoadingButton: false,
        isErrorRequest: false,
        isErrorRequestMessage: "",
        isSuccedRequest: false,
    });

    useEffect(() => {
        console.log({
            placeState,
        });
    }, [placeState]);

    useEffect(() => {
        // @ts-ignore
        refTitle.current.scrollIntoView({
            behavior: "smooth",
        });
    }, []);

    const itemButtonsQtyProducts: ButtonGroupOptionsItemProps[] = [
        {
            label: "1 - 20",
        },
        {
            label: "20 - 50",
        },
        {
            label: "+50",
        },
    ];

    const itemButtonsHasDelivery: ButtonGroupOptionsItemProps[] = [
        {
            label: "Sim",
        },
        {
            label: "N??o",
        },
    ];

    const handleApply = async () => {
        setAuxData({
            isLoadingButton: true,
        });
        const handleApplyed = await handleSubmitPlace({
            state: placeState,
        });
        // Se der Error, mostra mensagem.
        if (handleApplyed.error) {
            setAuxData({
                isErrorRequest: true,
                isErrorRequestMessage: handleApplyed.errorMessage,
            });
            setTimeout(() => {
                setAuxData({
                    isLoadingButton: false,
                });
            }, 2000);

            return null;
        }
        // Se passar tudo, mostra tela de sucesso.
        setAuxData({
            isSuccedRequest: true,
        });
    };

    return (
        <div className={styles.BoxEstabelecimentos} ref={refTitle}>
            <HeaderLanding refPlaces={refPlaces} />
            <div className={styles.BoxLandingOne}>
                <div className={styles.BoxResponsive}>
                    {auxData.isSuccedRequest === true ? (
                        <div className={styles.BoxSuccedToConfirm}>
                            <img src={SuccessEmalSend} alt="message" />
                            <h1>Exelente!</h1>
                            <h3>
                                Enviamos um <b>E-mail</b> para{" "}
                                <b>{placeState.email}</b>, siga as instru????es
                                para finalizar o processo.{" "}
                            </h3>
                        </div>
                    ) : (
                        <>
                            <div className={styles.BoxTitle}>
                                Estabelecimentos
                            </div>
                            <div className={styles.BoxSubTitle}>
                                Estamos analisando todos os perfis para
                                libera????o das vendas no App. Entre em contato e
                                respondemos o mais r??pido poss??vel!
                            </div>
                            <div className={styles.BoxInput}>
                                <LabelField value="Nome do Estabelecimento *" />
                                <InputTextField
                                    icon="store"
                                    value={placeState.name}
                                    onChangeValue={(value) =>
                                        setPlaceState({ name: value })
                                    }
                                    placeholder="Pizzaria Fantasia"
                                />
                                <LabelField
                                    value="E-mail para contato *"
                                    classNames={styles.LabelHasDelivery}
                                />
                                <InputTextField
                                    icon="email"
                                    value={placeState.email}
                                    onChangeValue={(value) =>
                                        setPlaceState({ email: value })
                                    }
                                    placeholder="example@example.com"
                                />
                                <LabelInfoField
                                    classNames={styles.LabelInfoStoreName}
                                >
                                    N??o iremos compartilhar essa informa????o com
                                    mais ningu??m.
                                </LabelInfoField>
                                <LabelField
                                    value="Quantos produtos seu estabelecimento possui?"
                                    classNames={styles.LabelHasDelivery}
                                />
                                <ButtonGroupOptions
                                    onChangeIndex={(value) => {
                                        setPlaceState({
                                            productQty: value,
                                        });
                                    }}
                                    options={itemButtonsQtyProducts}
                                />
                                <LabelField
                                    value="O estabelecimento possui entregador pr??prio?"
                                    classNames={styles.LabelHasDelivery}
                                />
                                <ButtonGroupOptions
                                    onChangeIndex={(value) => {
                                        setPlaceState({
                                            hasDeliveryman: value,
                                        });
                                    }}
                                    options={itemButtonsHasDelivery}
                                />
                                <LabelField
                                    value="O estabelecimento possui espa??o f??sico?"
                                    classNames={styles.LabelHasDelivery}
                                />
                                <ButtonGroupOptions
                                    onChangeIndex={(value) => {
                                        setPlaceState({
                                            physicalSpace: value,
                                        });
                                    }}
                                    options={itemButtonsHasDelivery}
                                />
                                <LabelField
                                    value="O estabelecimento est?? no Instagram?"
                                    classNames={styles.LabelHasDelivery}
                                />
                                <InputTextField
                                    icon="insta"
                                    value={placeState.instagram}
                                    onChangeValue={(value) =>
                                        setPlaceState({ instagram: value })
                                    }
                                    classNames={styles.BoxInputFieldSpace}
                                    placeholder="@deliverydagente"
                                />
                                <br />
                                <LabelInfoField>
                                    <>
                                        Ao continuar voc?? est?? concordando com
                                        os{" "}
                                        <a href="/termos-de-uso">
                                            Termos de Uso
                                        </a>{" "}
                                        e nossa{" "}
                                        <a href="/politica-de-privacidade">
                                            Pol??tica de Privacidade
                                        </a>
                                    </>
                                </LabelInfoField>
                                <br />
                                <Button
                                    onClick={handleApply}
                                    label="Enviar Informa????es"
                                    isLoading={auxData.isLoadingButton}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
            {auxData.isSuccedRequest === true ? null : (
                <Footer data={DataFooterV1} disabledColor />
            )}
        </div>
    );
};

export default Estabelecimentos;

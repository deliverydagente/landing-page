import { useEffect, useRef } from "react";
import { Footer, DataFooterV1 } from "../../components/Footer";
import HeaderLanding from "../../components/HeaderLanding";
import styles from "./TermsOfUse.module.scss";

const TermsOfUse = () => {
    const refTitle = useRef(null);

    useEffect(() => {
        // @ts-ignore
        refTitle.current.scrollIntoView({
            behavior: "smooth",
        });
    }, []);

    return (
        <section className={styles.BoxPolicyAndTerms} ref={refTitle}>
            <HeaderLanding />
            <div className={styles.BoxLandingTitle}>
                <div className={styles.BoxResponsiveLabel}>
                    Termos e Condições
                </div>
            </div>
            <div className={styles.BoxContent}>
                <div className={styles.BoxSubTitle}>
                    Ao acessar ao site <b>deliverydagente.com</b>, concorda em
                    cumprir estes termos de serviço, todas as leis e
                    regulamentos aplicáveis e concorda que é responsável pelo
                    cumprimento de todas as leis locais aplicáveis.
                    <br />
                    <br />
                    Se você não concordar com algum desses termos, está proibido
                    de usar ou acessar este site.
                    <br />
                    <br />
                    <br />
                </div>
                <h2>1. Termos</h2>{" "}
                <p>
                    Ao acessar ao site{" "}
                    <a href="https://deliverydagente.com">Delivery Dagente</a>,
                    concorda em cumprir estes termos de serviço, todas as leis e
                    regulamentos aplicáveis e concorda que é responsável pelo
                    cumprimento de todas as leis locais aplicáveis. Se você não
                    concordar com algum desses termos, está proibido de usar ou
                    acessar este site. Os materiais contidos neste site são
                    protegidos pelas leis de direitos autorais e marcas
                    comerciais aplicáveis.
                </p>{" "}
                <h2>2. Uso de Licença</h2>{" "}
                <p>
                    É concedida permissão para baixar temporariamente uma cópia
                    dos materiais (informações ou software) no site Delivery
                    Dagente , apenas para visualização transitória pessoal e não
                    comercial. Esta é a concessão de uma licença, não uma
                    transferência de título e, sob esta licença, você não pode:{" "}
                </p>{" "}
                <ol>
                    {" "}
                    <li>modificar ou copiar os materiais; </li>{" "}
                    <li>
                        usar os materiais para qualquer finalidade comercial ou
                        para exibição pública (comercial ou não comercial);{" "}
                    </li>{" "}
                    <li>
                        tentar descompilar ou fazer engenharia reversa de
                        qualquer software contido no site Delivery Dagente;{" "}
                    </li>{" "}
                    <li>
                        remover quaisquer direitos autorais ou outras notações
                        de propriedade dos materiais; ou{" "}
                    </li>{" "}
                    <li>
                        transferir os materiais para outra pessoa ou 'espelhe'
                        os materiais em qualquer outro servidor.
                    </li>{" "}
                </ol>{" "}
                <p>
                    Esta licença será automaticamente rescindida se você violar
                    alguma dessas restrições e poderá ser rescindida por
                    Delivery Dagente a qualquer momento. Ao encerrar a
                    visualização desses materiais ou após o término desta
                    licença, você deve apagar todos os materiais baixados em sua
                    posse, seja em formato eletrónico ou impresso.
                </p>{" "}
                <h2>3. Isenção de responsabilidade</h2>{" "}
                <ol>
                    {" "}
                    <li>
                        Os materiais no site da Delivery Dagente são fornecidos
                        'como estão'. Delivery Dagente não oferece garantias,
                        expressas ou implícitas, e, por este meio, isenta e nega
                        todas as outras garantias, incluindo, sem limitação,
                        garantias implícitas ou condições de comercialização,
                        adequação a um fim específico ou não violação de
                        propriedade intelectual ou outra violação de direitos.{" "}
                    </li>{" "}
                    <li>
                        Além disso, o Delivery Dagente não garante ou faz
                        qualquer representação relativa à precisão, aos
                        resultados prováveis ou à confiabilidade do uso dos
                        materiais em seu site ou de outra forma relacionado a
                        esses materiais ou em sites vinculados a este site.
                    </li>{" "}
                </ol>{" "}
                <h2>4. Limitações</h2>{" "}
                <p>
                    Em nenhum caso o Delivery Dagente ou seus fornecedores serão
                    responsáveis por quaisquer danos (incluindo, sem limitação,
                    danos por perda de dados ou lucro ou devido a interrupção
                    dos negócios) decorrentes do uso ou da incapacidade de usar
                    os materiais em Delivery Dagente, mesmo que Delivery Dagente
                    ou um representante autorizado da Delivery Dagente tenha
                    sido notificado oralmente ou por escrito da possibilidade de
                    tais danos. Como algumas jurisdições não permitem limitações
                    em garantias implícitas, ou limitações de responsabilidade
                    por danos conseqüentes ou incidentais, essas limitações
                    podem não se aplicar a você.
                </p>{" "}
                <h2>5. Precisão dos materiais</h2>{" "}
                <p>
                    Os materiais exibidos no site da Delivery Dagente podem
                    incluir erros técnicos, tipográficos ou fotográficos.
                    Delivery Dagente não garante que qualquer material em seu
                    site seja preciso, completo ou atual. Delivery Dagente pode
                    fazer alterações nos materiais contidos em seu site a
                    qualquer momento, sem aviso prévio. No entanto, Delivery
                    Dagente não se compromete a atualizar os materiais.
                </p>{" "}
                <h2>6. Links</h2>{" "}
                <p>
                    O Delivery Dagente não analisou todos os sites vinculados ao
                    seu site e não é responsável pelo conteúdo de nenhum site
                    vinculado. A inclusão de qualquer link não implica endosso
                    por Delivery Dagente do site. O uso de qualquer site
                    vinculado é por conta e risco do usuário.
                </p>{" "}
                <h3>Modificações</h3>{" "}
                <p>
                    O Delivery Dagente pode revisar estes termos de serviço do
                    site a qualquer momento, sempre alertando todos os usuários
                    através do e-mail. Ao usar este site, você concorda em ficar
                    vinculado à versão atual desses termos de serviço.
                </p>{" "}
                <h3>Lei aplicável</h3>{" "}
                <p>
                    Estes termos e condições são regidos e interpretados de
                    acordo com as leis do Delivery Dagente e você se submete
                    irrevogavelmente à jurisdição exclusiva dos tribunais
                    naquele estado ou localidade.
                </p>
                <h3>Fale Conosco</h3>{" "}
                <p>
                    Para saber mais sobre nossas práticas de privacidade, caso
                    tenha dúvidas ou se quiser fazer uma reclamação, entre em
                    contato conosco por e-mail em geral@deliverydagente.com ou
                    pelo correio usando as informações abaixo:
                </p>
                <p>
                    Rua Serafim Paiva Lima 213, Gondomar, PT-13, 4510-435,
                    Portugal
                </p>
                <span>Última atualização: 27 de Janeiro de 2022</span>
            </div>
            <Footer data={DataFooterV1} />
        </section>
    );
};

export default TermsOfUse;

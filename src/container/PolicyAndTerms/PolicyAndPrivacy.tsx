import { useEffect, useRef } from "react";
import { Footer, DataFooterV1 } from "../../components/Footer";
import HeaderLanding from "../../components/HeaderLanding";
import styles from "./PolicyAndPrivacy.module.scss";

const PolicyAndPrivacy = () => {
    const refTitle = useRef(null);

    useEffect(() => {
        // @ts-ignore
        refTitle.current.scrollIntoView({
            behavior: "smooth",
        });
    }, []);

    return (
        <section className={styles.BoxPolicyAndPrivacy} ref={refTitle}>
            <HeaderLanding />
            <div className={styles.BoxLandingTitle}>
                <div className={styles.BoxResponsiveLabel}>
                    Política de Privacidade
                </div>
            </div>
            <div className={styles.BoxContent}>
                <div className={styles.BoxSubTitle}>
                    Esta Política de Privacidade descreve como suas informações
                    pessoais são coletadas, usadas e compartilhadas quando você
                    visita ou faz um pedido no <b>deliverydagente.com.br</b> ("o
                    Site").
                    <br />
                    <br />
                    <br />
                </div>
                <h3>Informações pessoais que coletamos.</h3>
                <p>
                    Quando você visita o Site, coletamos automaticamente
                    determinadas informações sobre o seu dispositivo, incluindo
                    informações sobre seu navegador da web, endereço IP e fuso
                    horário. Nós não utilizamos cookies por enquanto. Além
                    disso, à medida que você navega no Site, coletamos
                    informações sobre as páginas do Site ou produtos individuais
                    que você visualiza e informações sobre como você interage
                    com o Site. Referimo-nos a essa informação coletada
                    automaticamente como "Informações do dispositivo".
                </p>
                <h3>
                    Coletamos Informações do dispositivo usando as seguintes
                    tecnologias:
                </h3>
                <ol>
                    <li>Google Analytics</li> <li>Google Search Console</li>
                </ol>
                <br />
                <p>
                    Você pode ler mais sobre como o Google usa suas informações
                    pessoais aqui:
                    https://www.google.com/intl/pt-BR/policies/privacy/. Você
                    também pode desativar o Google Analytics aqui:
                    https://tools.google.com/dlpage/gaoptout.
                </p>
                <p>
                    Além disso, quando você faz o registro, faz um pedido ou
                    tenta fazer um pedido no Site, nós coletamos algumas
                    informações suas, incluindo seu nome, endereço de entrega,
                    informações de pagamento (incluindo números de cartão de
                    crédito), endereço de e-mail e número de telefone. Nós
                    chamamos essas informações de “Informações do pedido”.
                </p>
                <h2>Como usamos suas informações pessoais?</h2>
                <p>
                    Em geral, nós usamos as informações dos usuários para
                    processar quaisquer pedidos feitos por meio do Site
                    (incluindo o processamento das suas informações de pagamento
                    e o fornecimento de faturas e/ou confirmações de pedidos).
                </p>
                <p>Além disso, usamos essas Informações do pedido para:</p>
                <ol>
                    <li>Falar com você.</li>
                    <li>
                        Realizar análises quantitativas e qualitativas, seja de
                        endereços à restaurantes.
                    </li>
                    <li>Informar você de eventuais promoções do Site.</li>
                </ol>
                <p>
                    Nós usamos as Informações do dispositivo que coletamos para
                    nos ajudar a rastrear possíveis riscos e fraudes
                    (especificamente seu endereço IP) e, de forma mais geral,
                    para melhorar e otimizar sua experiência (por exemplo,
                    gerando análises sobre como nossos clientes navegam e
                    interagem com o Site.
                </p>
                <h2>Menores de Idade</h2>
                <p>O Site não é destinado para pessoas com menos de 18 anos.</p>
                <h2>Retenção de Dados</h2>
                <p>
                    Ao fazer um pedido no Site, nós manteremos suas informações
                    do pedido em nossos registros a menos e até que você nos
                    peça para excluir essas informações.
                </p>
                <h2>Como compartilhamos suas informações?</h2>
                <p>
                    Nós não compartilhamos seus dados pessoais com terceiros com
                    intuito de marketing ou qualquer estratégia parecida.
                    Eventuais alterações nesta política de privacidade podem
                    acontecer, mas antes você informado por E-mail, e terá
                    sempre a opção de discordar e cancelar qualquer subscrição.
                </p>
                <p>
                    Mas entenda, durante a realização de um pedido, apenas o
                    estabelecimento terá acesso às suas informações sensíveis
                    como Nome, Telefone, E-mail e Endereço. Após a finalização
                    de um pedido, essas informações não estão mais disponíveis
                    para o estabelecimento, apenas o método de pagamento
                    utilizado no pedido. Por exemplo, “pagamento em dinheiro” ou
                    “pagamento em cartão”.
                </p>
                <p>
                    Por fim, podemos também compartilhar suas informações
                    pessoais para cumprir com as leis e regulamentos cabíveis,
                    para responder a uma intimação, mandado de busca ou outra
                    solicitação legal de informações que recebermos, ou para
                    proteger nossos direitos.
                </p>
                <h3>Cobranças & Pagamentos</h3>
                <p>
                    Todos os nossos pagamentos são processados pelo PagSeguro
                    (PagBank).
                </p>
                <p>Os métodos que aceitamos são:</p>
                <ol>
                    <li>
                        Dinheiro. (Para pedidos que serão recolhidos no
                        Estabelecimento pelo Usuário)
                    </li>
                    <li>
                        PIX. (Para pedidos que serão entregues pelo
                        Estabelecimento)
                    </li>
                    <li>
                        Cartão de Crédito* (Para pedidos que serão entregues
                        pelo Estabelecimento ou recolhidos pelo cliente)
                    </li>
                </ol>
                <p>
                    * Os pedidos realizados e pagos com Cartão de Crédito,
                    inferiores à R$ 20,00 , possuirão uma Taxa Extra necessária
                    para cobrir os custos da transação.
                </p>
                <h3>Seus Direitos</h3>
                <p>
                    Você tem o direito de acessar as informações pessoais que
                    mantemos sobre você e de solicitar que suas informações
                    pessoais sejam corrigidas, atualizadas ou excluídas. Se você
                    quiser exercer esse direito, entre em contato conosco usando
                    as informações de contato abaixo.
                </p>
                <p>
                    Além disso, observe que estamos processando suas informações
                    para cumprir os contratos que podemos ter com você (por
                    exemplo, se você fizer um pedido pelo Site) ou para proteger
                    nossos interesses comerciais legítimos listados acima. Além
                    disso, observe que suas informações serão transferidas para
                    fora do Brasil, inclusive para o Canadá e os Estados Unidos.
                </p>
                <h3>Mudanças e Alterações</h3>
                <p>
                    Como já falado acima, nós podemos atualizar esta Política de
                    privacidade periodicamente para refletir, por exemplo,
                    mudanças em nossas práticas ou por outros motivos
                    operacionais, legais ou regulamentares.
                </p>
                <h3>Fale Conosco</h3>
                <p>
                    Para saber mais sobre nossas práticas de privacidade, caso
                    tenha dúvidas ou se quiser fazer uma reclamação, entre em
                    contato conosco por e-mail em geral@deliverydagente.com.br
                    ou pelo correio usando as informações abaixo:
                </p>
                {/* <p>
                    Rua Serafim Paiva Lima 213, Gondomar, PT-13, 4510-435,
                    Portugal
                </p> */}
                <span>Última atualização: 2 de Janeiro de 2023</span>
            </div>
            <Footer data={DataFooterV1} />
        </section>
    );
};

export default PolicyAndPrivacy;

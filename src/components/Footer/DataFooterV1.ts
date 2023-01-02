import { FooterItemProps } from "../FooterItem";

const DataFooterV1: FooterItemProps[] = [
    // {
    //     iconLeft: "login",
    //     label: "Pré Registro",
    //     toUrl: "https://app.deliverydagente.com",
    // },
    {
        iconLeft: "map",
        label: "Estabelecimentos",
        toUrl: "/estabelecimentos",
        space: true,
    },
    {
        iconLeft: "terms",
        label: "Termos de Uso",
        toUrl: "/termos-de-uso",
    },
    {
        iconLeft: "policy",
        label: "Política de Privacidade",
        toUrl: "/politica-de-privacidade",
    },
];

export default DataFooterV1;

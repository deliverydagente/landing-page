import instanceApi from "../../../services/api";
import { placeStateProps } from "../Estabelecimentos";

type handleSubmitPlaceProps = {
    state: placeStateProps;
};

export type handleSubmitPlaceReturn = {
    error: boolean;
};

const handleSubmitPlace = async ({ state }: handleSubmitPlaceProps) => {
    const formData = {
        name: state.name,
        email: state.email,
        productQty:
            state.productQty === 0
                ? "1 - 20"
                : state.productQty === 1
                ? "21 - 50"
                : "+ 50",
        hasDeliveryman: state.hasDeliveryman === 0,
        physicalSpace: state.physicalSpace === 0,
        instagram: state.instagram,
    };

    try {
        const postData = await instanceApi.post(
            "/api/v1/store-interested/register",
            formData
        );
        return {
            error: false,
            data: postData,
        };
    } catch (error) {
        return {
            error: true,
            // @ts-ignore
            errorMessage: error.response.data.errorStatus,
        };
    }
};

export default handleSubmitPlace;

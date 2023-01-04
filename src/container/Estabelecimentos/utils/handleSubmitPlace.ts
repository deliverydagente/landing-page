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
    data: {
      name: state.name,
      email: state.email,
      marketRegistration: {
        deliveryman: state.hasDeliveryman === 0,
        physicalPlace: state.physicalSpace === 0,
        products:
          state.productQty === 0
            ? "1 - 20"
            : state.productQty === 1
            ? "21 - 50"
            : "+ 50",
      },
      instagram: state.instagram,
    },
  };

  try {
    const postData = await instanceApi.post("/user/create", formData);
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

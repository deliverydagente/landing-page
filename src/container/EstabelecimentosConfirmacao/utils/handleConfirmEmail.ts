import { Dispatch, SetStateAction } from "react";

import instanceApi from "../../../services/api";

type handleConfirmEmailProps = {
    setHasCode: Dispatch<SetStateAction<boolean>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    code: string;
};

const handleConfirmEmail = async ({
    code,
    setHasCode,
    setIsLoading,
}: handleConfirmEmailProps) => {
    try {
        await instanceApi.post(
            "/api/v1/store-interested/register-confirmation",
            {
                code,
            }
        );

        setTimeout(() => {
            setHasCode(true);
            setIsLoading(false);
        }, 2000);
    } catch (error) {
        setHasCode(false);
        setIsLoading(true);
    }
};

export default handleConfirmEmail;

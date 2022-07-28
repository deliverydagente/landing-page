import { Dispatch, SetStateAction, useState } from "react";

function useSetState<T>(initialState: T): [T, Dispatch<SetStateAction<T>>] {
    const [state, regularSetState] = useState(initialState);

    // @ts-ignore
    const setState: Dispatch<SetStateAction<T>> = (newState: T) => {
        return regularSetState((prevState: T) => ({
            ...prevState,
            ...newState,
        }));
    };

    return [state, setState];
}

export default useSetState;

import{TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type{appStateType, appDispatch} from "./redux/redux-state"

export const useAppSelector: TypedUseSelectorHook<appStateType> = useSelector;
export const useAppDispatch = () => useDispatch<appDispatch>()
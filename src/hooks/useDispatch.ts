import { bindActionCreators } from "@reduxjs/toolkit"
import { allActions } from "../store/allActions/allActions"
import { AppDispatch } from "../store"
import { useDispatch } from "react-redux"

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(allActions, dispatch)
}
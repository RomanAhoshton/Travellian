
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../redux";
import { setUser } from "../redux/slice/authSlice";

export const useAuth = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.value)
  const dispatch = useDispatch()
  const auth=(value:boolean)=>{
    dispatch(setUser(value))

  }
  return { auth ,isAuthenticated};
};

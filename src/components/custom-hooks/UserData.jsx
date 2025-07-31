import { useSelector } from "react-redux";

function useUserData() {
    const userInfo = useSelector(state => state.auth.userData);
    return userInfo;
}

export default useUserData;
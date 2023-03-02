import { useLocation} from "react-router-dom";

export const useGetQuery = () => {
    const { search } = useLocation();
    return (key:string)=>search.replace(`?${key}=`, "")
  }
import { Navigate } from "react-router-dom";
import Links from "../../utils/constants";

export function Home (){
  return (
    <Navigate to={Links.paymentMethod}/>
  )
}
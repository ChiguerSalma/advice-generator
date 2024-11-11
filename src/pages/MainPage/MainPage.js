import React from "react";
import { useEffect} from "react";
import AdviceCard from "../../components/card/adviceCard/AdviceCard";
import "./MainPage.scss"
import { useAdviceContext } from "../../context/adviceContext";



const MainPage = () => {
    const { advice, fetchAdvice } = useAdviceContext();
    useEffect(() => {
        fetchAdvice();
        console.log(advice);
    }, []);



    return (
            <div className="main-page-container">
                <AdviceCard />
            </div>

    )
}

export default MainPage;
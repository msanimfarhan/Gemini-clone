import { createContext, useState } from "react";
import run from "../Config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPromt, setRecentPromt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara =(index,nextWord) =>{

    }

    const onSent = async (promt) => {
        
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPromt(input)
        const response= await run(input)
        let responseArray = response.split("**");
        let newResponse;
        for(let i=0; i<responseArray.length;i++){
            if(i ===0 || i%2 !==1){
                newResponse+= responseArray[i];
            }else{
                newResponse+= "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }




    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPromt,
        recentPromt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
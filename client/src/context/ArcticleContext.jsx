
import { createContext, useState } from "react";

export const ArticleContext = createContext();

export const ArticleContextProvider = ({children}) => {
    const [showArticle,setShowArticle] = useState("stories");
    return <ArticleContext.Provider value={{showArticle, setShowArticle}}>
        {children}
    </ArticleContext.Provider>

}

import { createContext, useEffect, useState } from "react";
import axios  from "axios";
export const ArticleContext = createContext();

export const ArticleContextProvider = ({children}) => {
    const [showArticle,setShowArticle] = useState("stories");
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        axios.get('/articles')
        .then(res=>{
            
            setArticles(res.data.articles)
        })
        .catch(err=>console.log(err))

    },[])
    return <ArticleContext.Provider value={{showArticle,articles, setShowArticle}}>
        {children}
    </ArticleContext.Provider>

}
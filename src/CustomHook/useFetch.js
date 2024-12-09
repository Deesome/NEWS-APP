import { useState } from "react"
import { useEffect } from "react"


function useFetch(apiUrl,refreshrate) {
    console.log(apiUrl)
     

    const [error, setError] = useState("")
    const [latestNews, setLatestNews] = useState(() => {
        const savedNews = localStorage.getItem(`latestNews-${apiUrl}`)
        return savedNews ? JSON.parse(savedNews) : []

    })

    

    const fetchNews = () => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response is not ok")
                }
                return response.json()
            })
            .then((data) => {
                setLatestNews(data.articles)
                localStorage.setItem(`latestNews-${apiUrl}`, JSON.stringify(data.articles))
            })
            .catch((error) => {
                setError(error.message)
            })


    }

    useEffect(() => {
        if(!apiUrl) return
        
        fetchNews()

        if(refreshrate){
        const intervalId = setInterval(()=>{
            fetchNews()
        },refreshrate)
    
         return () => clearInterval(intervalId)
    }
    }, [refreshrate,apiUrl])

    return { latestNews, error }



}

export default useFetch
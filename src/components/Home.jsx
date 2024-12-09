
import { useState } from 'react'
import useFetch from '../CustomHook/useFetch'
import Search from './Search'

function Home() {
    const [keywords,setKeywords] = useState("")
    const apiUrl = keywords? `https://newsapi.org/v2/everything?q=${keywords}&apiKey=${import.meta.env.VITE_API_KEY}`
                            :`https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${import.meta.env.VITE_API_KEY}`

  function handleSearch(newKeywords){
    setKeywords(newKeywords)
  }                          
  const { latestNews, error } = useFetch(apiUrl,100000)

  if (error) return <div className="text-center text-red-600 font-bold">{error}</div>

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Latest News</h1>
       <Search onSearch={handleSearch}/>
      <div className="w-4/5 flex flex-wrap justify-center mt-8">
        {latestNews.map((article) => (
          article.source.name !== "[Removed]" && (
            <div
            key={Math.random()}
            className="w-3/5 bg-white rounded-lg shadow-md overflow-hidden mb-5"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt=""
                className="w-full h-[350px] object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description || "No description available"}</p>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Author:</span> {article.author || "Unknown"}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Published At:</span>{" "}
                {new Date(article.publishedAt).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-bold">Source:</span> {article.source.name}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
              >
                Read Full Article
              </a>
            </div>
          </div>
          )
          
        ))}
      </div>
    </div>
  )
}

export default Home

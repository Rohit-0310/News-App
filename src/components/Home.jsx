import React from 'react'
import Navbar from './Navbar'
import "./Style.scss";
import { useQuery } from '@tanstack/react-query';

const fetchNews = () => {
    return fetch("https://daily-news-network-nestjs.herokuapp.com/api/v1/inshorts/en/dashboardNews")
        .then((res) => res.json())
}
const Home = () => {

    // const { isLoading, data } = useQuery('news', () => {
    //     return fetch("https://daily-news-network-nestjs.herokuapp.com/api/v1/inshorts/en/dashboardNews")
    //         .then((res) => res.json())
    // })

    // if (isLoading) return <h2 className='loading'>Loading...!</h2>


    // console.log("data", data)

    const { isLoading, data } = useQuery(['news'], fetchNews)

    if (isLoading) return <h2 className='loading'>Loading...!</h2>

    console.log("data", data)
    return (
        <>
            <Navbar />
            <div className='newsTop'>{data.map((news, i) => {
                return (
                    <div key={i} className='flexImg'>
                        <div className='newsImg'>
                            <img src={news.urlToImage} alt={news.description} />
                        </div>
                        <div className="flexNews">
                            <div>
                                <p className="title">{news.description}</p>
                                <p className="content">{news.content}</p>
                            </div>
                            <div>
                                <p>read more at <a href={news.url}>{news.source.name}</a></p>
                            </div>
                        </div>

                    </div>)
            })
            }</div>
        </>
    )
}

export default Home
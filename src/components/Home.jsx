import React from 'react'
import Navbar from './Navbar'
import  "./Style.scss";
import { useQuery } from '@tanstack/react-query';


const Home = () => {



    const { isLoading, data } = useQuery(['news'], () => {
        return fetch("https://daily-news-network-nestjs.herokuapp.com/api/v1/inshorts/en/dashboardNews")
            .then((res) => res.json())
    })

    if (isLoading) return <h2 className='loading'>Loading...</h2>

    console.log("data", data)

    return (
        <>
            <div>
                <Navbar />
                <div>{data.map((news, i) => {
                    return <div key={i}>
                        <div>
                            <h1>
                                {news.description}
                            </h1>
                        </div>

                    </div>
                })
                }</div>
            </div>
        </>
    )
}

export default Home
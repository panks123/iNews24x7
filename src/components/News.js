import React , {useEffect, useState} from "react";
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export function News(props){

    const [articles, setArticles]= useState([])
    const [loading, setLoading]= useState(false)
    const [page, setPage]= useState(1)
    const [totalResults, setTotalResullts]= useState(0)

    // TODO: document.title = `iNews24x7 - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`

    async function updateNews(){
        props.changeProgress(10)
        const api_url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
        console.log(api_url)
        setLoading(true)

        let data = await fetch(api_url)
        props.changeProgress(50)

        let parsed_data = await data.json()
        props.changeProgress(70)
        setArticles(parsed_data.articles)
        setTotalResullts(parsed_data.totalResults)
        setLoading(false)
        props.changeProgress(100)
    }

    const handleNext = async ()=>{
        await setPage(page + 1)
        updateNews()
    }

    const handlePrev = async ()=>{
        await setPage(page - 1)
        updateNews()
    }

    useEffect(()=>{
        updateNews()
        // eslint-disable-next-line
    },[])

    const default_urlToImg = 'https://static3.depositphotos.com/1005460/260/i/950/depositphotos_2605601-stock-photo-latest-news.jpg'
    
    return(
        <div className="container my-3">
            <h3 className="text-center my-3">{`iNews24x7 - Top stories ${props.category !=='general'? 'from ' + props.category: ''}:`}</h3>
            {loading===true && <Spinner/>}
            <div className="row">
            {!loading && articles.map((element)=>{
                return (
                    <div className="col-md-4" key ={element.url}>
                        <NewsItem  title= {(element.title === null ? 'News title unavailable😞' : element.title)} description = {element.description === null? 'News description unavailable😞' : element.description} imageUrl = {element.urlToImage === null ? default_urlToImg : element.urlToImage} newsUrl = {element.url} author = {element.author === null ? "Unknown" : element.author} date= {new Date(element.publishedAt).toGMTString()} source ={element.source.name}/>
                    </div>
                )
            })}
            </div>
            <div className="container d-flex justify-content-between my-5">
                <button type="button" disabled ={page<=1} className="btn btn-sm btn-dark" onClick={handlePrev}>&larr; Prev</button>
                <button type="button" disabled ={(page+1) > Math.ceil(totalResults/props.pagesize)} className="btn btn-sm btn-dark" onClick={handleNext}>Next &rarr;</button>
            </div>
        </div>
    )
}

News.defaultProps ={
    country:'in',
    category: 'general',
    pagesize: 12
}
News.propTypes ={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default News;
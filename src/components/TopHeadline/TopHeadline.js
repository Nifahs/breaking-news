
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c0121f60fe74c2481d891c1c937b558')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    // console.log(articles);
    return (
        <div>
            <h1>Total article : {articles.length}</h1>
            {/* {articles.map(article => { <News></News> })} */}
            {
                articles.map(article=> <News article={article}></News>)
            }

        </div>
    );
};

export default TopHeadline;
import React, { useEffect, useState } from "react";
import News from "./News";

const Topheadline = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=79bc5fa2bd3a455897ecf7b2e2d6c07b")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.articles);
      });
  }, []);
  return (
    <div>
      {article.map((item) => (
        // <News author={item.author} title={item.title} description={item.description} url={item.url} urlToImage={item.urlToImage} publishedAt={item.publishedAt} content={item.content}></News>
        <News item={item}></News>
      ))}
    </div>
  );
};

export default Topheadline;

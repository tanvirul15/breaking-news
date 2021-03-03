import React from "react";
import { Card, Button } from "react-bootstrap";

const News = (props) => {
  const { author, title, description, url, urlToImage, publishedAt, content } = props.item;
  return (
    <Card style={{ width: "18rem", display: "inline-block", margin: "0px 70px 10px 0" }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <footer className="blockquote-footer">
          Published at: {publishedAt} <cite title="Source Title"> By {author}</cite>
        </footer>
        <Card.Text>{description}</Card.Text>
        <Button href={url} variant="secondary">
          Read More &rarr;
        </Button>
      </Card.Body>
    </Card>
  );
};

export default News;

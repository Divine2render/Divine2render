import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articles } from "./RawArticles";
import styles from "./ArticleDetails.module.css"; // Import CSS module
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "../Projects/ProjectDetails.css";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.title === id); // Find the article based on the title

  if (!article) {
    return <p>Article not found</p>;
  }
  const navigate = useNavigate();
  return (
    <div className={styles.articleDetailsContainer}>
      <button className="back-button" onClick={() => navigate("/articles")}>
        <IoArrowBackCircleSharp size={36} color="#000" />
        <span>Back to Articles</span>
      </button>{" "}
      <h1 className={styles.articleTitle}>{article.title}</h1>
      <img
        className={styles.articleImage}
        src={article.image}
        alt={article.title}
      />
      <div className={styles.articleContent}>
        <p className={styles.articleDescription}>{article.description}</p>

        <div className={styles.articleMeta}>
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="paragraph"
              style={{ marginTop: 24, lineHeight: 1.8 }}
            >
              {paragraph}
            </p>
          ))}

          <br />
          <br />
          <br />
          <p>
            <strong>Category:</strong> {article.category}
          </p>
          <br />
          <p>
            <strong>Published by:</strong> {article.publisher}
          </p>
          <br />
          <p>
            <strong>Published on:</strong> {article.publishDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

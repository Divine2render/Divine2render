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
        <h2 className={styles.articleDescription}>{article.description}</h2>
        <div className={styles.articleMeta}>
          {article.content.map((paragraph, index) => {
            if (typeof paragraph === "string") {
              return <p key={index}>{paragraph}</p>;
            }
            return (
              <div key={index} style={{ marginBottom: "2rem" }}>
                {paragraph.title && (
                  <h2 style={{ marginTop: 64 }}>{paragraph.title}</h2>
                )}
                {paragraph.text && (
                  <p
                    style={{
                      marginTop: "1rem",
                      lineHeight: "1.6",
                      fontSize: "1rem",
                    }}
                  >
                    {paragraph.text.split("\n").map((line, idx) => {
                      // Bold any word surrounded by **, for example: **bold** text
                      const formattedLine = line
                        .split("**")
                        .map((part, index) => {
                          if (index % 2 !== 0) {
                            // If the index is odd, it means the part is surrounded by **, so make it bold
                            return <strong key={index}>{part}</strong>;
                          }
                          return part;
                        });

                      return (
                        <React.Fragment key={idx}>
                          {formattedLine}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </p>
                )}
                {paragraph.image && (
                  <img
                    src={paragraph.image}
                    alt={`Illustration ${index + 1}`}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginTop: 48,
                    }}
                  />
                )}
              </div>
            );
          })}
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

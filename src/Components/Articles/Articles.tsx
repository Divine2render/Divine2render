import React from "react";
import styles from "./Articles.module.css";
import { articles } from "./RawArticles";

const Articles: React.FC = () => {
  return (
    <section className={styles.articlesContainer}>
      <h2 className={styles.heading}>
        Latest Articles on UI, UX, and Product Design
      </h2>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            {/* <Link to={`/article/${article.title}`} className={styles.link}> */}
              <div>
                {" "}
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.articleImage}
                />
                <div className={styles.articleContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>
                </div>
              </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;

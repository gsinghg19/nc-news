import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://gsinghg19-be-nc-news-app.herokuapp.com/api",
});

export const getAllArticles = () => {
  return newsApi
    .get("https://gsinghg19-be-nc-news-app.herokuapp.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticle = (article_id) => {
  return newsApi
    .get(
      `https://gsinghg19-be-nc-news-app.herokuapp.com/api/articles/${article_id}`
    )
    .then((res) => {
      return res.data.articles;
    });
};

export const getAllTopics = () => {
  return newsApi
    .get("https://gsinghg19-be-nc-news-app.herokuapp.com/api/topics")
    .then((res) => {
      return res.data.topics;
    });
};

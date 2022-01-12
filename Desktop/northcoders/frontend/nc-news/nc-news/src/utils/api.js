import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://gsinghg19-be-nc-news-app.herokuapp.com/api",
});

export const getAllArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data.allArticles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    console.log(res);
    return res.data;
  });
};

export const getAllTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

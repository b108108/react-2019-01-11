import {
    ADD_COMMENT,
    DELETE_ARTICLE,    
} from '../constants';
import {normalizedArticles} from '../fixtures';


export default (articles = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

        case ADD_COMMENT:
            return articles.map(article =>{
                if (article.id === payload.articleId){
                    return {
                        ...article,
                        comments: [
                            ...article.comments,
                            payload.id,
                        ]
                    }
                } else {
                    return article
                }
                
            });

        default:
            return articles
    }
}

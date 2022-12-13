type article = string
interface IArticles {
  getArticle: (id: number) => article
}

class Articles implements IArticles {

  public getArticle(id: number) {
    console.log('requesting specific api');

    return `art ${id}`
  };
}

class ArticlesProxy implements IArticles {
  private realArticle:IArticles = new Articles()
  private caches: article[] = []

  public getArticle(id: number) {
    const cachedIndex = this.caches.indexOf(`art ${id}`)

    if( cachedIndex !== -1 ) return this.caches[cachedIndex]

    const newArticle = this.realArticle.getArticle(id)
    this.caches.push(newArticle)

    return newArticle
  }

}

const article = new ArticlesProxy()

console.log(article.getArticle(1));
console.log(article.getArticle(1));
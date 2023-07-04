type User = {
  name: string;
  lastname: string;
  articles: {
      title: string;
      description: string;
  }[];
}
/* -------------------------------------------------------------------------- */
/**
 * 3rd party logics with different interface that we need it to be connected to our code 
 * but they have different interfaces to be connected
 */
class DataSource {
  execute(_userId: number): User{
    const user = {
      name: 'john',
      lastname: 'miller',
      articles: [
        {
          title: 'article one',
          description: 'article descriptions'
        },
        {
          title: 'article one',
          description: 'article descriptions'
        },
      ]
    }
    return user;
  }
}
/* --------------------------------- Adapter -------------------------------- */
/**
 * Our adapter which suppose to handle and connect our main code to other logics with different interfaces
 */
class RepositoryAdapter implements IRepositoryAdapter {
  adaptee: DataSource;

  constructor(adaptee: DataSource) {
    this.adaptee = adaptee;
  }

  getArticles(articleSlug: string) {
    // Find user id by article Id.
    const userID = this.getUserIdByArticleSlug(articleSlug);
    const user = this.adaptee.execute(userID)

    const articles = user.articles;

    return articles;
  }

  private getUserIdByArticleSlug(_articleId: String) {
    return 10;
  }
}

/* -------------------------------- main logic ------------------------------- */
/**
 * with this interface we can connect our main logic to the adapter
 */
interface IRepositoryAdapter {
  getArticles(articleSlug: string): {
    title: string;
    description: string;
  }[];
}

/**
 * Our main code that wants to connect to datasource 3rd party but their interfaces are completely different
 * so in this function we will just concentrate on our main logics and pass the conversion to the adapter class
 * adapter class here is repository adapter
 * so with this approach we can folow single responsibility and open/close principles for future connections  
 */
class HandleArticleUsecase {
  repository: IRepositoryAdapter;

  constructor(repository: IRepositoryAdapter) {
    this.repository = repository;
  }

  execute(articleSlug: string) {
    const articles = this.repository.getArticles(articleSlug);
    // Doing some logics about the articles.
    return articles;
  }
}

/* ------------------------------- client code ------------------------------ */
function articleHandlerClient(usecase: HandleArticleUsecase) {
  const articleSlug = 'article-slug'
  const articles = usecase.execute(articleSlug);
  console.log('our articles is: ', articles);
}

const dataSource = new DataSource();
const repositoryAdapter = new RepositoryAdapter(dataSource);
const usecaes = new HandleArticleUsecase(repositoryAdapter);

articleHandlerClient(usecaes);
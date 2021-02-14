import { map } from 'lodash';

import Article from '../components/Article';
import Pagination from '../components/Pagination';

const LatestArticles = ({ articles }) => (
  <section className="mx-auto mt-8 mb-16 md:my-16">
    <div className="container px-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {map(articles, article => (
          <li>
            <Article
              key={article.slug}
              article={article}
            />
          </li>
        ))}
      </ul>
      <Pagination className="mt-16" />
    </div>
  </section>
);

export default LatestArticles;

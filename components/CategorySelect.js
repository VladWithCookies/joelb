import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { map, get, omit, isEmpty } from 'lodash';

import CATEGORIES from 'queries/categories';
import Select from './Select';

const CategorySelect = ({ className }) => {
  const { push, query } = useRouter();
  const { formatMessage } = useIntl();
  const response = useQuery(CATEGORIES);
  const [category, setCategory] = useState(query.category);

  useEffect(() => {
    setCategory(query.category || '');
  }, [query.category]);

  const categories = get(response, ['data', 'categoryCollection', 'items']);

  const options = [
    {
      value: '',
      label: formatMessage({ id: 'app.allCategories' }),
    },
    ...map(categories, category => ({
      value: category.en,
      label: category[query.lang],
    })),
  ];

  const handleChange = ({ target: { value } }) => {
    const params = isEmpty(value) ? omit(query, 'category') : { ...query, category: value, page: 1 };

    push({ pathname: '/[lang]/blog', query: params });
    setCategory(value);
  }

  return (
    <Select
      value={category}
      options={options}
      className={className}
      onChange={handleChange}
      ariaLabel={formatMessage({ id: 'app.category' })}
    />
  );
};

export default CategorySelect;

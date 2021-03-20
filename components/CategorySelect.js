import clsx from 'clsx';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { map, get, omit, isEmpty } from 'lodash';

import CATEGORIES from 'queries/categories';

const CategorySelect = ({ className }) => {
  const { push, query } = useRouter();
  const { formatMessage } = useIntl();
  const response = useQuery(CATEGORIES);
  const [category, setCategory] = useState(query.category);

  const categories = get(response, ['data', 'categoryCollection', 'items']);

  const handleChange = ({ target: { value } }) => {
    const params = isEmpty(value) ? omit(query, 'category') : { ...query, category: value };

    push({ pathname: '/[lang]/blog', query: params });
    setCategory(value);
  }

  return (
    <select
      value={category}
      aria-label="Category"
      onChange={handleChange}
      className={clsx('cursor-pointer bg-transparent', className)}
    >
      <option value="">
        {formatMessage({ id: 'app.allCategories' })}
      </option>
      {map(categories, ({ name }) => (
        <option
          key={name}
          value={name}
        >
          {name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;

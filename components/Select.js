import clsx from 'clsx';
import { map } from 'lodash';

const Select = ({
  value,
  options,
  onChange,
  ariaLabel,
  className,
}) => (
  <select
    value={value}
    onChange={onChange}
    aria-label={ariaLabel}
    className={clsx('cursor-pointer bg-transparent dark:bg-chevron-down-dark', className)}
  >
    {map(options, ({ value, label }) => (
      <option
        key={value}
        value={value}
      >
        {label}
      </option>
    ))}
  </select>
);

export default Select

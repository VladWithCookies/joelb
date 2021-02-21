import clsx from 'clsx';

const LanguageSelect = ({ className }) => (
  <select
    aria-label="Language"
    className={clsx('cursor-pointer bg-transparent', className)}
  >
    <option>
      English
    </option>
    <option>
      Srpski
    </option>
    <option>
      Čeština
    </option>
  </select>
);

export default LanguageSelect;

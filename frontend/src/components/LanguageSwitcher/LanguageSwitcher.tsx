import React from 'react';
import { useRouter } from 'next/router';
import ReactFlagsSelect from 'react-flags-select';
import style from './LanguageSwitcher.module.scss';
import { ParsedUrlQuery } from 'node:querystring';

interface Path {
  pathname: string;
  query: ParsedUrlQuery;
}

const LanguageSwitcher = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;

    let href: Path = {
      pathname: currentPath,
      query: currentQuery,
    };

    if (currentPath === '/tours') {
      href = {
        pathname: currentPath,
        query: {},
      };
    }

    if (router.locale?.toLowerCase() === locale.toLowerCase()) {
      return;
    }

    if (locale.toLowerCase() === router.locale || (locale === 'GB' && router.locale === 'en')) {
      return;
    }

    void router.push(href, undefined, { locale: locale === 'RU' && 'ru' });
  };

  return (
    <div className={style.wrapper}>
      <ReactFlagsSelect
        className={style.flagsSelect}
        countries={['GB', 'RU']}
        customLabels={{ GB: 'English', RU: 'Russian' }}
        placeholder="Select Language"
        onSelect={(countryCode) => switchLanguage(countryCode)}
        selected={router.locale === 'ru' ? 'RU' : 'GB'}
      />
    </div>
  );
};

export default LanguageSwitcher;

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { IoNavigate } from 'react-icons/io5';
import { IoBicycle } from 'react-icons/io5';
import 'react-datepicker/dist/react-datepicker.css';
import style from './HeroSection.module.scss';
import { useAppSelector } from '@/store/hooks';
import articleBanner from '@/assets/articlesImages/articlesBanner.png';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';
import { useRouter } from 'next/router';

interface Option {
  value: string;
  label: string;
}

const HeroSection = () => {
  const router = useRouter();

  const [showSelect, setShowSelect] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const heroSection = useAppSelector((state) => state.home.homeData?.heroSection);

  useEffect(() => {
    setShowSelect(true);
  }, []);

  const filterLocationOptions = (inputValue: string) => {
    const locationOptions = [
      { value: 'Batken', label: 'Batken' },
      { value: 'Chui', label: 'Chui' },
      { value: 'Issyk-Kul', label: 'Issyk-Kul' },
      { value: 'Jalal-Abad', label: 'Jalal-Abad' },
      { value: 'Naryn', label: 'Naryn' },
      { value: 'Osh', label: 'Osh' },
      { value: 'Talas', label: 'Talas' },
    ];
    return locationOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const filterClassificationOptions = (inputValue: string) => {
    const options: Option[] = [
      { value: 'Cycling tours', label: 'Cycling tours' },
      { value: 'Food tours', label: 'Food tours' },
      { value: 'Active adventures tour', label: 'Active adventures tour' },
      { value: 'Kyrgyzstan Cultural Tours', label: 'Kyrgyzstan Cultural Tours' },
      { value: 'Horse Treks', label: 'Horse Treks' },
    ];
    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const handleLocationChange = (selectedOption: Option | null) => {
    setSelectedLocation(selectedOption ? selectedOption.label : '');
  };

  const handleClassificationChange = (selectedOption: Option | null) => {
    setSelectedCategory(selectedOption ? selectedOption.label : '');
  };

  const loadLocationOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterLocationOptions(inputValue));
  };

  const loadClassificationOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterClassificationOptions(inputValue));
  };

  const goToTours = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('selectedLocation', selectedLocation);
    localStorage.setItem('selectedCategory', selectedCategory);
    window.location.href = '/tours';
  };

  return (
    <div className={style.mainBlock}>
      <BackdropForBanner />
      <div className={style.mainBlockContainer}>
        <h1 className={style.mainBlockHeader}>{heroSection?.data.title}</h1>

        <form onSubmit={goToTours} className={style.formBlock}>
          <div className={style.searchSelectBlock}>
            <IoNavigate className={style.searchIcon} />
            {showSelect && (
              <AsyncSelect
                onChange={handleLocationChange}
                isMulti={false}
                className={style.searchInput}
                isClearable
                placeholder={router.locale === 'ru' ? 'Выберите Место' : 'Choose Location'}
                loadOptions={loadLocationOptions}
                defaultOptions
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (baseStyles) => {
                    return {
                      ...baseStyles,
                      paddingLeft: '25px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                    };
                  },
                }}
              />
            )}
          </div>

          <div className={style.datepickerAndButton}>
            <div className={style.datepicker}>
              <IoBicycle className={style.bicycleIcon} />
              {showSelect && (
                <AsyncSelect
                  onChange={handleClassificationChange}
                  isMulti={false}
                  className={`${style.searchInput} ${style.searchInputCategory}`}
                  isClearable
                  placeholder={router.locale === 'ru' ? 'Выберите Категорию' : 'Choose Category'}
                  loadOptions={loadClassificationOptions}
                  defaultOptions
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  styles={{
                    control: (baseStyles) => {
                      return {
                        ...baseStyles,
                        paddingLeft: '25px',
                        fontSize: '16px',
                        fontFamily: 'inherit',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                      };
                    },
                  }}
                />
              )}
            </div>

            <button type="submit" className={style.mainBlockSearchButton}>
              {router.locale === 'ru' ? 'Найти' : 'Search'}
            </button>
          </div>
        </form>
      </div>

      <Image
        priority={true}
        width={1150}
        height={500}
        className={style.mainBlockImage}
        src={
          heroSection?.data.image.url
            ? 'http://localhost:1337' + heroSection?.data.image.url
            : articleBanner.src
        }
        alt="Travellers and a leader walking down the street."
      />
    </div>
  );
};

export default HeroSection;

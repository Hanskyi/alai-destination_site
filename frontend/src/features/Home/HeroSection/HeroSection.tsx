import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { IoBicycle, IoNavigate } from 'react-icons/io5';
import 'react-datepicker/dist/react-datepicker.css';
import style from './HeroSection.module.scss';
import { useAppSelector } from '@/store/hooks';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';
import { useRouter } from 'next/router';
import { GALLERY } from '@/constants';
import { selectClassifications, selectLocations } from '@/features/Home/homeSlice';

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

  const locations = useAppSelector(selectLocations);
  const classifications = useAppSelector(selectClassifications);

  useEffect(() => {
    setShowSelect(true);
  }, [router.locale]);

  const filterLocationOptions = (inputValue: string) => {
    if (!locations) {
      return [];
    }
    const locationOptions = Array.from(new Set(locations.map((location) => location.name))).map(
      (locationName) => ({
        value: locationName,
        label: locationName,
      }),
    );
    return locationOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const filterClassificationOptions = (inputValue: string) => {
    if (!classifications) {
      return [];
    }
    const classificationOptions = Array.from(
      new Set(classifications.map((classification) => classification.title)),
    ).map((classificationName) => ({
      value: classificationName,
      label: classificationName,
    }));
    return classificationOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const loadLocationOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterLocationOptions(inputValue));
  };

  const loadClassificationOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterClassificationOptions(inputValue));
  };

  const handleLocationChange = (selectedOption: Option | null) => {
    setSelectedLocation(selectedOption ? selectedOption.label : '');
  };

  const handleClassificationChange = (selectedOption: Option | null) => {
    setSelectedCategory(selectedOption ? selectedOption.label : '');
  };

  const goToTours = (e: React.FormEvent) => {
    e.preventDefault();

    const filters: { [key: string]: string } = {};

    if (selectedLocation) {
      filters.location = selectedLocation;
    }

    if (selectedCategory) {
      filters.classification = selectedCategory;
    }

    router
      .push({
        pathname: '/tours',
        query: filters,
      })
      .then();
  };

  return (
    heroSection && (
      <div className={style.mainBlock}>
        <BackdropForBanner />
        <div className={style.mainBlockContainer}>
          <h1
            className={`${style.mainBlockHeader} ${
              router.locale === 'ru' ? style.mainBlockHeaderMutation : ''
            }`}
          >
            {heroSection?.data.title}
          </h1>

          <form onSubmit={goToTours} className={style.formBlock}>
            <div className={style.searchSelectBlock}>
              <IoNavigate className={style.searchIcon} />
              {showSelect && (
                <AsyncSelect
                  key={router.locale}
                  name="location"
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
                    key={router.locale}
                    name="category"
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
          src={GALLERY + heroSection.data.image.url}
          alt="Travellers and a leader walking down the street."
        />
      </div>
    )
  );
};

export default HeroSection;

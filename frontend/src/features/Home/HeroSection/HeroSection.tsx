import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { IoNavigate } from 'react-icons/io5';
import { IoBicycle } from 'react-icons/io5';
import 'react-datepicker/dist/react-datepicker.css';
import style from './HeroSection.module.scss';
import { useAppSelector } from '@/store/hooks';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';
import { useRouter } from 'next/router';
import { GALLERY } from '@/constants';

interface Option {
  value: string;
  label: string;
}

const HeroSection = () => {
  const router = useRouter();

  const [showSelect, setShowSelect] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCategory, setSelectedClassification] = useState('');

  const heroSection = useAppSelector((state) => state.home.homeData?.heroSection);
  const classifications = useAppSelector((state) => state.home.homeData?.homeClassification);
  const tours = useAppSelector((state) => state.home.homeData?.homeTour.data.tours);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setShowSelect(true);
  }, []);

  const filterLocationOptions = (inputValue: string) => {
    if (!tours) {
      return [];
    }

    const locationOptions = Array.from(new Set(tours.map((tour) => tour.location.name))).map(
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

    const uniqueClassifications = Array.from(
      new Set(classifications.data.classifications.map((classification) => classification.title)),
    );

    const options: Option[] = uniqueClassifications.map((classificationName) => ({
      value: classificationName,
      label: classificationName,
    }));

    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
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
    setSelectedClassification(selectedOption ? selectedOption.label : '');
  };

  const goToTours = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('selectedLocation', selectedLocation);
    localStorage.setItem('selectedCategory', selectedCategory);
    window.location.href = '/tours';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyles = {
    top: `${50 + scrollPosition * 0.07}%`,
  };

  return (
    heroSection && (
      <div className={style.mainBlock}>
        <BackdropForBanner />
        <div className={style.mainBlockContainer} style={parallaxStyles}>
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
          src={GALLERY + heroSection.data.image.url}
          alt="Travellers and a leader walking down the street."
        />
      </div>
    )
  );
};

export default HeroSection;

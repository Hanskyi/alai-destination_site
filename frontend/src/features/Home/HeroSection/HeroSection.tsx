import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import style from './HeroSection.module.scss';
import { useAppSelector } from '@/store/hooks';
import articleBanner from '@/assets/articlesImages/articlesBanner.png';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';

interface Option {
  value: string;
  label: string;
}

const HeroSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [showSelect, setShowSelect] = useState(false);
  const heroSection = useAppSelector((state) => state.home.homeData?.heroSection);

  useEffect(() => {
    setShowSelect(true);
  }, []);

  const filterOptions = (inputValue: string) => {
    const options: Option[] = [{ value: 'near-me', label: 'Near Me' }];

    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const loadOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterOptions(inputValue));
  };

  const goToTours = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={style.mainBlock}>
      <BackdropForBanner />
      <div className={style.mainBlockContainer}>
        <h1 className={style.mainBlockHeader}>{heroSection?.data.title}</h1>

        <form onSubmit={goToTours} className={style.formBlock}>
          <div className={style.searchSelectBlock}>
            <PiMagnifyingGlassBold className={style.searchIcon} />
            {showSelect && (
              <AsyncSelect
                isMulti={false}
                className={style.searchInput}
                isClearable
                placeholder="Anywhere"
                loadOptions={loadOptions}
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
              <FaCalendarAlt className={style.calendarIcon} />
              <DatePicker
                className={style.dateInput}
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                placeholderText={startDate ? '' : 'Anytime'}
                dateFormat="dd/MM/yyyy"
                isClearable
              />
            </div>

            <button type="submit" className={style.mainBlockSearchButton}>
              Search
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

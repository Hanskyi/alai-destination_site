'use client';
import Image from 'next/image';
import originalImage from '../../../assets/header/INT_homepage_1920x1285_GTO_1.jpg';
import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import style from './HeroSection.module.scss';

interface Option {
  value: string;
  label: string;
}

const MainBlock = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [showSelect, setShowSelect] = useState(false);

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

  return (
    <div className={style.mainBlock}>
      <div className={style.mainBlockContainer}>
        <h1 className={style.mainBlockHeader}>good trips only.</h1>

        <form onSubmit={(e) => e.preventDefault()} className={style.formBlock}>
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
                  control: (baseStyles, state) => {
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
        width={1150}
        height={500}
        className="main-block-image"
        src={originalImage}
        alt="Travellers and a leader walking down the street on an Intrepid trip."
      />
    </div>
  );
};

export default MainBlock;

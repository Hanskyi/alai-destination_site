'use client';
import Image from 'next/image';
import Link from 'next/link';
import originalImage from '../../../public/INT_homepage_1920x1285_GTO_1.jpg'
import React, {useState} from 'react';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import {PiMagnifyingGlassBold} from "react-icons/pi";
import {FaCalendarAlt} from 'react-icons/fa';
import {IoIosArrowForward} from "react-icons/io";
import 'react-datepicker/dist/react-datepicker.css';
import './HeroSection.scss';

interface Option {
  value: string;
  label: string;
}

const MainBlock = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const filterOptions = (inputValue: string) => {
    const options: Option[] = [
      {value: 'near-me', label: 'Near Me'},
    ];

    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterOptions(inputValue));
  };

  return (
    <div className="main-block">
      <div className="main-block-container">

        <h1 className="main-block-header">good trips only.</h1>

        <form onSubmit={(e) => e.preventDefault()} className="form-block">

          <div className="search-select-block">
            <PiMagnifyingGlassBold className="search-icon"/>
            <AsyncSelect
              isMulti={false}
              className="search-input"
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
                  }
                },
              }}
            />
          </div>

          <div className="datepicker-and-button">

            <div className="datepicker">
              <FaCalendarAlt className="calendar-icon"/>
              <DatePicker
                className="date-input"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                placeholderText={startDate ? '' : 'Anytime'}
                startDate={null}
                dateFormat="dd/MM/yyyy"
                isClearable
              />
            </div>

            <button type="submit" className="main-block-search-button">Search</button>
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

      <div className="bottom-ad">
        <p className="book-link-para">Explore our last-minute Alai travel deals!</p>
        <Link href="#" className="book-link">Book Now
          <IoIosArrowForward/>
        </Link>
      </div>
    </div>
  );
};

export default MainBlock;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import originalImage from '../../../public/Alay-Mountains-Kumbell-Pass.jpg'
import croppedImage from '../../../public/Alay-Mountains-Kumbell-Pass (cropped).jpg'
import React, {useEffect, useState} from 'react';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import {PiMagnifyingGlassBold} from "react-icons/pi";
import {FaCalendarAlt} from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import './HeroSection.scss';
import {IoIosArrowForward} from "react-icons/io";

interface Option {
  value: string;
  label: string;
}

const MainBlock = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  paddingLeft: '25px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                }),
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
        src={isSmallScreen ? croppedImage : originalImage}
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
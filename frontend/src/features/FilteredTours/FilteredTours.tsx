import React, { useEffect, useState } from 'react';
import style from './FilteredTours.module.scss';
import Link from 'next/link';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import AsyncSelect from 'react-select/async';
import { SwiperSlide } from 'swiper/react';
import TourCard from '@/features/FilteredTours/components/TourCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Option {
  value: string;
  label: string;
}

const FilteredTours = () => {
  const [select, setSelect] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [startDuration, setStartDuration] = useState('Any');
  const [endDuration, setEndDuration] = useState('Any');

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceSort, setSelectedPriceSort] = useState('');

  const handleDurationReset = () => {
    setStartDuration('Any');
    setEndDuration('Any');
  };

  const durationOptions = Array.from({ length: 30 }, (_, index) => index + 1);

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(() => {
    setSelect(true);
  }, []);

  const filterOptions = (inputValue: string) => {
    const options: Option[] = [{ value: 'near-me', label: 'Near Me' }];
    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const loadOptions = (inputValue: string, callback: (options: Option[]) => void) => {
    callback(filterOptions(inputValue));
  };

  return (
    <>
      <div>
        <div className="container">
          <div className={style.breadcrumbList}>
            <Link href="/" className={style.breadcrumbLink}>
              Home
            </Link>
            <Link href="/" className={style.breadcrumbActiveLink}>
              Search
            </Link>
          </div>
        </div>

        <div className={style.titleBlock}>
          <h1>Search</h1>
          <h2>Discover your next adventure</h2>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className={`${style.formBlock} container`}>
        <div className={style.searchSelectBlock}>
          <PiMagnifyingGlassBold className={style.searchIcon} />
          {select && (
            <AsyncSelect
              isMulti={false}
              className={style.searchInput}
              isClearable
              placeholder="Where do you want to go?"
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
                    border: 'none',
                    appearance: 'none',
                    boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.14)',
                    whiteSpace: 'nowrap',
                  };
                },
              }}
            />
          )}
        </div>

        <button type="submit" className={style.searchButton}>
          Search
        </button>
      </form>

      <div className={`${style.filteringBlock} container`}>
        <div className={style.filteringTools}>
          <div className={style.selectBox}>
            <select
              className={style.sortInput}
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="" disabled>
                Location
              </option>
              <option>Osh</option>
              <option>Jalal-Abad</option>
              <option>Batken</option>
            </select>
            {selectedLocation && (
              <button
                className={`${style.clearButton} ${style.additionalClass}`}
                onClick={() => setSelectedLocation('')}
              >
                Clear
              </button>
            )}
          </div>

          <div className={style.selectBox}>
            <select
              className={style.sortInput}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>
                Categories
              </option>
              <option>Walking</option>
              <option>Horse Trek</option>
              <option>Car rent</option>
            </select>
            {selectedCategory && (
              <button
                className={`${style.clearButton} ${style.additionalClass}`}
                onClick={() => setSelectedCategory('')}
              >
                Clear
              </button>
            )}
          </div>

          <div className={style.selectBox}>
            <select
              name="sortByPrice"
              className={style.sortInput}
              value={selectedPriceSort}
              onChange={(e) => setSelectedPriceSort(e.target.value)}
            >
              <option value="" disabled>
                Sort by Price
              </option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>

            {selectedPriceSort && (
              <button
                className={`${style.clearButton} ${style.additionalClass}`}
                onClick={() => setSelectedPriceSort('')}
              >
                Clear
              </button>
            )}
          </div>

          <div className={style.travelDates}>
            <h5>Travel Dates</h5>
            <div className={style.datepicker}>
              <DatePicker
                placeholderText="Departing"
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className={style.datepickerInput}
              />
              <label className={style.datepickerLabel}>Eg. 01 Jan 2021</label>
            </div>

            <div className={style.datepicker}>
              <DatePicker
                placeholderText="Finishing"
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className={style.datepickerInput}
              />
              <label className={style.datepickerLabel}>Eg. 01 Jan 2021</label>
            </div>

            <button
              className={`${style.resetDatesButton} ${style.additionalClass}`}
              onClick={handleReset}
            >
              Clear Dates
            </button>
          </div>

          <div className={style.duration}>
            <h5>Duration</h5>
            <div className={style.durationInner}>
              <div className={style.durationPicker}>
                <label className={style.durationLabel}>Min</label>
                <select
                  className={`${style.sortInput} ${style.sortDuration}`}
                  value={startDuration}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const parsedValue = parseInt(selectedValue, 10);
                    if (
                      !isNaN(parsedValue) &&
                      parsedValue >= 1 &&
                      (endDuration === 'Any' || parsedValue <= parseInt(endDuration, 10))
                    ) {
                      setStartDuration(selectedValue);
                    }
                  }}
                >
                  <option value="Any">Any</option>
                  {durationOptions
                    .filter((day) => endDuration === 'Any' || day <= parseInt(endDuration, 10))
                    .map((day) => (
                      <option key={day} value={day}>
                        {day} {day === 1 ? 'day' : 'days'}
                      </option>
                    ))}
                </select>
              </div>

              <span className={style.spanDuration}>to</span>

              <div className={style.durationPicker}>
                <label className={style.durationLabel}>Max</label>
                <select
                  className={`${style.sortInput} ${style.sortDuration}`}
                  value={endDuration}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const parsedValue = parseInt(selectedValue, 10);
                    if (
                      !isNaN(parsedValue) &&
                      parsedValue >= 1 &&
                      (startDuration === 'Any' || parsedValue >= parseInt(startDuration, 10))
                    ) {
                      setEndDuration(selectedValue);
                    }
                  }}
                >
                  <option value="Any">Any</option>
                  {durationOptions
                    .filter((day) => startDuration === 'Any' || day >= parseInt(startDuration, 10))
                    .map((day) => (
                      <option key={day} value={day}>
                        {day} {day === 1 ? 'day' : 'days'}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <button
              className={`${style.resetDuration} ${style.additionalClass}`}
              onClick={handleDurationReset}
            >
              Clear Duration
            </button>
          </div>
        </div>

        <div className={`${style.tourCards}`}>
          {Array.from(Array(10)).map((_, index) => (
            <SwiperSlide key={index}>
              <TourCard />
            </SwiperSlide>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilteredTours;

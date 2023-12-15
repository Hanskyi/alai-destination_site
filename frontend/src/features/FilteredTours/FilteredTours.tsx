import React, { useEffect, useState } from 'react';
import style from './FilteredTours.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Card from '@/components/Card/Card';
import { ILocalizationShortInfo, ILocalizationShortInfoClassification, Tour } from '@/type';
import { NextRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface Props {
  router: NextRouter;
  tours: Tour[];
  locations: ILocalizationShortInfo[];
  classifications: ILocalizationShortInfoClassification[];
}

const FilteredTours: React.FC<Props> = ({ tours, router, locations, classifications }) => {
  const notFound = (
    <p className={style.notFound}>
      No tours were found with these settings. Please adjust your search parameters to view
      available tours.
    </p>
  );

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceSort, setSelectedPriceSort] = useState('');

  const [startDuration, setStartDuration] = useState<number | null>(null);
  const [endDuration, setEndDuration] = useState<number | null>(null);

  const t = useTranslations('ToursPage');
  const filterTranslation = useTranslations('FilterBlock');

  const handleDurationReset = () => {
    setStartDuration(null);
    setEndDuration(null);
  };

  const durationOptions = Array.from({ length: 30 }, (_, index) => index + 1);

  const filterByLocationAndCategory = tours.filter((tour) => {
    if (!selectedLocation && !selectedCategory) {
      return true;
    }
    const locationMatch =
      !selectedLocation || tour.location.name.toLowerCase() === selectedLocation.toLowerCase();
    const categoryMatch =
      !selectedCategory ||
      tour.classification.title.toLowerCase() === selectedCategory.toLowerCase();
    return locationMatch && categoryMatch;
  });

  const sortedByPrice = filterByLocationAndCategory.sort((tourA, tourB) => {
    if (selectedPriceSort === 'lowToHigh') {
      return tourA.price - tourB.price;
    } else if (selectedPriceSort === 'highToLow') {
      return tourB.price - tourA.price;
    }
    return 0;
  });

  const filteredByDurationTours = sortedByPrice.filter((tour) => {
    if (startDuration === null && endDuration === null) {
      return true;
    }
    const tourDuration = tour.duration;
    const startDurationMatch =
      startDuration === null || (tourDuration !== null && tourDuration >= startDuration);
    const endDurationMatch =
      endDuration === null ||
      (tourDuration !== null && tourDuration <= endDuration! && tourDuration >= startDuration!);
    return startDurationMatch && endDurationMatch;
  });

  useEffect(() => {
    const storedLocation = localStorage.getItem('selectedLocation');
    const storedCategory = localStorage.getItem('selectedCategory');
    const storedPriceSort = localStorage.getItem('selectedPriceSort');
    const storedStartDuration = localStorage.getItem('startDuration');
    const storedEndDuration = localStorage.getItem('endDuration');

    if (storedLocation) setSelectedLocation(storedLocation);
    if (storedCategory) setSelectedCategory(storedCategory);
    if (storedPriceSort) setSelectedPriceSort(storedPriceSort);
    if (storedStartDuration) setStartDuration(parseInt(storedStartDuration, 10) || null);
    if (storedEndDuration) setEndDuration(parseInt(storedEndDuration, 10) || null);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedLocation', selectedLocation);
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('selectedPriceSort', selectedPriceSort);
    localStorage.setItem(
      'startDuration',
      startDuration !== null ? startDuration.toString() : 'Any',
    );
    localStorage.setItem('endDuration', endDuration !== null ? endDuration.toString() : 'Any');
  }, [
    router.locale,
    selectedLocation,
    selectedCategory,
    selectedPriceSort,
    startDuration,
    endDuration,
  ]);

  return (
    <>
      <div className={style.titleBlock}>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
      </div>

      <div className={`${style.filteringBlock} container`}>
        <div className={style.filteringTools}>
          <div className={style.selectBox}>
            <select
              className={style.sortInput}
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="" disabled>
                {filterTranslation('location')}
              </option>

              {locations.map((location) => {
                return (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                );
              })}
            </select>
            {selectedLocation && (
              <button
                className={`${style.clearButton} ${style.additionalClass}`}
                onClick={() => setSelectedLocation('')}
              >
                {filterTranslation('clear')}
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
                {filterTranslation('categories')}
              </option>
              {classifications.map((classification) => {
                return (
                  <option key={classification.id} value={classification.title}>
                    {classification.title}
                  </option>
                );
              })}
            </select>
            {selectedCategory && (
              <button
                className={`${style.clearButton} ${style.additionalClass}`}
                onClick={() => setSelectedCategory('')}
              >
                {filterTranslation('clear')}
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
                {filterTranslation('sortByPrice')}
              </option>
              <option value="lowToHigh">{filterTranslation('minPrice')}</option>
              <option value="highToLow">{filterTranslation('maxPrice')}</option>
            </select>

            {selectedPriceSort && (
              <button
                className={`${style.clearButton} ${style.additionalClass}`}
                onClick={() => setSelectedPriceSort('')}
              >
                {filterTranslation('clear')}
              </button>
            )}
          </div>

          <div className={style.duration}>
            <h5>{filterTranslation('duration')}</h5>
            <div className={style.durationInner}>
              <div className={style.durationPicker}>
                <label className={style.durationLabel}>Min</label>
                <select
                  className={`${style.sortInput} ${style.sortDuration}`}
                  value={startDuration === null ? 'Any' : startDuration}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const parsedValue = parseInt(selectedValue, 10);
                    if (
                      !isNaN(parsedValue) &&
                      parsedValue >= 1 &&
                      (endDuration === null || parsedValue <= parseInt(endDuration.toString(), 10))
                    ) {
                      setStartDuration(parsedValue);
                    }
                  }}
                >
                  <option value="Any">Any</option>
                  {durationOptions
                    .filter(
                      (day) => endDuration === null || day <= parseInt(endDuration.toString(), 10),
                    )
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
                  value={endDuration === null ? 'Any' : endDuration}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const parsedValue = parseInt(selectedValue, 10);
                    if (
                      !isNaN(parsedValue) &&
                      parsedValue >= 1 &&
                      (startDuration === null ||
                        parsedValue >= parseInt(startDuration.toString(), 10))
                    ) {
                      setEndDuration(parsedValue);
                    }
                  }}
                >
                  <option value="Any">Any</option>
                  {durationOptions
                    .filter(
                      (day) =>
                        startDuration === null || day >= parseInt(startDuration.toString(), 10),
                    )
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
              {filterTranslation('clearAll')}
            </button>
          </div>
        </div>

        <div className="tourCardsContainer">
          {filteredByDurationTours.length === 0 ? (
            notFound
          ) : (
            <div className="tourCards">
              {filteredByDurationTours.map((tour: Tour, i) => (
                <motion.div
                  key={tour.id}
                  className={'tourCards'}
                  initial={{
                    opacity: 0,
                    translateX: i % 2 === 0 ? -50 : 50,
                    translateY: -50,
                  }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.2 }}
                >
                  <Card
                    title={tour.title}
                    image={tour.mainImage.url}
                    id={tour.id}
                    classification={tour.classification}
                    price={tour.price}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilteredTours;

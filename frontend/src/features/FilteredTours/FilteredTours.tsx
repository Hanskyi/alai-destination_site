import React, { useEffect, useState } from 'react';
import style from './FilteredTours.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Card from '@/components/Card/Card';
import { ILocalizationShortInfo, ILocalizationShortInfoClassification, Tour } from '@/type';
import { NextRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  router: NextRouter;
  tours: Tour[];
  locations: ILocalizationShortInfo[];
  classifications: ILocalizationShortInfoClassification[];
}

const FilteredTours: React.FC<Props> = ({ tours, router, locations, classifications }) => {
  useEffect(() => {
    const { location, classification, price, duration } = router.query;
    setSelectedLocation((location as string) || '');
    setSelectedCategory((classification as string) || '');
    setSelectedPriceSort((price as string) || '');
    setDuration(parseInt(duration as string) || 0);
  }, [router.query]);

  const notFound = (
    <p className={style.notFound}>
      No tours were found with these settings. Please adjust your search parameters to view
      available tours.
    </p>
  );

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceSort, setSelectedPriceSort] = useState('');
  const [duration, setDuration] = useState(0);

  const t = useTranslations('ToursPage');
  const filterTranslation = useTranslations('FilterBlock');

  const handleReset = () => {
    setSelectedLocation('');
    setSelectedCategory('');
    setSelectedPriceSort('');
    setDuration(0);
  };

  const durationOptions = Array.from({ length: 30 }, (_, index) => index + 1);

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, location: value },
      })
      .then();
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, classification: value },
      })
      .then();
  };

  const handlePriceSortChange = (value: string) => {
    setSelectedPriceSort(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, price: value },
      })
      .then();
  };

  const handleDurationChange = (value: number) => {
    setDuration(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, duration: value.toString() },
      })
      .then();
  };

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
              className={`${style.sortInput} ${selectedLocation ? style.selectedSortInput : ''}`}
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
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
          </div>

          <div className={style.selectBox}>
            <select
              className={`${style.sortInput} ${selectedCategory ? style.selectedSortInput : ''}`}
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
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
          </div>

          <div className={style.selectBox}>
            <select
              name="sortByPrice"
              className={`${style.sortInput} ${selectedPriceSort ? style.selectedSortInput : ''}`}
              value={selectedPriceSort}
              onChange={(e) => handlePriceSortChange(e.target.value)}
            >
              <option value="" disabled>
                {filterTranslation('sortByPrice')}
              </option>
              <option value="lowToHigh">{filterTranslation('minPrice')}</option>
              <option value="highToLow">{filterTranslation('maxPrice')}</option>
            </select>
          </div>

          <div className={style.duration}>
            <h5>{filterTranslation('duration')}</h5>
            <div className={style.durationInner}>
              <div className={style.durationPicker}>
                <select
                  className={`${style.sortInput} ${style.sortDuration} ${
                    duration ? style.selectedSortInput : ''
                  }`}
                  value={duration === 0 ? 'Any' : duration}
                  onChange={(e) => handleDurationChange(parseInt(e.target.value))}
                >
                  <option value="Any">Any</option>
                  {durationOptions.map((day) => (
                    <option key={day} value={day}>
                      {day} {day === 1 ? 'day' : 'days'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {selectedLocation || selectedCategory || selectedPriceSort || duration ? (
            <Link
              href="/tours"
              className={`${style.resetDuration} ${style.additionalClass}`}
              onClick={handleReset}
            >
              {filterTranslation('clearAll')}
            </Link>
          ) : null}
        </div>

        <div className="tourCardsContainer">
          {tours.length === 0 ? (
            notFound
          ) : (
            <div className="tourCards">
              {tours.map((tour: Tour, i) => (
                <motion.div
                  key={`${tour.id}-${i}`}
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
                    duration={tour.duration}
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

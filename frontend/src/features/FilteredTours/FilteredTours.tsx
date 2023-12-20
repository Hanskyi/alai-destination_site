import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Card from '@/components/Card/Card';
import { ILocalizationShortInfo, ILocalizationShortInfoClassification, Tour } from '@/type';
import { NextRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Preloader from '@/components/Preloder/Preloader';
import style from './FilteredTours.module.scss';

interface Props {
  router: NextRouter;
  tours: Tour[];
  locations: ILocalizationShortInfo[];
  classifications: ILocalizationShortInfoClassification[];
}

const FilteredTours: React.FC<Props> = ({ tours, router, locations, classifications }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { location, classification, price, duration } = router.query;
    setSelectedLocation((location as string) || '');
    setSelectedCategory((classification as string) || '');
    setSelectedPriceSort((price as string) || '');
    setDuration(parseInt(duration as string) || 0);
  }, [router.query]);

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceSort, setSelectedPriceSort] = useState('');
  const [duration, setDuration] = useState(0);

  const t = useTranslations('ToursPage');
  const filterTranslation = useTranslations('FilterBlock');

  const notFound = <p className={style.notFound}>{filterTranslation('noToursFound')}</p>;

  const handleReset = () => {
    setLoading(true);

    setSelectedLocation('');
    setSelectedCategory('');
    setSelectedPriceSort('');
    setDuration(0);
    router
      .push({
        pathname: '/tours',
        query: {},
      })
      .then(() => {
        setLoading(false);
      });
  };

  const durationOptions = Array.from({ length: 30 }, (_, index) => index + 1);

  const handleLocationChange = (value: string) => {
    setLoading(true);
    setSelectedLocation(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, location: value },
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handleCategoryChange = (value: string) => {
    setLoading(true);

    setSelectedCategory(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, classification: value },
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handlePriceSortChange = (value: string) => {
    setLoading(true);

    setSelectedPriceSort(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, price: value },
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handleDurationChange = (value: number) => {
    setLoading(true);

    setDuration(value);

    router
      .push({
        pathname: '/tours',
        query: { ...router.query, duration: value.toString() },
      })
      .then(() => {
        setLoading(false);
      });
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
                  <option value="Any">{filterTranslation('durationAny')}</option>
                  {durationOptions.map((day) => (
                    <option key={day} value={day}>
                      {day} {day === 1 ? filterTranslation('day') : filterTranslation('days')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {selectedLocation || selectedCategory || selectedPriceSort || duration ? (
            <button
              className={`${style.resetDuration} ${style.additionalClass}`}
              onClick={handleReset}
            >
              {filterTranslation('clearAll')}
            </button>
          ) : null}
        </div>

        {loading ? (
          <Preloader />
        ) : (
          <div style={{ flexGrow: 1 }}>
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
        )}
      </div>
    </>
  );
};

export default FilteredTours;

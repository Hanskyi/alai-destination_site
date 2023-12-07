import React, { useCallback, useEffect, useState } from 'react';
import style from './FilteredTours.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Card from '@/components/Card/Card';
import slideStyle from '@/components/SwiperComponent/SwiperComponent.module.scss';
import GoodTripsCard from '@/features/Home/TravelSliderBlock/Components/GoodTripsCard';
import { ILocalizationShortInfo, ILocalizationShortInfoClassification, Tour } from '@/type';
import axiosApi from '@/axiosApi';
import { useRouter } from 'next/router';

interface Props {
  locations: ILocalizationShortInfo[];
  classifications: ILocalizationShortInfoClassification[];
}

const FilteredTours: React.FC<Props> = ({ locations, classifications }) => {
  const router = useRouter();

  const notFound = (
    <p className={style.notFound}>
      No tours were found with these settings. Please adjust your search parameters to view
      available tours.
    </p>
  );

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceSort, setSelectedPriceSort] = useState('');

  const [loading, setLoading] = useState(true); // Added loading state

  const [tourCards, setTourCards] = useState<Tour[]>([]);

  console.log('tourCards: ', tourCards);

  const [startDuration, setStartDuration] = useState<number | null>(null);
  const [endDuration, setEndDuration] = useState<number | null>(null);

  const handleDurationReset = () => {
    setStartDuration(null);
    setEndDuration(null);
  };

  const durationOptions = Array.from({ length: 30 }, (_, index) => index + 1);

  const sortedByPrice = tourCards.sort((tourA, tourB) => {
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
  }, [router.locale]);

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

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const queryParameters = [];

      queryParameters.push('fields[0]=id');
      queryParameters.push('fields[1]=title');
      queryParameters.push('fields[2]=price');
      queryParameters.push('fields[3]=duration');

      if (selectedCategory) {
        queryParameters.push(
          `filters[classification][title][$eq]=${encodeURIComponent(selectedCategory)}`,
        );
      }

      if (selectedLocation) {
        queryParameters.push(
          `filters[location][name][$eq]=${encodeURIComponent(selectedLocation)}`,
        );
      }

      queryParameters.push('populate[classification][fields][0]=title');
      queryParameters.push('populate[location][fields][0]=name');
      queryParameters.push('populate[mainImage][fields][0]=url');

      if (router.locale) {
        queryParameters.push(
          `populate[localizations][fields][0]=locale&locale=${encodeURIComponent(router.locale)}`,
        );
      }

      const queryString = queryParameters.join('&');

      const response = await axiosApi.get(`tours?${queryString}`);

      console.log('Fetching data with filters:', {
        selectedCategory,
        selectedLocation,
        selectedPriceSort,
        startDuration,
        endDuration,
      });

      setTourCards(response.data.data);
    } catch (e) {
      console.log(e);
      alert('Something went wrong. Please refresh the page!');
    } finally {
      setLoading(false);
    }
  }, [router, selectedLocation, selectedCategory, selectedPriceSort, startDuration, endDuration]);

  useEffect(() => {
    void fetchData();
  }, [
    router.locale,
    fetchData,
    selectedLocation,
    selectedCategory,
    selectedPriceSort,
    startDuration,
    endDuration,
  ]);

  return (
    <>
      <div className={style.titleBlock}>
        <h1>Search</h1>
        <h2>Discover your next adventure</h2>
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
                Location
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

          <div className={style.duration}>
            <h5>Duration</h5>
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
              Clear Duration
            </button>
          </div>
        </div>

        {filteredByDurationTours.length === 0 ? (
          notFound
        ) : (
          <div className={'tourCards'}>
            {filteredByDurationTours.map((tour: Tour) => (
              <Card
                key={tour.id}
                title={tour.title}
                image={tour.mainImage.url}
                id={tour.id}
                classification={tour.classification}
                price={tour.price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilteredTours;

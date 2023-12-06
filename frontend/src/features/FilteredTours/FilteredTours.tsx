import React, { useEffect, useState } from 'react';
import style from './FilteredTours.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { Tour } from '@/type';
import Card from '@/components/Card/Card';

interface Props {
  tours: Tour[];
}

const FilteredTours: React.FC<Props> = ({ tours }) => {
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

  const handleDurationReset = () => {
    setStartDuration(null);
    setEndDuration(null);
  };

  const durationOptions = Array.from({ length: 30 }, (_, index) => index + 1);

  const filteredByLocationAndCategory = tours.filter((tour) => {
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

  const sortedByPrice = filteredByLocationAndCategory.sort((tourA, tourB) => {
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
  }, [selectedLocation, selectedCategory, selectedPriceSort, startDuration, endDuration]);

  const uniqueLocations = Array.from(new Set(tours.map((tour) => tour.location.id)));
  const uniqueClassifications = Array.from(new Set(tours.map((tour) => tour.classification.id)));

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
              {uniqueLocations.map((locationId) => {
                const location = tours.find((tour) => tour.location.id === locationId);
                return (
                  <option key={location?.location.id} value={location?.location.name}>
                    {location?.location.name}
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
              {uniqueClassifications.map((id) => {
                const classification = tours.find((tour) => tour.classification.id === id);
                return (
                  <option
                    key={classification?.classification.id}
                    value={classification?.classification.title}
                  >
                    {classification?.classification.title}
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

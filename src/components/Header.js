

function Header() {
  const hotelInfo = {
      childAndExtraBedPolicy: {
          extraBedProvidedForChild: true,
          extraBedForAdditionalGuest: true,
          extraBedCharge: 1123,
          additionalInfo: "Additional charges may apply",
      },
      _id: "6527dc50de44dd75f5271daf",
      name: "Radisson Blu",
      location: "Bangalore, Karnataka",
      rating: 5,
      amenities: ["Swimming Pool", "Spa"],
      images: [
          "https://unsplash.com/photos/dhwvHSZ124g/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjkwfHxob3RlbHxlbnwwfHx8fDE2OTcwOTMzNjF8MA",
          "https://unsplash.com/photos/7ZD_JIwl410/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjI0fHxob3RlbHxlbnwwfHx8fDE2OTcxMDMzMTN8MA",
          "https://unsplash.com/photos/GM7cm1IC6Ss/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjIwfHxob3RlbHxlbnwwfHx8fDE2OTcwOTMyMDF8MA",
          "https://unsplash.com/photos/YC8qqp50BdA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fHx8MTY5NzA3NzMxM3ww",
          "https://unsplash.com/photos/i4rOpdj444c/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTMyfHxob3RlbHxlbnwwfHx8fDE2OTcwMjA2OTJ8MA",
      ],
      rooms: [
          {
              costDetails: {
                  baseCost: 3619,
                  taxesAndFees: 103,
                  discount: 0,
              },
              roomNumber: 1,
              roomType: "Deluxe",
              costPerNight: 9754,
              roomSize: 350,
              bedDetail: "2 Twin Beds",
              price: 6557,
              cancellationPolicy: "Free Cancellation till 24 hrs before check in",
              meals: [],
              offers: [],
              _id: "6527dc50de44dd75f5271dbc",
          },
          {
              costDetails: {
                  baseCost: 3619,
                  taxesAndFees: 103,
                  discount: 0,
              },
              roomNumber: 2,
              roomType: "Deluxe",
              costPerNight: 9754,
              roomSize: 350,
              bedDetail: "2 Twin Beds",
              price: 6557,
              cancellationPolicy: "Free Cancellation till 24 hrs before check in",
              meals: [],
              offers: [],
              _id: "6527dc50de44dd75f5271dbc",
          },
          {
              costDetails: {
                  baseCost: 3619,
                  taxesAndFees: 103,
                  discount: 0,
              },
              roomNumber: 13,
              roomType: "Deluxe",
              costPerNight: 9754,
              roomSize: 350,
              bedDetail: "2 Twin Beds",
              price: 6557,
              cancellationPolicy: "Free Cancellation till 24 hrs before check in",
              meals: [],
              offers: [],
              _id: "6527dc50de44dd75f5271dbc",
          },
          {
              costDetails: {
                  baseCost: 3619,
                  taxesAndFees: 103,
                  discount: 0,
              },
              roomNumber: 13,
              roomType: "Deluxe",
              costPerNight: 9754,
              roomSize: 350,
              bedDetail: "2 Twin Beds",
              price: 6557,
              cancellationPolicy: "Free Cancellation till 24 hrs before check in",
              meals: [],
              offers: [],
              _id: "6527dc50de44dd75f5271dbc",
          },
          {
              costDetails: {
                  baseCost: 3619,
                  taxesAndFees: 103,
                  discount: 0,
              },
              roomNumber: 13,
              roomType: "Deluxe",
              costPerNight: 9754,
              roomSize: 350,
              bedDetail: "2 Twin Beds",
              price: 6557,
              cancellationPolicy: "Free Cancellation till 24 hrs before check in",
              meals: [],
              offers: [],
              _id: "6527dc50de44dd75f5271dbc",
          },

      ],
  };
  return (
      <div>
          {hotelInfo.rooms.map((room) => (
              <HotelCard key={room._id} hotelInfo={hotelInfo} room={room} />
          ))}
      </div>
  )
}

export default App;



import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useRef, useState } from 'react';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [cities, setCities] = useState([]);
  const [hotels, sethotels] = useState([]);
  const dropdownRef = useRef(null);


  useEffect(() => {
      const fetchCities = async () => {
          const projectId = '88swd7uknpw8';
          try {
              const response = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/city', {
                  headers: { projectId }
              });
              const fetcheddata = await response.json()
              const citiesList = fetcheddata.data.cities.map(entry => entry.cityState.split(',')[0]);
              // console.log(citiesList)
              setCities(citiesList);
              setFilteredCities(citiesList);
          } catch (error) {
              console.error("Error fetching cities:", error);
          }
      };

      fetchCities();
  }, []);

  const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
      setDropdownVisible(true);
      const filtered = cities.filter(city => city.toLowerCase().includes(value.toLowerCase()));
      setFilteredCities(filtered.length > 0 ? filtered : ['City not found']);
  };

  const handleCityClick = async (city) => {
      if (city !== 'City not found') {
          setQuery(city);
          setDropdownVisible(false);

          try {
              const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${city}"}`, {
                  method: 'GET',
                  headers: {
                      'projectId': '88swd7uknpw8',
                      'accept': 'application/json',
                      'Content-Type': 'application/json',
                  }
              });
              const data = await response.json();
              // console.log(data.data.hotels)
              sethotels(data.data.hotels)
          } catch (error) {
              console.error("Error fetching hotels:", error);
          }
      }
  };


  const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownVisible(false);
      }
  };

  const clearSelection = () => {
      setQuery('');
      setFilteredCities(cities);
  };

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

  return {

  }
}
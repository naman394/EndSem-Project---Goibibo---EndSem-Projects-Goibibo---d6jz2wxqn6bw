import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import HotelCard from "./HotelCard";
import Sorting from "./Sorting";

const SearchBar = () => {
  const [sortOption, setSortOption] = useState("");
  const [hotels, setHotels] = useState([]);
  const [query, setQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const projectId = "88swd7uknpw8";
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/bookingportals/city",
          {
            headers: { projectId  },
          }
        );
        const fetchedData = await response.json();

        const citiesList = fetchedData.data.cities.map(
          (entry) => entry.cityState.split(",")[0]
        );
        setCities(citiesList);
        setFilteredCities(citiesList);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleInputChange = (e) => {
    if (!isLoggedIn) {
      window.location.href = "/login";
      return;
    }
    const value = e.target.value;
    setQuery(value);
    setDropdownVisible(true);
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered.length > 0 ? filtered : ["City not found"]);
  };

  const handleCityClick = async (city) => {
    if (!isLoggedIn) {
      window.location.href = "/signin";
      return;
    }
    if (city !== "City not found") {
      setQuery(city);
      setDropdownVisible(false);

      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${city}"}`,
          {
            method: "GET",
            headers: {
              projectId: "d6jz2wxqn6bw",
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setHotels(data.data.hotels);
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSortSelect = (option) => {
    setSortOption(option);
    const sortedHotels = [...hotels];
    switch (option) {
      case "Price (Low to High)":
        sortedHotels.sort((a, b) => {
          const minPriceA = Math.min(...a.rooms.map((room) => room.price));
          const minPriceB = Math.min(...b.rooms.map((room) => room.price));
          return minPriceA - minPriceB;
        });
        break;
      case "Price (High to Low)":
        sortedHotels.sort((a, b) => {
          const maxPriceA = Math.max(...a.rooms.map((room) => room.price));
          const maxPriceB = Math.max(...b.rooms.map((room) => room.price));
          return maxPriceB - maxPriceA;
        });
        break;
      case "Customer Ratings (High to Low)":
        sortedHotels.sort((a, b) => b.rating - a.rating);
        break;
      case "Customer Ratings (Low to High)":
        sortedHotels.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    setHotels(sortedHotels);
  };

  return (
    <div className="relative">
      <nav className="flex items-center justify-between bg-orange-500 p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-white font-bold">City</h1>
          <div className="flex items-center bg-white rounded-md overflow-hidden w-96">
            <input
              type="text"
              className="flex-grow p-2 text-gray-700 focus:outline-none"
              placeholder="Search Here"
              value={query}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          className="bg-white text-blue-500 p-2 w-40 rounded-md transition"
          onClick={() => handleCityClick(query)}
        >
          <b>Search</b>
        </button>
      </nav>
      {dropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute bg-white border border-gray-300 rounded-md mt-1 w-96 z-10"
        >
          {filteredCities.map((city, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
      <Sorting handleSortSelect={handleSortSelect} />
      <div className="mt-4">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard
              key={hotel._id}
              hotelInfo={hotel}
              room={hotel.rooms[0]}
            />
          ))
        ) : (
          <p className="text-gray-700">
            No hotels found for the selected city.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

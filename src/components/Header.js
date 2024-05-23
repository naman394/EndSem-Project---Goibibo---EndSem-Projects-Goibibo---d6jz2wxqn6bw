

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


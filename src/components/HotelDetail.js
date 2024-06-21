import { useParams } from "react-router-dom"


const HotelDetail = () => {

  const obj = useParams()
  console.log(obj)

  return (
    <p>{obj.hotelId}</p>
  )
  
}

export default HotelDetail
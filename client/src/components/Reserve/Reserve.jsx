import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./reserver.css";

const Reserve = ({setOpenModal, hotelId}) => {

    const [selectedRooms, setSelectedRooms] = useState([]);

    const { date } = useContext(SearchContext);

    const { data, loading, error } = useFetch(`http://localhost:5000/hotels/${hotelId}`);

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
            ? [...selectedRooms, value]
            : selectedRooms.filter(item => item !== value)
        )
    }

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const d = new Date(start.getTime());

        let list = [];

        while(d <= end){
            list.push(new Date(d).getTime());
            d.setDate(d.getDate() + 1)
        }

        return list;
    }

    const navigate = useNavigate();

    const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((d) => allDates.includes(new Date(d).getTime()));
        
        return !isFound;
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map( async (roomId) => {
                const response = await fetch(`http://localhost:5000/rooms/availability/${roomId}`,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ date: allDates})
                });
                const result = await response.json();
                return result;
            })
            );
            setOpenModal(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    console.log(data);

  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpenModal(false)}/>
            <span>Select your rooms:</span>
            {data.map(item => (
                <div className="rItem" key={item._id}>
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                    <div className="rSelectRooms">
                        {item.roomNumbers.map(roomNumber => (
                            <div className="room" key={roomNumber._id}>
                                <label>{roomNumber.number}</label>
                                <input 
                                    type="checkbox" 
                                    value={roomNumber._id} onChange={handleSelect}
                                    disabled={!isAvailable(roomNumber)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve
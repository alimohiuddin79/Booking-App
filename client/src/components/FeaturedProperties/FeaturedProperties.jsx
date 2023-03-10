import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Loader from "../Loader/Loader";

const FeaturedProperties = () => {

    const images = [
        "https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/14024796/pexels-photo-14024796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7313084/pexels-photo-7313084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/297984/pexels-photo-297984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    const { data, loading, error } = useFetch("http://localhost:5000/hotels?featured=true&limit=4");

    return (
        <div className="fp">
            {loading ? (<Loader />) : (
                <>
                    {data.length !== 0 &&
                        data.map(item => (
                            <div className="fpItem" key={item._id}>
                                <img src={item.photos[0]} alt="featured item image" className="fpImg" />
                                <span className="fpName">{item.name}</span>
                                <span className="fpCity">{item.city}</span>
                                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                                {item.rating && <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>}
                            </div>
                        ))
                    }
                </>
            )}



        </div>
    )
}

export default FeaturedProperties
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import Loader from "../Loader/Loader";

const Featured = () => {

  const { data, loading, error } = useFetch("http://localhost:5000/hotels/countByCity?cities=berlin,madrid,london");

  return (
    <div className="featured">
      {loading ? <Loader /> : <><div className="featuredItem">
        <img 
          src="https://images.pexels.com/photos/9137769/pexels-photo-9137769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>}
    </div>
  )
}

export default Featured
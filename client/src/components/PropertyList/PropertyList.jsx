import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import "./propertyList.css";

const PropertyList = () => {

    const { data, loading, error } = useFetch("http://localhost:5000/hotels/countByType");

    console.log(data);

    const images = [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    return (
        <div className="pList">
            {loading ? (<Loader />) : (
                <>
                    {data.length !== 0 &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                                </div>
                            </div>
                        ))
                    }
                </>)}
        </div>
    )
}

export default PropertyList
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>2323 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>323 villas</h2>
            </div>
        </div>


        <div className="pListItem">
            <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>3223 resorts</h2>
            </div>
        </div>


        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartment</h1>
                <h2>3432 apartments</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>2343 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
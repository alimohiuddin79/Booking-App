import "./hotel.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Hotel = () => {

  const [sliderNumber, setSliderNumber] = useState(0);

  const [open, setOpen] = useState(false)

  const handleOpen = (i) => {
    setSliderNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSliderNumber;

    if(direction === "l"){
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
      setSliderNumber(newSliderNumber);
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
      setSliderNumber(newSliderNumber);
    }
  }

  const galleryImages = [
    {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288128638.jpg?k=fdb9ae8ccf5185b5294b5d553078939470b2cd86ec0e72c64e64ed03e7a29160&o=&hp=1'},
    {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288128467.jpg?k=faaae9253195bd030f51ec3b443d893c0293564cb93b7fb2a6abfa79c82f42ad&o=&hp=1'},
    {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/306018182.jpg?k=eeda5b63028b1c8029251d3fb01b0cb7be34073c286cf6331e426363100393bf&o=&hp=1'},
    {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288128464.jpg?k=598ce565985985027cb91b266cbba364b08b38aaaccff1606a23dee1172d84c0&o=&hp=1'},
    {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288931234.jpg?k=20c1904ffe7ae1f9973572e584da15ede5a03e430c8c058c0579e70cb2168aa8&o=&hp=1'},
    {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288128725.jpg?k=b02c956fb5dfe6085ed3469dd03141ad1ac9502eb8993cb8d07eab73cbb51692&o=&hp=1'},
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider" onClick={() => {setOpen(false)}}>
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={galleryImages[sliderNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New york</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {galleryImages.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aliquid ratione! Voluptatibus ullam qui nesciunt doloremque consectetur quis consequatur eligendi voluptatum voluptas veritatis modi sit recusandae, culpa fugiat illo aliquid?</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of krakow, this property has an excellent location socre of 9.8!</span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      
    </div>
  )
}

export default Hotel;
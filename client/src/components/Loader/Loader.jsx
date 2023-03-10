import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loader.css";

const Loader = () => {
    return(
        <div className="loadingContainer"><FontAwesomeIcon icon={faSpinner} className='loading'/></div>
    )
}

export default Loader;
import './Travelclass.css'

const TravelClassPassenger = ({ setTravelClass, travelClass }) => {

    const handleSelectValue = (e) => {
        setTravelClass(e.target.value)
    }
    return (
        <div className='travel-class'>
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">1 Passenger, {travelClass} <i className="fas fa-chevron-down"></i></button>
            <select onChange={handleSelectValue} class="form-select dropdown-menu" aria-label="Default select example">
                <h2>Travel Class</h2>
                <option className='dropdown-item' selected>Premium</option>
                <option className='dropdown-item' value="Economy">Economy</option>
                <option className='dropdown-item' value="Upper Class">Upper Class</option>
            </select>
        </div>
    );
};

export default TravelClassPassenger;
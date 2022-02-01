import React from 'react';

const TravelClassPassenger = () => {
    return (
        <div>
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="form-control dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        1 Passengers, Premium
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Premium</option>
                            <option value="1">Economy</option>
                            <option value="2">Upper Class</option>
                        </select>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TravelClassPassenger;
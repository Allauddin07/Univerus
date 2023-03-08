import React from 'react'

const ObjectDetail = ({ data, liquidDensity }) => {

    function calculateDensity(M, L, H, W) {

        return (M / (L * H * W)).toFixed(2)

    }

    //Checking object Shaps
    function checkShape(Heg, Wid, Len) {

        if ((Heg > (2 * Wid)) & (Heg > (2 * Len))) {

            return "Tall"

        }
        else if ((Len > (2 * Heg)) & (Len > (2 * Wid)) || ((Wid > (2 * Len)) & (Wid > (2 * Heg)))) {

            return "Long"

        }
        else if (((Heg < (Wid / 2)) & (Heg < (Len / 2)))) {
            return "Flat"
        }

        else if ((Len < (Heg / 2)) & (Len < (Wid / 2)) || ((Wid < (Len / 2)) & (Wid < (Heg / 2)))) {

            return "Thin"

        }

        else {
            return "Other"
        }

    }

    function checkFloat() {

        var res = calculateDensity(data.mass, data.height, data.width, data.length)
        if (res < liquidDensity){
            return "Yes"
        }
        else{
            return "No"
        }
    }

    // Calculating Dimension of an object
    const dimension = (L, W, H) => {
        return ((L * W * H).toFixed(2))
    }

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item " >name= {data.name}</li>
                <li className="list-group-item">Dimension= {dimension(data.height, data.width, data.length)}</li>
                <li className="list-group-item">Mass= {data.mass}</li>
                <li className="list-group-item">Shape= {checkShape(data.height, data.width, data.length)}</li>
                <li className="list-group-item">Density= {calculateDensity(data.mass, data.height, data.width, data.length)}</li>
                <li className="list-group-item">Float= { 

                   
                    checkFloat()

                }
                </li>
            </ul>
        </div>
    )
}

export default ObjectDetail
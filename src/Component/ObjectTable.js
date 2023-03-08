import React from 'react'

const ObjectTable = (props) => {

    // calculating Density of an object
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


    // click method for the Table row
    const handleRowClick = (rowdata) => {
        props.setData(rowdata)
    }

    return (
        <div>

            <table className="table table-hover">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Shape</th>
                        <th scope="col">Density</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((val, i) => {
                            return (

                                <tr key={i} className="" onClick={() => handleRowClick(val)}
                                 >
                                    <td className="">{val.name}</td>
                                    <td className="">{checkShape(val.height, val.width, val.length)}</td>
                                    <td className=""> {calculateDensity(val.mass, val.height, val.width, val.length)}

                                    </td>



                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ObjectTable


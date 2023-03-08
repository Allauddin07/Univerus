import React, { useEffect, useState } from 'react'
import ObjectDetail from './ObjectDetail';
import ObjectTable from './ObjectTable';
import Search from './Search';






function Shapes() {

    //--------Creat shapes State to hold List of all objects in the Left panel-------
    const [shapes, setShapes] = useState([])

    // store detail of an object and show on the right panel
    const [data, setData] = useState({})

    // create to store search data
    const [inputText, setInputText] = useState("");

    const [float, setFloat]= useState()


    // ----------This function will fetch all data-------------
    async function fetchdata() {


        try {

            const data = await fetch("https://codingtest.univerus.co.nz:4430/shapes.json ", {

                method: "get",

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const res = await data.json()
            console.log(res)
            setShapes(res.objects)
            setFloat(res.liquidDensity)

        }
        catch (error) {

            console.log(error)

        }


    }



    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    //---------Called fetch method in useEffect-----------
    useEffect(() => {
        fetchdata()

    }, [])



    //create a new array by filtering the original array
    const shape = shapes.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return shapes;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }

    })

console.log(float)

    return (
        <>

            <div className='container mt-5'>

                <Search val={inputText} change={inputHandler} />

                <div className='row'>


                    <div className='col-5'>

                        <ObjectTable data={shape} setData={setData} />
                    </div>

                    <div className='col-5 ml-5'>

                        <ObjectDetail data={data} liquidDensity={float} />


                    </div>

                </div>
            </div>


        </>
    )
}

export default Shapes
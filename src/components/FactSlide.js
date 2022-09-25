import React, { useEffect, useState } from 'react'
import axios from "../axios"
import Facts from './Facts';
function FactSlide(props) {
    const [array, setArray] = useState([]);
    const [factStatus, setFactStatus] = useState(false)
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoader(true);
            const req = await axios.get(`/api/v1/${props.anime_name}`);
            setArray(req.data);
            setLoader(false);
        }
        setFactStatus(false);
        fetchData();
    }, [props.anime_name]);
    console.log(array)
    const getFacts = e => {
        e.preventDefault();
        setFactStatus(true)
    }
    return (
        <div className='factslide bg-red-300 w-[80%] flex items-center flex-col gap-2 overflow-x-scroll p-4'>
            <h1 className='text-black font-bold text-3xl mt-2 p-2 border-2 border-white bg-slate-300 rounded-lg'>Anime Facts API</h1>
            <div className={`py-10 w-fit border-2 border-white flex flex-row flex-wrap gap-10 justify-center items-center rounded-2xl bg-yellow-500 drop-shadow-2xl mt-6 ${factStatus ? "pb-12" : ""}`}>
                <div className='flex flex-col gap-10 justify-center items-center w-fit px-12'>
                    <div className="animename text-lg font-bold text-center p-4 rounded-xl bg-yellow-100 h-fit drop-shadow-md">
                        <p>Anime Name : {props.anime_name.split("_").join(" ").toUpperCase()}</p>
                    </div>
                    {!loader ? <img className='w-80' src={array.img} alt={props.anime_name} /> : <p>Loading..</p>}


                    <button onClick={getFacts} className="p-4 bg-red-200 rounded-xl  hover:rounded-2xl hover:scale-105 hover:border-2  transition-all ease-in-out">Get Facts</button>
                </div>

                <div id="facts">
                    {factStatus && <Facts anime_name={props.anime_name} fact_array={array} loader={loader} />}
                </div>
            </div>

        </div >
    )
}

export default FactSlide
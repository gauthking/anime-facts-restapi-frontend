import React, { useEffect, useState } from 'react'
import axios from "../axios"
import FactSlide from './FactSlide';
import { Link, useNavigate } from "react-router-dom"
function Home() {
    const [array, setArray] = useState([]);
    const [click, setClick] = useState(false);
    const [factstate, setFactstate] = useState(false);
    const [animeName, setAnimeName] = useState("")

    const navigate = useNavigate()
    const returnAnimeNames = async () => {
        setClick(!click);
        array.data.map((item) => (
            console.log(item.anime_name)
        ))
    }

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('/api/v1');
            setArray(req.data);
        }
        fetchData();
    }, []);

    const passItemFact = (s) => {
        setFactstate(true);
        setAnimeName(s);
    }


    return (
        <div className='flex flex-col'>
            <div className='main flex'>
                <div className='navbar h-[150vh] bg-yellow-300 p-8 flex flex-col items-center w-80 overflow-x-hidden rounded-r-lg scrollbar-thumb-blue-200 scrollbar-track-gray-100'>
                    <div className='mb-auto border-b-2 p-2 border-black mt-0'>
                        <button onClick={returnAnimeNames} className='bg-black rounded-md p-2 m-4 text-white hover:scale-110 transition-all ease-in-out font-mono'>{!click ? "SHOW ANIME NAMES" : "HIDE ANIME NAMES"}</button>
                    </div>
                    <div className='flex flex-col'>
                        {click &&
                            array.data.map((item) => (
                                <button key={item.anime_id} onClick={() => passItemFact(item.anime_name)} className='bg-gray-800 rounded-md p-2 m-4 text-white font-mono hover:scale-110 transition-all ease-in-out border-2 border-white hover:drop-shadow-xl'>{(item.anime_name).split("_").join(" ").toUpperCase()}</button>
                            ))
                        }
                    </div>
                </div>
                {factstate && <FactSlide anime_name={animeName} />}
            </div >

            <footer className='bg-slate-700 p-4 font-mono font-bold text-center text-yellow-500'>Developed By <a href="https://www.instagram.com/_thegauthamkrishhna._/s"> <p className='font-extrabold text-yellow-100'> @GAUTHAM KRISHNA</p> </a>For Kite Frontend Internship</footer>
        </div>


    )
}

export default Home
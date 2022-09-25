import React, { useEffect, useState } from 'react'
function Facts(props) {

    return (
        <div className='mx-4 p-4 mt-12 h-96 overflow-y-scroll w-96 border-white rounded-lg border-l-4 drop-shadow-2xl'>
            <div className='font-bold text-2xl'>Facts</div>
            {
                props.fact_array.data.map((dat) => (
                    <div className='my-2 bg-slate-200 p-2 rounded-md'>{dat.fact}</div>
                ))
            }
        </div>
    )

}

export default Facts
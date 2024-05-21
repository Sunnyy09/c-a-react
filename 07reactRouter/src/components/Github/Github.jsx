import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-5 bg-black p-4 text-white text-4xl'
    >Github Followers: {data.followers}
    <div className='text-center text-orange-800 text-4xl m-4'>Name: {data.name}</div>
    </div>
    
  )
}

export default Github
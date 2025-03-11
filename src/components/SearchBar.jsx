import React from 'react'

function SearchBar() {
    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            console.log('hello')
        }
    }

    return (
    <div className='w-[100%] relative'>
        <img src='./assets/search.svg' className='size-4 absolute left-3 top-1/2 transform -translate-y-1/2'></img>
        <input 
            type='text'
            placeholder='Search City or Country'
            onKeyDown={searchLocation}
            className='w-[100%] h-[30px] bg-white rounded-full text-black pl-[40px] text-xs'
        />
    </div>
    )
}

export default SearchBar

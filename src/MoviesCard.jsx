import React from 'react'

const MoviesCard = ({movie}) => {
  return (
    <div className="w-[310px] h-[460px] m-6 rounded-xl movie group relative overflow-hidden hover:shadow-lg transform hover: scale-105 border-none transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0,1)] shadow-[0px 13px 10px -7px rgba(0, 0, 0, 0.1)] ">
        <div className='absolute p-4 w-full top-0 text-[#f9d3b4] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
          <p className="font-Roboto">{movie.Year}</p>
        </div>
        <div className='w-full h-full transition-all duration-300 ease-in-out group-hover:h-full group-hover:opacity-30'>
          <img className="w-full h-full object-cover" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>
        <div className="z-2 bg-[#343739] pt-4 pb-6 pl-6 pr-6 absolute bottom-0 right-0 left-0 transition-all duration-300 ease-in-out"> 
          <span className="font-Raleway uppercase text-xs tracking-widest font-medium text-[#f0f0f0]">{movie.Type}</span>
          <h3 className="mt-1 font-Roboto text-[#f9d3b4] text-lg font-bold">{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MoviesCard
import Form from 'next/form'
import React from 'react'

const SearchPage = async({searchParams} : {searchParams: {query?:string };
}) => {
  const {query} = await searchParams;
  
  return (
    <div>
      search for {query}
    </div>
  )
}

export default SearchPage
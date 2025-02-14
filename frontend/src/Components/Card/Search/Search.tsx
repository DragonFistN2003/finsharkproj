import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

type Props = {
  onSearchSubmit: (e:SyntheticEvent) => void,
  search: string | undefined,
  handleSearchClick: (e:ChangeEvent<HTMLInputElement>) => void
}

const Search = (props: Props) => {
    return (
      <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={props.onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={props.search}
            onChange={props.handleSearchClick}
          ></input>
        </form>
      </div>
    </section>
  )
}

export default Search
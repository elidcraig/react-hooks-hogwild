import React from 'react'

function MenuBar({filterHandler, sortHandler}) {
    return (
        <div>
            <span onClick={filterHandler}>Show Me the Greased Hogs</span>
            <span onClick={() => sortHandler('name')}>Sort 'em By Name</span>
            <span onClick={() => sortHandler('weight')}>Sort 'em By Weight</span>
        </div>
    )
}

export default MenuBar
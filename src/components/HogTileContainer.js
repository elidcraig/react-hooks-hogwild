import React, {useState} from 'react'
import HogTile from './HogTile'
import MenuBar from './MenuBar'

function HogTileContainer({hogData}) {
    const [greasedFilter, setGreasedFilter] = useState(false)
    const [currentSort, setCurrentSort] = useState('')

    const handleGreasedFilter = () => setGreasedFilter(!greasedFilter)
    const handleSort = sortBy => setCurrentSort(sortBy)

    let displayedHogs
    greasedFilter ? displayedHogs = hogData.filter(hogObj => hogObj.greased) : displayedHogs = hogData

    switch(currentSort) {
        case 'name':
            displayedHogs.sort(function(a, b) {
                const nameA = a.name
                const nameB = b.name
                if (nameA < nameB) {
                    return -1
                } if (nameA > nameB) {
                    return 1
                }
            })
            break;
        case 'weight':
            displayedHogs.sort(function (a, b) {
                return b.weight - a.weight
            })
            break;
        default:
            console.log('No sorting needed')        
    }

    const hogComponents = displayedHogs.map(hogObject => {
        return (
            <HogTile
            name={hogObject.name}
            image={hogObject.image}
            speciality={hogObject.specialty}
            weight={hogObject.weight}
            isGreased={hogObject.greased}
            highestMedal={hogObject['highest medal achieved']}
            />
        )
    })

    return (
        <div>
            <MenuBar filterHandler={handleGreasedFilter} sortHandler={handleSort}/>
            {hogComponents}
        </div>
    )
}

export default HogTileContainer

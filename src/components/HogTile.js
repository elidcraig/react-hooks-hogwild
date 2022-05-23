import React, {useState} from 'react'

function HogTile({name, speciality, image, weight, isGreased, highestMedal}) {
    const [displayDetails, setDisplayDetails] = useState(false)

    return (
        <div className='pigTile' onClick={() => setDisplayDetails(!displayDetails)}>
            <h3>{name}</h3>
            <img src={image} alt={`pig named ${name}`}/>
            <ul className={displayDetails ? '' : 'hidden'}>
                <li>Speciality: {speciality}</li>
                <li>Weight: {weight}</li>
                <li>Greased: {isGreased ? 'You bet!' : 'Nope!'}</li>
                <li className='achievementText'>Highest Medal Achieved: {highestMedal}</li>
            </ul>
        </div>
    )
}

export default HogTile
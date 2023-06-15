import React, { useState } from 'react'

export default function Date() {
    const [dinner, setDinner] = useState(" Italian Food ")
    const [dinnerColor, setDinnerColor] = useState("")
    const [activity, setActivity] = useState(" Go Bowling ")
    const [activityColor, setActivityColor] = useState("")
    const [closer, setCloser] = useState(" get ice cream ")
    const [closerColor, setCloserColor] = useState("")


    let dinnerArray = [
        " Italian ",
        " Mexican ",
        " Burgers ",
        " Hibatchis ",
        " Take out Chinese ",
        " Steakhouse ",
        " Chilis ",
        " BBQ ",
        " Indian ",
        " Country Cooking ",
    ];
    let activityArray = [
        " go bowling ",
        " see a movie ",
        " got for a walk ",
        " play pool ",
        " go to a concert ",
        " bake together ",
    ];
    let closerArray = [" get ice cream ", " invite back to my place ", " get drinks ", " sit and talk ", " get coffee "]
    
    let colorArray = ["blue", "aqua", "chocolate", "darkcyan", "forestgreen", "hotpink", "indianred", "khaki", "orchid", "orange", "plum", "royalblue", "salmon", "teal", "violet", "wheat", "yellowgreen"]

    let dinnerIndex = Math.floor(Math.random() * dinnerArray.length);
    let activityIndex = Math.floor(Math.random() * activityArray.length);
    let closerIndex = Math.floor(Math.random() * closerArray.length);
    let colorIndex = Math.floor(Math.random() * colorArray.length);
    

    let generateDinner = () => { setDinner(dinnerArray[dinnerIndex]); setDinnerColor(colorArray[colorIndex]) }
    let generateActivity = () => { setActivity(activityArray[activityIndex]); setActivityColor(colorArray[colorIndex]) }
    let generateCloser = () => { setCloser(closerArray[closerIndex]); setCloserColor(colorArray[colorIndex]) }

    let generateDate = () => {
        generateDinner()
        generateActivity()
        generateCloser()
    }

    return (
        <div className='container-fluid excuse-container'>
            <div className='my-5 d-flex flex-column wrap px-5'>
                <h1>Date Night Ideas</h1>
                <ul>
                    <li
                        className="excuseVariable"
                        onClick={() => generateDinner()
                        }
                        style={{ color: dinnerColor }}
                    >{dinner}</li>
                    <li
                        className="excuseVariable"
                        onClick={() => generateActivity()}
                        style={{ color: activityColor }}

                    >{activity}</li>
                    <li
                        className="excuseVariable"
                        onClick={() => generateCloser()}
                        style={{ color: closerColor }}

                    >{closer} </li>
                    </ul>

            </div>
            <button
                className='btn btn-info'
                onClick={(e) => generateDate(e)}>New Date</button>

        </div>
    )
}

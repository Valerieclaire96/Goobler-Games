import React, { useState } from 'react'

export default function Excuse() {
    const [possession, setPossession] = useState(" my car ")
    const [posColor, setPosColor] = useState("")
    const [action, setAction] = useState(" was destroyed ")
    const [actionColor, setActionColor] = useState("")
    const [linking, setLinking] = useState(" by the ")
    const [linkingColor, setLinkingColor] = useState("")
    const [where, setWhere] = useState("in the walmart parking lot ")
    const [whereColor, setWhereColor] = useState("")
    const [adjective, setAdjective] = useState("unhinged ")
    const [adjectiveColor, setAdjectiveColor] = useState("")
    const [perp, setPerp] = useState("giraff ")
    const [perpColor, setPerpcolor] = useState("")
    const [when, setWhen] = useState("last night ")
    const [whenColor, setWhenColor] = useState("")


    let possessionArray = [
        " my favorite blanket ",
        " my last cookie ",
        " my dog's scooter ",
        " my assingment for 4Geeks academy ",
        " my most used and beloved pyrex dish ",
        " my Iwatch ",
        " my phone charger ",
        " my reusable waterbottle ",
        " my Nintendo Switch ",
        " my popsocket ",
        " my gravy boat "
    ];
    let actionArray = [
        " was stole ",
        " got shredded ",
        " was flushed ",
        " got airfryed ",
        " was ran over ",
        " was blended ",
        " got hammer smashed ",
        " was eaten ",
    ];
    let linkingArray = [" by the ", " by a ", " by that ", " by your ", " by the mayor's", " by a neighbor's "]
    let whereArray = [
        "on my back patio ",
        "in my covered wagon ",
        "in the spaceship ",
        "on the stoop ",
        "in front of Panda Express ",
        "on a cheap flight ",
        "in the sims ",
        "in the bad place "
    ];
    let adjectiveArray = ["unhinged ", "silly ", "evil ", "random ", "deranged ", "purple ", "red ", "blue ", "yellow ", "silver ", "rude ", "cruel ", "awful ", "aggressive ", "clever ", "polka-dot ", "striped "]
    let perpArray = [
        "professional pickleball player ",
        "platypus ",
        "puppy ",
        "Funko Pop ",
        "cyclist ",
        "teddy bear ",
        "creepy doll "
    ];
    let whenArray = ["last night ", "in the middle of the night ", "yesterday ", "this weekend ", "this moring ", "just now "]

    let colorArray = ["blue", "aqua", "chocolate", "darkcyan", "forestgreen", "hotpink", "indianred", "khaki", "orchid", "orange", "plum", "royalblue", "salmon", "teal", "violet", "wheat", "yellowgreen"]

    let posIndex = Math.floor(Math.random() * possessionArray.length);
    let actionIndex = Math.floor(Math.random() * actionArray.length);
    let linkingIndex = Math.floor(Math.random() * linkingArray.length);
    let whereIndex = Math.floor(Math.random() * whereArray.length);
    let perpIndex = Math.floor(Math.random() * perpArray.length);
    let whenIndex = Math.floor(Math.random() * whenArray.length);
    let adjectiveIndex = Math.floor(Math.random() * adjectiveArray.length);
    let colorIndex = Math.floor(Math.random() * colorArray.length);

    let generatePossession = () => { setPossession(possessionArray[posIndex]); setPosColor(colorArray[colorIndex]) }
    let generateAction = () => { setAction(actionArray[actionIndex]); setActionColor(colorArray[colorIndex]) }
    let generateLinking = () => { setLinking(linkingArray[linkingIndex]); setLinkingColor(colorArray[colorIndex]) }
    let generateAdjective = () => { setAdjective(adjectiveArray[adjectiveIndex]); setAdjectiveColor(colorArray[colorIndex]) }
    let generateWhere = () => { setWhere(whereArray[whereIndex]); setWhereColor(colorArray[colorIndex]) }
    let generatePerp = () => { setPerp(perpArray[perpIndex]); setPerpcolor(colorArray[colorIndex]) }
    let generateWhen = () => { setWhen(whenArray[whenIndex]); setWhenColor(colorArray[colorIndex]) }

    let generateExcuse = () => {
        generatePossession()
        generateAction()
        generateLinking()
        generateAdjective()
        generateWhere()
        generatePerp()
        generateWhen()
    }

    console.log(posColor)
    return (
        <div className='container-fluid excuse-container'>
            <div className='my-5 d-flex flex-column wrap px-5'>
                <h1>Hey, boss sorry I can't come into work today because, </h1>
                <h3>
                    <span
                        className="excuseVariable"
                        onClick={() => generatePossession()
                        }
                        style={{ color: posColor }}
                    >{possession}</span>
                    <span
                        className="excuseVariable"
                        onClick={() => generateAction()}
                        style={{ color: actionColor }}

                    >{action}</span>
                    <span
                        className="excuseVariable"
                        onClick={() => generateLinking()}
                        style={{ color: linkingColor }}

                    >{linking} </span>
                    <span
                        className="excuseVariable"
                        onClick={() => generateAdjective()}
                        style={{ color: adjectiveColor }}

                    >{adjective} </span>
                    <span
                        className="excuseVariable"
                        onClick={() => generatePerp()}
                        style={{ color: perpColor }}

                    >{perp} </span>
                    <span
                        className="excuseVariable"
                        onClick={() => generateWhere()}
                        style={{ color: whereColor }}

                    >{where} </span>
                    <span
                        className="excuseVariable"
                        onClick={() => generateWhen()}
                        style={{ color: whenColor }}

                    >{when} </span></h3>

            </div>
            <button
                className='btn btn-info'
                onClick={(e) => generateExcuse(e)}>New Excuse</button>

        </div>
    )
}

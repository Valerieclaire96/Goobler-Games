import React, { useState } from 'react'

export default function Madlib() {
    const [occupation, setOccupation] = useState(" Merchant ")
    const [occupationColor, setOccupationColor] = useState("blue")
    const [protagonist, setProtagonist] = useState(" Flippy ")
    const [protagonistColor, setProtagonistColor] = useState("green")
    const [home, setHome] = useState(" the Shire ")
    const [homeColor, setHomeColor] = useState("teal")
    const [villan, setVillan] = useState(" dragon ")
    const [villanColor, setVillanColor] = useState("darkoragne")
    const [base, setBase] = useState(" in the walmart parking lot ")
    const [baseColor, setBaseColor] = useState("darkgreen")
    const [friend, setFriend] = useState(" Sebastian ")
    const [friendColor, setFriendColor] = useState("darkred")
    const [friendQuality, setFriendQuality] = useState(" brave ")
    const [friendQualityColor, setFriendQualityColor] = useState("purple")
    const [barrier, setBarrier] = useState(" over the mountain ")
    const [barrierColor, setBarrierColor] = useState("violet")
    const [secondVillan, setSecondVillan] = useState(" mr.badguy ")
    const [secondVillanColor, setSecondVillanColor] = useState("red")
    const [weapon, setWeapon] = useState(" sword ")
    const [weaponColor, setWeaponColor] = useState("teal")


    let occupationArray = [
        " farmer ",
        " merchant ",
        " blacksmith ",
        " profession pickleball player ",
        " software developer ",
        " bus driver ",
        " salesperson ",
        " chef ",
        " gamer ",
        " artist ",
        " pencil pusher "
    ];
    let protagonistArray = [
        " Flippy ",
        " Frodo ",
        " Hercules ",
        " some dude named Terry ",
        " Roy Wood Jr ",
        " Tony Soprano ",
        " Alvin ",
        " Dill Pickles ",
    ];
    let homeArray = [" the Shire ", " NYC ", " London ", " Republic City ", " Mayberry", " Nappa Valley ", " Netherworld ", " New New York ", " Hyrule ", " Mushroom Kingdom "]
    let villanArray = [
        " fire breathing dragon ",
        " the rampaging Karen ",
        " the vindictive Alien ",
        " the rabinous rhino ",
        " the enraged giraff ",
        " the supervillan ",
        " Dr. Evil ",
        " Crula Devil "
    ];
    let baseArray = [" in the Walmart parking lot ", " scary cave ", " underground layer", " in their mother's basement ", "dungeon ", "the abondoned warehouse ", " in the very large snowglobe ", " area 51 "]
    let friendArray = [
        " Sebastian ",
        " Lief Erkison ",
        " Patrick Star ",
        " Gordon Ramsey ",
        " Bart Simpson ",
        " Joe Shmo ",
        " creepy doll "
    ];
    let friendQualityArray = [" brave ", " wholesome ", " loyal ", " mischievous ", " noble ", " shy and goodhearted "]
    let barrierArray = [" mountain ", " canyon" , " through the perfume department ", " over the sea ", " past the hole to hell ", " beyond the bit ", " through the fog "]
    let secondVillanArray = [" some dude named Fabian ", " Puss in boots ", " Rascel and Racoon", " Timmy the terrible", " the joker", " the goblin", " the wolf from little red riding hood"]
    let weaponArray = [" sword ", " knife", " mace", " throwing stars ", " sling shot ", " fire bending ", " bass knucles "]
    let colorArray = ["blue", "aqua", "chocolate", "darkcyan", "forestgreen", "hotpink", "indianred", "khaki", "orchid", "orange", "plum", "royalblue", "salmon", "teal", "violet", "wheat", "yellowgreen"]

    let occupationIndex = Math.floor(Math.random() * occupationArray.length);
    let protagonistIndex = Math.floor(Math.random() * protagonistArray.length);
    let homeIndex = Math.floor(Math.random() * homeArray.length);
    let villanIndex = Math.floor(Math.random() * villanArray.length);
    let baseIndex = Math.floor(Math.random() * baseArray.length);
    let friendIndex = Math.floor(Math.random() * friendArray.length);
    let friendQualityIndex = Math.floor(Math.random() * friendQualityArray.length);
    let barrierIndex = Math.floor(Math.random() * barrierArray.length);
    let secondVillanIndex = Math.floor(Math.random() * secondVillanArray.length);
    let weaponIndex = Math.floor(Math.random() * weaponArray.length);
    let colorIndex = Math.floor(Math.random() * colorArray.length);





    let generateOccupation = () => { setOccupation(occupationArray[occupationIndex]); setOccupationColor(colorArray[colorIndex]) }
    let generateProtagonist = () => { setProtagonist(protagonistArray[protagonistIndex]); setProtagonistColor(colorArray[colorIndex]) }
    let generateHome = () => { setHome(homeArray[homeIndex]); setHomeColor(colorArray[colorIndex]) }
    let generateVillan = () => { setVillan(villanArray[villanIndex]); setVillanColor(colorArray[colorIndex]) }
    let generateBase = () => { setBase(baseArray[baseIndex]); setBaseColor(colorArray[colorIndex]) }
    let generateFriend = () => { setFriend(friendArray[friendIndex]); setFriendColor(colorArray[colorIndex]) }
    let generateFriendQuality = () => { setFriendQuality(friendQualityArray[friendQualityIndex]); setFriendQualityColor(colorArray[colorIndex]) }
    let generateBarrier = () => { setBarrier(barrierArray[barrierIndex]); setBarrierColor(colorArray[colorIndex]) }
    let generateSecondVillan = () => { setSecondVillan(secondVillanArray[secondVillanIndex]); setSecondVillanColor(colorArray[colorIndex]) }
    let generateWeapon = () => { setWeapon(weaponArray[weaponIndex]); setWeaponColor(colorArray[colorIndex]) }


    let generateExcuse = () => {
        generateOccupation()
        generateProtagonist()
        generateHome()
        generateVillan()
        generateFriend()
        generateFriendQuality()
        generateBase()
        generateBarrier()
        generateSecondVillan()
        generateWeapon()
    }

    return (
        <div className='container-fluid excuse-container'>
            <div className='my-5 d-flex flex-column wrap px-5'>
                <h4>There one was a,</h4>
                <h4>
                    <span
                        className="excuseVariable"
                        onClick={() => generateOccupation()
                        }
                        style={{ color: occupationColor }}
                    >{occupation}</span>
                    named,
                    <span
                        className="excuseVariable"
                        onClick={() => generateProtagonist()
                        }
                        style={{ color: protagonistColor }}
                    >{protagonist}</span>
                    who lived
                    <span
                        className="excuseVariable"
                        onClick={() => generateHome()}
                        style={{ color: homeColor }}

                    >{home}</span>
                    and had a happy peaceful life, until one day
                    <span
                        className="excuseVariable"
                        onClick={() => generateVillan()}
                        style={{ color: villanColor }}

                    >{villan} </span>
                    ravaged
                    <span
                        className="excuseVariable"
                        onClick={() => generateProtagonist()}
                        style={{ color: protagonistColor }}

                    >{protagonist} </span>
                    's beloved ',
                    <span
                        className="excuseVariable"
                        onClick={() => generateHome()}
                        style={{ color: homeColor }}

                    >{home} </span>
                    .  That when
                    <span
                        className="excuseVariable"
                        onClick={() => generateProtagonist()}
                        style={{ color: protagonistColor }}

                    >{protagonist} </span>
                    <span
                        className="excuseVariable"
                        onClick={() => generateHome()}
                        style={{ color: homeColor }}

                    >{home} </span>
                    know what had to be done, the
                    <span
                        className="excuseVariable"
                        onClick={() => generateVillan()}
                        style={{ color: villanColor }}

                    >{villan} </span>
                must be defeated.
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                set out on a journy to find the
                <span
                    className="excuseVariable"
                    onClick={() => generateVillan()}
                    style={{ color: villanColor }}

                >{villan} </span>
                's
                <span
                    className="excuseVariable"
                    onClick={() => generateBase()}
                    style={{ color: baseColor }}

                >{base} </span>
                Before heading off on the adventure
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                aquired the help of his friend,
                <span
                    className="excuseVariable"
                    onClick={() => generateFriend()}
                    style={{ color: friendColor }}

                >{friend} </span>
                the
                <span
                    className="excuseVariable"
                    onClick={() => generateFriendQuality()}
                    style={{ color: friendQualityColor }}

                >{friendQuality} </span>
                partner that always has
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                back. They knew the
                <span
                    className="excuseVariable"
                    onClick={() => generateBase()}
                    style={{ color: baseColor }}

                >{base} </span>
                was just over the
                <span
                    className="excuseVariable"
                    onClick={() => generateBarrier()}
                    style={{ color: barrierColor }}

                >{barrier} </span>
                . When they got a few hours outside of
                <span
                    className="excuseVariable"
                    onClick={() => generateHome()}
                    style={{ color: homeColor }}

                >{home} </span>
                They incountered a
                <span
                    className="excuseVariable"
                    onClick={() => generateSecondVillan()}
                    style={{ color: secondVillanColor }}

                >{secondVillan} </span>
                who demanded
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                and
                <span
                    className="excuseVariable"
                    onClick={() => generateFriend()}
                    style={{ color: friendColor }}

                >{friend} </span>
                hand over their supplies, but
                <span
                    className="excuseVariable"
                    onClick={() => generateFriend()}
                    style={{ color: friendColor }}

                >{friend} </span>
                drew a
                <span
                    className="excuseVariable"
                    onClick={() => generateWeapon()}
                    style={{ color: weaponColor }}

                >{weapon} </span>
                and fought off the
                <span
                    className="excuseVariable"
                    onClick={() => generateSecondVillan()}
                    style={{ color: secondVillanColor }}

                >{secondVillan} </span>
                . After many hours the duo reached the
                <span
                    className="excuseVariable"
                    onClick={() => generateBase()}
                    style={{ color: baseColor }}

                >{base} </span>
                Fear filled
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                's gut, but
                <span
                    className="excuseVariable"
                    onClick={() => generateFriend()}
                    style={{ color: friendColor }}

                >{friend} </span>
                was still confident from the earier victory. The two entered the
                <span
                    className="excuseVariable"
                    onClick={() => generateBase()}
                    style={{ color: baseColor }}

                >{base} </span>
                and soon found the
                <span
                    className="excuseVariable"
                    onClick={() => generateVillan()}
                    style={{ color: villanColor }}

                >{villan} </span>
                who they soon realized was a robot and
                <span
                    className="excuseVariable"
                    onClick={() => generateFriend()}
                    style={{ color: friendColor }}

                >{friend} </span>
                spotted a big red button that would disable the robot, so while fighting off the
                <span
                    className="excuseVariable"
                    onClick={() => generateVillan()}
                    style={{ color: villanColor }}

                >{villan} </span>
                he shouted over to
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                to press the button.
                <span
                    className="excuseVariable"
                    onClick={() => generateProtagonist()}
                    style={{ color: protagonistColor }}

                >{protagonist} </span>
                ran over and smacked the button with all of this might and the two journed back to
                <span
                    className="excuseVariable"
                    onClick={() => generateHome()}
                    style={{ color: homeColor }}

                >{home} </span>
                knowing that the people will be safe-- for the meantime.
            </h4></div>
            <button
                className='btn btn-info'
                onClick={(e) => generateExcuse(e)}>New Story</button>

        </div>
    )
}

import './index.scss'
import {useState, useEffect} from 'react'
import Boopity from "./Boopity.js"

const AnimatedLetters = ({letterClass, strArray, id}) => {
    strArray = strArray[0].split('')
    const temp = id.current
    id.current += strArray.length
    console.log(id.current)

    return (
        <span>
            {
                strArray.map((letter, i) => {
                    return (
                        <span key={letter + i} className={`${letterClass} _${temp + i}`}>
                            <Boopity timing={temp * 100}>{letter}</Boopity>
                        </span>
                    )
                })
            }
        </span>
    )}

export default AnimatedLetters
import React, {useState, useEffect} from 'react'



    

const Boopity = ({children, timing}) => {

    const [isBooped, setIsBooped] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const style = {
        display: 'inline-block',
        animation: isBooped ? 'rubberBand 1s' : 'none',
        color: isHovered ? '#ffd700' : 'white',
        width: children === " " ? '10px' : 'fit-content'
    }

    useEffect(() => {
        if (!isBooped) {
            return
        }

        const timeoutId = window.setTimeout(() => {
                setIsBooped(false)
            }, 1000)

        return () => {
            window.clearTimeout(timeoutId)
        }
        }
    , [isBooped])

    useEffect(() => {
        if (!isHovered) {
            return
            }
            
        const timeoutId = window.setTimeout(() => {
            setIsHovered(false)
            }, 700)
        
        return () => {
            window.clearTimeout(timeoutId)
        }
    }, [isHovered])
            

    const trigger = () => {
        setIsBooped(true)
        setIsHovered(true)
    }

    

    return (
        <span onMouseEnter={trigger} style={style}>
            {children}
        </span>
    )
}

export default Boopity
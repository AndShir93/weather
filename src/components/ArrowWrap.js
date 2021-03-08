import React from 'react'
import arrowSrc from '../img/arrow.svg'
import baloon from '../img/air-balloon.jpg'
import clouds from '../img/clouds.jpg'
import kapli from '../img/kapli_steklo.jpg'

function ArrowWrap(){
    const body = document.body
    const arr = [baloon,clouds,kapli]
    let i = 0
    const nextBg = () => {
        body.style.backgroundImage = `url(${arr[i++]})`
    }
    const prevBg = () => {
        body.style.backgroundImage = `url(${arr[i--]})`
    }
    nextBg()
    return(
        <div className="arrow-wrap">
            <img className="arrow_right" onClick={() => nextBg()} src={arrowSrc} alt='Arrow'/>
            <img className="arrow_left" onClick={() => prevBg()} src={arrowSrc} alt='Arrow'/>
        </div>
    )
}

export default ArrowWrap
import React, { useState } from 'react'


const QuotesBox = ({quoteRandom,buttonClick,colorRandom}) => {
  
  const objStyle = {
    color: colorRandom
  }

  const objStyleBtn = {
    backgroundColor: colorRandom
  }

  return (
    <div>
        <article className='card' style={objStyle}>
            <i className="card__icon fa-solid fa-quote-left"></i>
            <p className='card__quote'>{quoteRandom.quote}</p>
            <h2 className='card__author'>{quoteRandom.author}</h2>
            <button style={objStyleBtn} className='card__btn' onClick={buttonClick}> &gt; </button>
        </article>
    </div>
  )
}

export default QuotesBox
import React from 'react'

const Display = (props) => {
    let {question, index, handleChanger} = props
    const handler = (e) => {
        alert(e.target.value);
        let temp = question.answer === e.target.value ? 1 : 0;
        handleChanger(temp, index);
    }
    console.log(props);
    console.log(props.index,"value")
    return (
        <>
            <div>
                <h2>{index+1}.{question.question}</h2>
            </div>
            <div className='py-2 d-flex justify-content-around' onChange={handler}>
                <input type="radio" value="A" name={index} />{question.options[0]} &nbsp;
                <input type="radio" value="B" name={index} />{question.options[1]} &nbsp;
                <input type="radio" value="C" name={index} />{question.options[2]} &nbsp;
                <input type="radio" value="D" name={index} />{question.options[3]} &nbsp;
            </div><br/><hr/><br/>
            
        </>
    )
}

export default Display

import React from 'react';


const DisplayBox = (props) => {
    return (
        <div>
            {props.allboxes.map((box,idx) => {
                return (
                    <div key ={idx} style={{backgroundColor: box.color, width: box.width+"px", height: box.height+"px"}}>{box.color}</div>
                )
            })}
        </div>
                
                
    )
}

export default DisplayBox

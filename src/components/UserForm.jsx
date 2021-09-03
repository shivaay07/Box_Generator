
import React, {useState} from 'react';

const UserForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        props.createNewBox({color: color, width: width, height: height});
        setColor("");
        setWidth("");
        setHeight("");

        
    }

    return (
        <div style = {{backgroundColor: 'aquamarine', display:'flex'}}>
            <form onSubmit = {createBox}>
                <label>Color:</label>
                <input type ="text" onChange = {(e) => setColor(e.target.value)} value = {color}></input>
                <input type ="color" onChange = {(e) => setColor(e.target.value)} value = {color}></input>
                <label>Width:</label>
                <input type ="number" onChange = {(e) => setWidth(e.target.value)} value = {width}></input>
                <label>Height:</label>
                <input type ="number" onChange = {(e) => setHeight(e.target.value)} value = {height}></input>
                <input type="submit" value="Add Color" style = {{backgroundColor:'teal'}}/>
            </form>
        </div>
    )
}

export default UserForm;

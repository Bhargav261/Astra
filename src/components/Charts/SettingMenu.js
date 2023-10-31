import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const SettingMenu = () => {

    const handleInputClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <>
            <Dropdown drop="start">
                <Dropdown.Toggle className="settingMenuDrop">
                    <img className="settingIcon" src="setting.png"></img>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <input className="form-control" placeholder="Type and select an option" onClick={handleInputClick}/>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <select className="form-control">
                            <option>Options 1</option>
                            <option>Options 2</option>
                        </select>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default SettingMenu
import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';


import { useDispatch } from 'react-redux';
import { updateTitle, updateType } from '../../Redux/HomeSlice';

const SettingMenu = ({ chartKey, title, type }) => {

    const [chartName, setChartName] = useState(title);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value } = e.target;
        setChartName(value);
        dispatch(updateTitle({ title: value, chart: chartKey }))
    }

    const handleInputClick = (event) => {
        event.stopPropagation();
    };

    const handleChangeType = (e) => {
        const { value } = e.target;
        dispatch(updateType({ type: value, chart: chartKey }))

    }

    return (
        <>

            <DropdownButton id="dropdown-basic-button" title={
                <img className="settingIcon" src="setting.png" alt="Setting Icon" />
            }
                drop={'start'}>
                {/* <Dropdown.Item> */}
                <div className="dropMenuItem">
                    <label className="formLabel">Title</label>
                    <input
                        value={chartName}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Type and select an option"
                        onClick={handleInputClick}
                    />
                </div>

                {/* </Dropdown.Item>
                <Dropdown.Item> */}
                <div className="dropMenuItem">
                    <label className="formLabel">Chart</label>
                    <select className="form-control" value={type} onChange={handleChangeType} onClick={(e) => e.stopPropagation()}>
                        <option value="bar">Bar Chart</option>
                        <option value="boxplot">Box Whisker Chart</option>
                        <option value="area">Area Chart</option>
                        <option value="scatter">Scatter Chart</option>
                    </select>
                </div>
                {/* </Dropdown.Item> */}
            </DropdownButton>

            {/* <DropdownButton
                title={
                    <img className="settingIcon" src="setting.png" alt="Setting Icon" />
                }
                >
                <div>
                    <div>
                        <label className="formLabel">Title</label>
                        <input
                            value={chartName}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Type and select an option"
                            onClick={handleInputClick}
                        />
                    </div>
                    <div>
                        <label className="formLabel">Chart</label>
                        <select className="form-control" value={type} onChange={handleChangeType}>
                            <option value="bar">Bar Chart</option>
                            <option value="boxplot">Box Whisker Chart</option>
                            <option value="area">Area Chart</option>
                            <option value="scatter">Scatter Chart</option>
                        </select>
                    </div>
                </div>
            </DropdownButton> */}
            {/* <Dropdown drop="start">
                <Dropdown.Toggle className="settingMenuDrop">
                    <img className="settingIcon" src="setting.png" alt="Setting Icon" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <label className="formLabel">Title</label>
                        <div onClick={(e) => e.stopPropagation()}>
                            <input
                                value={chartName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Type and select an option"
                                onClick={(e) => e.stopPropagation()} // Add this line
                            />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <label className="formLabel">Chart</label>
                        <select className="form-control" value={type} onChange={handleChangeType}   onClick={(e) => e.stopPropagation()}>
                            <option value="bar">Bar Chart</option>
                            <option value="boxplot">Box Whisker Chart</option>
                            <option value="area">Area Chart</option>
                            <option value="scatter">Scatter Chart</option>
                        </select>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
        </>
    )
}

export default SettingMenu;





// import React, { useEffect, useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';

// const SettingMenu = ({ title }) => {

//     const [chartName, setChartName] = useState();

//     useEffect(() => {
//         setChartName(title);
//     }, [title])

//     const handleInputClick = (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//     };

//     const handleChange = (e) => {
//         const { value } = e.target;
//         setChartName(value);
//     }

//     return (
//         <>
//             <Dropdown drop="start">
//                 <Dropdown.Toggle className="settingMenuDrop">
//                     <img className="settingIcon" src="setting.png"></img>
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                     <Dropdown.Item>
//                         <label className="formLabel">Title</label>
//                         <input value={chartName} onChange={handleChange} className="form-control" placeholder="Type and select an option" onClick={handleInputClick} />
//                     </Dropdown.Item>
//                     <Dropdown.Item>
//                         <label className="formLabel">Chart</label>
//                         <select className="form-control">
//                             <option>Options 1</option>
//                             <option>Options 2</option>
//                         </select>
//                     </Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
//         </>
//     )
// }

// export default SettingMenu
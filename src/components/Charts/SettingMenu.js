import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';


import { useDispatch } from 'react-redux';
import { updateTitle, updateType } from '../../Redux/DashboardSlice';

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
                <div className="dropMenuItem">
                    <label className="formLabel">Title</label>
                    <input
                        value={chartName}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Chart Title"
                        onClick={handleInputClick}
                    />
                </div>
                <div className="dropMenuItem">
                    <label className="formLabel">Chart</label>
                    <select className="form-control" value={type} onChange={handleChangeType} onClick={(e) => e.stopPropagation()}>
                        <option value="bar">Bar Chart</option>
                        <option value="boxplot">Box Whisker Chart</option>
                        <option value="area">Area Chart</option>
                        <option value="scatter">Scatter Chart</option>
                    </select>
                </div>
            </DropdownButton>
        </>
    )
}

export default SettingMenu;
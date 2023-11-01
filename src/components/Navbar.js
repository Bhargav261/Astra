import React from "react";

const Navbar = () => {
    return (
        <>
            <div className='nav-bar d-flex justify-content-between'>
                <img src='/Logo_Astra.svg' className="logoImage"></img>
                <div className="profileImage">
                    <span>Hello Admin </span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUXYmbcwcoIYKhXgzZut6BPn_7FsIi1VL5A&usqp=CAU"/>
                </div>
            </div>
        </>
    )
}

export default Navbar;
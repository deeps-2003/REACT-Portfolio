import React from 'react';
import "./mp.css"
import "./rp.css"
import { Link } from "react-router-dom";

const Mainpage = () => {
return (<>
<div>
<h1>This is Page1</h1>
<Link to="/rp" className="abc">Go to Page2</Link>
</div>
</>
);
};
export default Mainpage;
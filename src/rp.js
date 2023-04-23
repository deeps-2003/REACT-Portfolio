import "./mp.css"
import "./rp.css"
import { Link } from "react-router-dom";
const Returnpage = () => {
return (<>
<div>
<h1>This is Page2</h1>
<Link to='/mp' class="abc">Back to Page1</Link>
</div>
</>
);
};
export default Returnpage;
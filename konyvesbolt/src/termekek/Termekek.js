import "./Termekek.css";
import Termek from "./Termek.js";

function Termekek(props) {
    return (
        <div className="termekek">
            {props.termek.map((elem, index) => {
                return (<Termek ertek={elem} key={index} index={index} />)
            })}
        </div>
    );

}
export default Termekek;
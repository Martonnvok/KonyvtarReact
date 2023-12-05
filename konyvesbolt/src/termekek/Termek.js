import "./Termek.css";
function Termek(props) {

    return (<div className="termek">
        <h2>{props.ertek.konyvcim}</h2> 
        <h2>{props.ertek.szerzo}</h2> 
        <h2>{props.ertek.ar}</h2>
        <button>Ok</button>
    </div>)

}
export default Termek;

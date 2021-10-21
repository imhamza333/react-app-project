import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import logItem from "./logItem";
import LogItem from './logItem';
import PreLoder from "./preLoder";
import PropTypes from "prop-types";
import {getLogs} from "./logActions";

const Logs = ({ log: {logs, loading}, getLogs }) => {

    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, []);
 
    // const getLogs = async () => {
    //     setLoading(true);
    //     const res = await fetch("/logs");
    //     const data = await res.json();

    //     setLogs(data);
    //     setLoading(false);
    // }

     if(loading || logs === null) {
        return <PreLoder />
     }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">
                    System Logs
                </h4>
            </li>
            {!loading && logs.length === 0 ?(
                <p className="center">No Logs To Show...</p>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id} /> 
                    )
            )}
        </ul>
    )
}
Logs.propTypes = {
    log: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    log: state.log
})

export default connect(
    mapStateToProps,
    {getLogs}
    )(Logs);







// import React,{useState, useEffect} from 'react';

// const Logs = () => {

//     const [logs, setLogs] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const getLogs = async () => {
//         setLoading(true);
//         const res = await fetch("/logs");
//         const data = await res.json();
        
//             setLogs(data);
//             setLoading(false)
//             }

//     return (
        
//     )
// }

// export default Logs;

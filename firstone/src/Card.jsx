import Button from './assets/Button/Button.jsx'
import PropTypes from 'prop-types'


function Middle(props){

    if(props.isLoggedIn){
        return(
            
                <div className="card">
                    {/* <img src="https://via.placeholder.com/150x150" alt="my picture" /> */}
                    <img src={props.ProfilePic} alt="my picture" />
                    <h2>{props.name} {props.lastname} <span className="online"></span></h2>
                    <h4>{props.desc}</h4>
                    <p>Status: {props.status? "Active": "Inactive"}</p>
                    <Button></Button>
                </div>
        );
    }
    else{
        return(
            
                <div className="card">
                    {/* <img src="https://via.placeholder.com/150x150" alt="my picture" /> */}
                    <img src={props.ProfilePic} alt="my picture" />
                    <h2>{props.name} {props.lastname} <span className="offline"></span></h2>
                    <h4>{props.desc}</h4>
                    <p>Status: {props.status? "Active": "Inactive"}</p>
                    <Button></Button>
                </div>
        );
    }
}

Middle.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
}
Middle.defaultProps = {
    name: "Guest",
    lastname: "",
    desc: "Just a person",
    status: false,
    isLoggedIn: false,
}
export default Middle
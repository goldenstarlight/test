import React from "react";
import '../assets/css/congrate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

class Congrate extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Hamburger size={20} />
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-svg"/>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-form">
              <form>
                <div className="brand">
                  <h5 className="text-center congrate"><b>Congratulations!</b></h5>
                </div>
                <div className="form-group">
                  <h6 className="text-center sucessfully"><b>Your account has been succesfully created</b></h6>
                </div>
                <div className="form-group">
                  <h3 className="text-center production"><b>Start your production</b></h3>
                </div>
                <div className="form-group">
                  <p className="text-center production"><b>You are one step awway from geling<br/>production you need</b></p>
                </div>
                <div className="form-group">
                  <p className="text-center production"><b>Only for <Link to="">19.99/MO</Link> or <Link to="">$199/Yr (40$ Savings)</Link> </b></p>
                </div>
                <div className="arrow">
                  <img src="img/down_arrow.png" />
                </div>
                <div className="congrate-btn-area">
                    <Link to="/plan" className="cogratulation-btn btn">
                      <b>Get protected</b>
                    </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}

export default Congrate;

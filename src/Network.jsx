import { Link } from "react-router-dom";
import './Network.css';

function Network() {
      return (
            <>
                  <h1 className="title">Local Cable Network</h1>
                  <div className="container main">
                        <div className="row">
                              <div className="col-6 img-container">
                                    <img
                                          src="image.png"
                                          alt="Earth from space"
                                          className="full-width-image rounded-4"
                                    />
                              </div>
                              <div className="col-6 cred">
                                    <h1>Bringing You Closer to the World, Right from Home</h1>
                                    <div className="buttons">
                                          <Link to="/provider-login">
                                                <button className="btn btn-primary login-bts">Network Provider</button>
                                          </Link>
                                          <Link to="/user-login">
                                                <button className="btn btn-primary login-bts">User Login</button>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Network;

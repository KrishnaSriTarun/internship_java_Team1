import { Link } from 'react-router-dom';

function Network() {
      return (
            <>
                  <h1>Local Cable Network</h1>
                  <div className="container main">
                        <div className="row">
                              <div className="col-6 img-container">
                                    <img src="image.png" alt="Earth from space" className="full-width-image rounded-4" />
                              </div>
                              <div className="col-6 cred">
                                    <h1>Bringing You Closer to the World, Right from Home</h1>
                                    <div className="container">
                                          <div className="row">
                                                <div className="buttons">
                                                      <Link to="/provider-login">
                                                            <button className="btn btn-primary">Network Provider</button>
                                                      </Link>
                                                      <Link to="/user-login">
                                                            <button className="btn btn-primary">User Login</button>
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Network;

import "./Login.css";

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
                                                      <form method="get" action="/">
                                                            <button className="btn btn-primary">Network Provider</button>
                                                      </form>
                                                      <form method="get" action="/">
                                                            <button className="btn btn-primary">Admin</button>
                                                      </form>
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

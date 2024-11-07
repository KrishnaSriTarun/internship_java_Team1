import "./Login.css";

function ProviderLogin() {
      return (
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center p-5">
                  <div className="row card-container rounded-5">
                        <div className="col-md-6 p-0">
                              <img src="image.png" alt="Earth from space" className="full-width-image rounded-start-5" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                              <div className="login-card p-4">
                                    <h2 className="text-primary">Provider Login</h2>
                                    <form>
                                          <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" id="email" className="form-control rounded-pill input" />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" id="password" className="form-control rounded-pill input " />
                                          </div>
                                          <button type="submit" className="btn btn-primary w-100 rounded-pill mt-4">Login</button>
                                    </form>
                                    <p className="text-center mt-3">
                                          Don`t have an account? <a href="#" className="text-primary">Register</a>
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default ProviderLogin;

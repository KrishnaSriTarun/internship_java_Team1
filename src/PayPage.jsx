
import './PayPage.css'

function payPage() {


      return (
            <div className="report">
                  <img className="icon-report" src="Screenshot 2025-01-25 141117.png" alt="profile" />
                  <div className="report-background">
                        <h2>Mani Cable Network</h2>
                        <button>Request for Activate</button>
                        <div className="form-container">
                              <div className="form-field">
                                    <label>Box id</label>
                                    <input type="text" value="2145766627"  />
                              </div>
                              <div className="form-field">
                                    <label>Name</label>
                                    <input type="text" value="Mani" />
                              </div>
                              <div className="form-field">
                                    <label>Area</label>
                                    <input type="text" value="Kendriya" />
                              </div>
                              <div className="form-field">
                                    <label>Phone</label>
                                    <input type="text" value="8575748758" />
                              </div>
                              <div className="form-field">
                                    <label>Package</label>
                                    <input type="text" value="All Telugu"  />
                              </div>
                              <div className="form-field">
                                    <label>Month</label>
                                    <input type="text" value="December"/>
                              </div>
                              <div className="form-field">
                                    <label>Date</label>
                                    <input type="text" value="2023-12-04"  />
                              </div>
                              <div className="form-field">
                                    <label>Amount</label>
                                    <input type="text" value="₹330"  />
                              </div>
                              <div className="form-field">
                                    <label>Due</label>
                                    <input type="text" value="0" />
                              </div>
                              <button className="done-button">Done</button>
                        </div>
                  </div>
            </div>
      );

};

export default payPage;

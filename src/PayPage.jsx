import './PayPage.css';

function PayPage() {
      return (
            <div className="report">
                  <img className="icon-report" src="Screenshot 2025-01-25 141117.png" alt="profile" />
                  <div className="report-background">
                        <h2>Mani Cable Network</h2>
                        <button className="request-btn">Request for Activate</button>
                        <div className="form-container">
                              {[
                                    { label: "Box ID", value: "2145766627" },
                                    { label: "Name", value: "Mani" },
                                    { label: "Area", value: "Kendriya" },
                                    { label: "Phone", value: "8575748758" },
                                    { label: "Package", value: "All Telugu" },
                                    { label: "Month", value: "December" },
                                    { label: "Date", value: "2023-12-04" },
                                    { label: "Amount", value: "₹330" },
                                    { label: "Due", value: "0" },
                              ].map((field, index) => (
                                    <div className="form-field" key={index}>
                                          <label>{field.label}</label>
                                          <input type="text" value={field.value} readOnly />
                                    </div>
                              ))}
                        </div>
                        <button className="done-button">Done</button>
                  </div>
            </div>
      );
}

export default PayPage;

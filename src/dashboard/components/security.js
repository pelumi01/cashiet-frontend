const Security = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                <div className="card mt-0">
                    <div className="card-body">
                    <div className="dashboard-box">
                        <div className="dashboard-title">
                        <h4>settings</h4>
                        </div>
                        <div className="dashboard-detail">
                        <div className="account-setting">
                            <h5>Notifications</h5>
                            <div className="row">
                            <div className="col">
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Allow Desktop Notifications
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Enable Notifications
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Get notification for my own activity
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" defaultValue="option4" />
                                <label className="form-check-label" htmlFor="exampleRadios4">
                                    DND
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="account-setting">
                            <h5>deactivate account</h5>
                            <div className="row">
                            <div className="col">
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios1" id="exampleRadios4" defaultValue="option4" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios4">
                                    I have a privacy concern
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios1" id="exampleRadios5" defaultValue="option5" />
                                <label className="form-check-label" htmlFor="exampleRadios5">
                                    This is temporary
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios1" id="exampleRadios6" defaultValue="option6" />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                    other
                                </label>
                                </div>
                                <button type="button" className="btn btn-solid btn-xs">Deactivate
                                Account</button>
                            </div>
                            </div>
                        </div>
                        <div className="account-setting">
                            <h5>Delete account</h5>
                            <div className="row">
                            <div className="col">
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios3" id="exampleRadios7" defaultValue="option7" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios7">
                                    No longer usable
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios3" id="exampleRadios8" defaultValue="option8" />
                                <label className="form-check-label" htmlFor="exampleRadios8">
                                    Want to switch on other account
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="radio_animated form-check-input" type="radio" name="exampleRadios3" id="exampleRadios9" defaultValue="option9" />
                                <label className="form-check-label" htmlFor="exampleRadios9">
                                    other
                                </label>
                                </div>
                                <button type="button" className="btn btn-solid btn-xs">Delete Account</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Security;
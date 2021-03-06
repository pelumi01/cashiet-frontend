const ResetPassword = () => {
    return (
        <>
            {/* breadcrumb start */}
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="page-title">
                                <h2>Reset Password</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">login</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumb End */}


            {/* section star */}
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Reset Password</h3>
                            <div className="theme-card">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label for="review">Password</label>
                                        <input type="password" className="form-control" id="review"
                                            placeholder="Enter your password" required="" />
                                    </div><a href="#" className="btn btn-solid">Login</a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p><a href="#"
                                    className="btn btn-solid">Create an Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section end */}
        </>
    )
}

export default ResetPassword;
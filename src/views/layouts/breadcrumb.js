import { Link } from "react-router-dom";

const Breadcrumb = (props) =>{

    return (
        <>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="page-title">
                                <h2>{props.title}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                    <li className="breadcrumb-item active">{props.breadcrumbItem}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb;
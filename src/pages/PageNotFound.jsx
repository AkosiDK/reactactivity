import { NavLink } from "react-router-dom";

function PageNotFound() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-dark">
                    Page Not Found
                </h1>
                <NavLink to="/" className="btn">
                    Home
                </NavLink>
            </div>
        </div>
    )
}

export default PageNotFound;
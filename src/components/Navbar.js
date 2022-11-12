import { Link } from "react-router-dom"


function Navbar() {
    return (
            <nav className="navbar navbar-dark bg-dark text-white p-2">
                <i> LAB - WikiCountries</i>
                <Link className="navbar-brand" to="/">Home</Link>
            </nav >
    )
}

export default Navbar
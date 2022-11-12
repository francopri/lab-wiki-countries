// import { Link } from "react-router-dom";

function HomePage({ allProjects }) {

    return (
        <div className="container">
            <h1>HOME PAGE</h1>

            {/* {
                allProjects.map((project) => {
                    return (

                        <div className="project" key={project.id}>
                            <p>{project.student}</p>
                            <p>{project.projectName}</p>
                            <small>{project.id}</small>
                            <Link to={`/projects/${project.id}`}>Mais detalhes</Link>
                        </div>
                    )
                })
            }
       */}
        </div>
    )
}

export default HomePage;
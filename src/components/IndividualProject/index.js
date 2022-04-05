// == Imports
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProjectCard from 'src/components/Projects/ProjectCard';

// == Component
const IndividualProject = () => {
  const { id } = useParams();
  const projectsList = useSelector((state) => state.project.projectsList);
  const project = projectsList.find((p) => p.id == id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="individualProject">
      <ProjectCard {...project} />
    </div>
  );
};

export default IndividualProject;

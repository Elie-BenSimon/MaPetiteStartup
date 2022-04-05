// == Imports
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProjectCard from 'src/components/Projects/ProjectCard';

// == Component
const IndividualProject = () => {
  const { slug } = useParams();
  const project = useSelector((state) => state.project.projectsList.find((p) => p.id === slug));
  console.log(project);

  return (
    <div className="individualProject">
      <ProjectCard {...project} />
    </div>
  );
};

export default IndividualProject;

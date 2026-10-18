import { getProjectsData } from '@/lib/projects';
import MyLink from './MyLink';

export default function Projects() {
  const projects = getProjectsData();

  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project.id}>
            <MyLink url={project.url} text={project.title} options={{ isExternal: true }} />
          </li>
        );
      })}
    </ul>
  );
};
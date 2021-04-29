import type { Project } from 'ROOT';

import Image from 'next/image';

interface Props {
  project: Project;
}

export default function ProjectItem({ project }: Props) {
  return (
    <a
      href={`/projects/${project._id}`}
      className="project-item d-flex justify-content-center align-items-center"
    >
      <div className="project-item-overlay d-flex justify-content-center align-items-center">
        <div className="project-item-overlay-circle d-flex justify-content-center align-items-center">
          <span className="mt-1">VIEW</span>
        </div>
      </div>
      {/* { In the future create smaller images 350x250} */}
      <div className="project-image d-flex justify-content-center align-items-center">
        <Image
          src={`https://jordanbarbosa.com/static/images/projects/${project?._id}-min.png`}
          alt={`Preview of project ${project.name}`}
          width="450"
          height="200"
        />
      </div>
    </a>
  );
}

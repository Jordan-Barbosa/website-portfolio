import type { GetStaticProps } from 'next';

import { buildClient, getProjects } from '@utils/api';
import { Children, useMemo } from 'react';
import { useProjects } from '@hooks/projects';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from '@components/ui/Loader';
import ProjectItem from '@components/ui/ProjectItem';

export default function Projects() {
  const { isLoading, data: projects, isError } = useProjects();

  const projectsList = useMemo(() => {
    const hasProjects = !!projects?.length;

    if (!isLoading && hasProjects && !isError) {
      return Children.toArray(projects!.map((project) => <ProjectItem project={project} />));
    }

    if (isLoading && !hasProjects && !isError) {
      return <Loader />;
    }

    if (!isLoading && !hasProjects && isError) {
      return 'Error...';
    }

    if (!isLoading && !hasProjects && !isError) {
      return (
        <div className="no-projects d-flex justify-content-center align-items-center">
          <h1>
            NO PROJECTS <i className="far fa-frown" />
          </h1>
        </div>
      );
    }

    return <Loader />;
  }, [isLoading, projects, isError]);

  return (
    <Jumbotron fluid className="page">
      <Container fluid>
        <Row>
          <Col
            xs="12"
            lg={{ span: 10, offset: 1 }}
            className="d-flex justify-content-center mt-5 flex-wrap"
          >
            {projectsList}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const client = buildClient();

  await queryClient.prefetchQuery('projects', () => getProjects(client));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};

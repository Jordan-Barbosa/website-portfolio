import type { GetServerSideProps } from 'next';

import { dehydrate, DehydratedState } from 'react-query/hydration';
import { buildClient, getProject } from '@utils/api';
import { Children, useMemo } from 'react';
import { QueryClient } from 'react-query';
import { useProject } from '@hooks/projects';
import { useRouter } from 'next/router';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function SelectedProject() {
  const { query } = useRouter();
  const { isLoading, data: project } = useProject({ projectId: query.projectId as string });

  const technologies = useMemo(
    () =>
      Children.toArray(
        project?.technology?.map((item: string) => (
          <span key={item} className="mr-2 mb-2 selected-tech-item">
            {item}
          </span>
        ))
      ),
    [project?.technology]
  );

  return (
    <Jumbotron fluid className="page d-flex justify-content-center align-items-center">
      <Container className="mt-4 selected">
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <Row>
              <Col
                xs="12"
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3 }}
                className="d-flex justify-content-center selected-image"
              >
                <Image
                  src={`https://jordanbarbosa.com/static/images/projects/${project?._id}.png`}
                  height="350"
                  width="540"
                />
              </Col>
            </Row>

            <Row>
              <Col
                xs="12"
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3 }}
                className="selected-body"
              >
                <Row>
                  <Col className="mt-4 text-center selected-title">
                    <h1>{project?.name}</h1>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Description:</h6>
                    <p>{project?.desc}</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs="auto">
                    <h6>Technologies used:</h6>
                    <div className="d-flex flex-wrap justify-content-between">{technologies}</div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col xs="12">
                    {project?.isHeroku ? (
                      <Alert variant="warning">
                        <i className="fas fa-info-circle" />
                        &nbsp;
                        <span className="font-weight-bold">NOTE</span>: This is a heroku app, it may
                        take long to load?
                      </Alert>
                    ) : (
                      ''
                    )}

                    <ButtonGroup className="selected-actions">
                      <Button href={project?.github}>
                        <i className="fab fa-github mr-1" /> Code
                      </Button>
                      <Button href={project?.url}>
                        <i className="fas fa-external-link-alt mr-2" />
                        Visit
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Jumbotron>
  );
}

export const getServerSideProps: GetServerSideProps<
  { dehydratedState: DehydratedState },
  { projectId: string }
> = async (ctx) => {
  const { projectId } = ctx.params!;
  const queryClient = new QueryClient();
  const client = buildClient();

  await queryClient.prefetchQuery(['project', `${projectId}`], () =>
    getProject({ projectId, client })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

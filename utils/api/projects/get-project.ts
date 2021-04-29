import type { Project } from 'ROOT';

import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export type GetProjectReturnData = Project | Record<string, never>;

export type GetProjectError = AxiosError<{ errors: { message: string }[] }>;

type GetProjectProps = {
  projectId: string;
  client?: AxiosInstance;
};

export async function getProject({ projectId, client }: GetProjectProps) {
  const url = `/api/projects/${projectId}`;

  const { data }: AxiosResponse<GetProjectReturnData> = await (client
    ? client.get(url)
    : Axios.get(url));

  return data;
}

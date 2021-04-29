import type { Project } from 'ROOT';

import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export type GetProjectsReturnData = Project[];

export type GetProjectsError = AxiosError<{ errors: { message: string }[] }>;

export async function getProjects(client?: AxiosInstance) {
  const url = `/api/projects`;

  const { data }: AxiosResponse<Project[]> = await (client ? client.get(url) : Axios.get(url));

  return data;
}

import { getProjects, GetProjectsReturnData, GetProjectsError } from '@utils/api/projects';
import { useQuery, UseQueryOptions } from 'react-query';

type UseProjectsProps<
  TQueryFnData = GetProjectsReturnData,
  TError = GetProjectsError,
  TData = TQueryFnData
> = {
  options?: UseQueryOptions<TQueryFnData, TError, TData>;
};

const DEFAULT_OPTIONS = {
  refetchOnWindowFocus: false,
};

export function useProjects({ options = DEFAULT_OPTIONS }: UseProjectsProps = {}) {
  return useQuery('projects', () => getProjects(), options);
}

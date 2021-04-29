import { getProject, GetProjectReturnData, GetProjectError } from '@utils/api/projects';
import { useQuery, UseQueryOptions } from 'react-query';

type UseOrderProps<
  TQueryFnData = GetProjectReturnData,
  TError = GetProjectError,
  TData = TQueryFnData
> = {
  projectId: string;
  options?: UseQueryOptions<TQueryFnData, TError, TData>;
};

const DEFAULT_OPTIONS = {
  refetchOnWindowFocus: true,
};

export function useProject({ projectId, options = DEFAULT_OPTIONS }: UseOrderProps) {
  return useQuery(['project', projectId], () => getProject({ projectId: `${projectId}` }), {
    enabled: !!projectId,
    ...options,
  });
}

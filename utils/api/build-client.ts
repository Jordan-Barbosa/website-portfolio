import Axios from 'axios';

export function buildClient() {
  const isServer = typeof window === 'undefined';

  const axiosConfig = isServer
    ? { baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local' }
    : { baseURL: '/' };

  return Axios.create(axiosConfig);
}

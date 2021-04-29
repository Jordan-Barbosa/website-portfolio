import type { NextApiRequest, NextApiResponse } from 'next';

import { PROJECTS } from './data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const projects = PROJECTS;

    res.status(200).json(projects);
  }
}

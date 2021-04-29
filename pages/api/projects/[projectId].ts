import type { NextApiRequest, NextApiResponse } from 'next';

import { PROJECTS } from '../data';

export default function projectHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { projectId } = req.query;

    const project = PROJECTS.find((projectItem) => projectItem._id === projectId);

    res.status(200).json(project);
  }
}

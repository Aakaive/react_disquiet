// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'data', 'post.json');

const getPosts = () => {
  const postsData = fs.readFileSync(postsFilePath, 'utf8');
  return JSON.parse(postsData);
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const posts = getPosts();
    res.status(200).json(posts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

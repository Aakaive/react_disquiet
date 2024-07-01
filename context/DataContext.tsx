'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  userId: string;
  name: string;
  task: string;
  employee: string;
  profileImage: string;

}

interface Comment {
  commentNum: number;
  userId: string;
  content: string;
  date: string;
}

interface Post {
  postNum: number;
  userId: string;
  date: string;
  title: string;
  content: string;
  upvote: number;
  view: number;
  category: string;
  tags: string[];
  comments: Comment[];
}

interface DataContextProps {
  users: User[];
  posts: Post[];
  loading: boolean;
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps>({ users: [], posts: [], loading: true });

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  // post 추가하기.
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch('/data/user.json');
      const postsResponse = await fetch('/data/post.json');

      const usersData = await usersResponse.json();
      const postsData = await postsResponse.json();

      setUsers(usersData);
      setPosts(postsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ users, posts, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

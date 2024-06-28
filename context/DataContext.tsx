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
  data: any[];
  users: User[];
  loading: boolean;
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps>({ users: [], data: [], loading: true });

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch('/data/user.json');
      const response = await fetch('/data/user.json');

      const usersData = await usersResponse.json();
      const result = await response.json();

      setUsers(usersData);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ users, data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

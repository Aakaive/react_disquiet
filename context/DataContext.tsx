import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface DataContextProps {
  data: any[];
  loading: boolean;
  error: string | null;
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps>({ data: [], loading: true, error: null });

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('useEffect triggered'); // useEffect가 실행되는지 확인
    const fetchData = async () => {
      try {
        const response = await fetch('/data/post.json');
        console.log('Fetch response:', response); // 응답 로그 추가
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Fetch result:', result); // 결과 로그 추가
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
        console.log('Fetch completed'); // 데이터 로딩이 완료되었는지 확인
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

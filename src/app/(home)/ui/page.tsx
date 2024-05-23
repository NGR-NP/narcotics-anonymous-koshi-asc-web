'use client';
import { Button } from '@/components/ui/button';
import action, { getMettingLists } from './action';
import { useCallback, useEffect, useState } from 'react';

export default function UiPage() {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [changedData, setChangedData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const revalidate = () => {
    action();
    setIsLoading(true);
    setTimeout(() => {
      CurrentDataF();
    }, 5000);
  };
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json',
        { cache: 'no-cache' },
      );
      const d = await response.json();
      d && setData(d);
    } catch (err) {
      console.error(err);
    }
  }, []);

  async function CurrentDataF() {
    setIsLoading(true);
    const cdata = await getMettingLists();
    setCurrentData(cdata);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
    CurrentDataF();
  }, [fetchData]);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(currentData)) {
      setChangedData(true);
    } else setChangedData(false);
  }, [data, currentData]);
  return (
    <div className="flex flex-col gap-4 p-4">
      <pre className="bg-content1 overflow-x-scroll">
        {JSON.stringify(data, null, 2)}
      </pre>
      <div
        className={`${changedData ? 'bg-red-500' : 'bg-green-500'} px-3 py-2 w-max`}
      >
        {changedData
          ? 'Data and currentData do not match'
          : 'Data and currentData match'}
      </div>
      <Button onClick={fetchData}>
        check again
      </Button>
      <p className="text-center">or</p>
      <Button
        className={changedData ? 'bg-red-500' : ''}
        onClick={revalidate}
      >
        revalidate
      </Button>
    </div>
  );
}

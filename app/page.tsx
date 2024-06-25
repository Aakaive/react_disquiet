import Image from "next/image";
import Top from '@/components/layout/Top';
import Main from '@/components/main/Main';
import { DataProvider } from "@/context/DataContext";

export default function main() {
  const repeatText = () => {
    const elements = [];
    for (let i = 0; i < 50; i++) {
      elements.push(<h1 key={i}>hello-world!</h1>);
    }
    return elements;
  };
  return (
    <div className="relative">
      <Top />
      <div className="h-full">
        <Main />
      </div>
    </div>
  );
}

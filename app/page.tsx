import Image from "next/image";
import Top from '@/components/Top';

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
        {repeatText()}
      </div>
    </div>
  );
}

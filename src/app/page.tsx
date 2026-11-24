import { BottomTab } from "@/components/bottom-tab";
import { Gnb } from "@/components/gnb";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Gnb />
      <main className="flex flex-1 items-center justify-center p-6">
        <h1 className="text-2xl font-semibold">소스바</h1>
      </main>
      <BottomTab />
    </div>
  );
}

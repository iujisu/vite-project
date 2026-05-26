import { PencilLine } from "lucide-react";
import { AppSidebar } from "../components/common"
import { SkeletonHotTopic, SkeletonNewTopic } from "../components/skeleton";
import { Button } from "../components/ui";
import { useNavigate } from "react-router";

function App() {
  const navigate=useNavigate();
  
  return (
    <main className="w-full h-full min-h-[720px] flex p-8 gap-6">
      <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 items-center">
        <Button variant={"destructive"} className="!py-5 !px-6 rounded-full" onClick={() =>navigate("/create-topic")}>
          <PencilLine/>나만의 토픽 작성
        </Button>
      </div>
      <AppSidebar />
      <section className="flex-1">
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src="/assets/Bunny Hug Emoji.gif" alt="empty" className="w-7 h-7" />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">HOt 토픽</h4>
            </div>
            <p className="md:text-base text-muted-foreground">지금 가장 인기있는 클래스는 무엇일까요?</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <SkeletonHotTopic />
            <SkeletonHotTopic />
            <SkeletonHotTopic />
            <SkeletonHotTopic />  
          </div>  
        </div>  
        <div className="w-full flex flex-col gap-6 mt-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/assets/Bunny Hug Emoji.gif" alt="empty" className="w-7 h-7" />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">New 토픽</h4>
            </div>
            <p className="md:text-base text-muted-foreground">새로운 클래스는 무엇일까요?</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <SkeletonNewTopic/> 
            <SkeletonNewTopic/>
            <SkeletonNewTopic/> 
            <SkeletonNewTopic/>
          </div>  
        </div>  

      </section>
    </main>
  );
}

export default App


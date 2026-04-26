import { AppFooter, AppHeader, AppSidebar } from "./components/common"
import { SkeletonHotTopic, SkeletonNewTopic } from "./components/skeleton";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
          <AppHeader />
            <div className="container">
              <main className="w-full h-full min-h-[720px] flex p-8 gap-6">
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
            </div>
          <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App


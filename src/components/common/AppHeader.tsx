import { Separator } from "../ui";

function AppHeader() {
    return (
        <header className="fixed top-0 z-20 w-full flex items-center justify-center bg-[#121212]">
            <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py3">
                {/* 로그인 네비게이션 메뉴 ui */}
                <div className="flex items-center gap-5">
                    <img src="https://github.com/9diin.png" alt="logo" className="w-8 h-8 cursor-pointer" />
                    <div className="flex items-center gap-5">
                        <div className="font-semibold">토픽 인사이트</div>
                        <Separator orientation="vertical" className="!h-4" />
                        <div className="font-semibold">프트롤리오</div>              
                    </div>
                </div>
                {/* 로그인 ui */}

                <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500 ">로그인</div>
            </div>
        </header>
    );

}

export { AppHeader };


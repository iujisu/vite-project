import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { CLASS_CATEGORY } from "@/constants/category.contant";

function AppSidebar() {
    return (
    <aside className="min-w-60 w-60 flex flex-col gap-6">
        <div className="flex items-center gap-2">
            {/* Shadcn UI의 Typography h4 컴포넌트 그대로 사용 */}
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">카테고리</h4>
            <ChevronDown className="mt-1" />
        </div>
        <div className="w-full flex flex-col gap-2" >
        {CLASS_CATEGORY.map((category) => (
            <Button key={category.id} className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500" variant={"ghost"}>{category.icon}{category.label}</Button>
        ))}
        </div>
    </aside>
    );
}

export { AppSidebar };

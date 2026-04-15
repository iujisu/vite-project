import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
function App() {

  const [value,setValue] = useState<number>(0);
  const [name,setName] = useState<string>("");
  const [nickname,setNickname] = useState<string>("");

  const increment =() => setValue(value +1);
  const decrement =() => setValue(value -1);

  const onChangeName =(event:React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeNickname=(event:React.ChangeEvent<HTMLInputElement>) => setNickname(event.target.value);

  useEffect(() => {
    console.log("컴포넌트가 랜터링 될 떼마다 특정 작업을 수행합니다.");
    console.log("name:",name);
    console.log("nickname:",nickname);
  });

  useEffect(() => {
      console.log("name이라는 상태 값이 변할 경우에만 수행합니다.");
      console.log("updated name: ", { name });
  }, [name]);

  useEffect(() => {
        console.log("뒷 정리하기");
        console.log("updated name: ", { name });

        return () => {
            console.log("cleanup");
            console.log(name); // ""
        };
    }, [name]);

  return (
    <div>
      <p>
        현재 카운터 값은:<b>{value}</b>
      </p>
      <Button onClick={increment}>1 증가</Button>
      <Button onClick={decrement}>1 감소</Button>
      <div>
        name :<Input type="text" placeholder="Enter your username" onChange={onChangeName} />
        nickname :<Input type="text" placeholder="Enter your nickname" onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름 : {name}</b>
        <b>별명 : {nickname}</b>
      </div>
    </div>
  )
  
}

export default App

import { useState } from "react"
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

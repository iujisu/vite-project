import { useEffect, useMemo, useState,useCallback} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Timer() {
  const [count ,setCount]=useState<number>(0);
  useEffect(() => {
      const id= setInterval(() => {
        console.log("time Interval 실행됨");
        setCount((c) => c+1);
      },1000)

      return () => {
          console.log("time cleanup: 이전 타이머 제거됨");
          console.log(id); // ""
      };
  }, []);
  
  return <div> 카운트 : {count}</div>
}

const getAverage=(numbers:number[]) => {
  console.log("평균 값을 계산중");
  if(numbers.length === 0){
    return 0;
  }
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}

function App() {
  const [list,setList]=useState<number[]>([]);
  const [number,setNumber] =  useState<string>("");

  const onInsert =() => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
  }

  const aberage = useMemo(() => getAverage(list),[list]);

  const [visible, setVisible] =useState<boolean>(true);

  const [value,setValue] = useState<number>(0);
  const [name,setName] = useState<string>("");
  const [nickname,setNickname] = useState<string>("");

  const increment =() => setValue(value +1);
  const decrement =() => setValue(value -1);


  const onChangeName =(event:React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeNickname=(event:React.ChangeEvent<HTMLInputElement>) => setNickname(event.target.value);

 const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    }, [number]); // 컴포넌트가 처음 렌더링 될 때만 함수를 생성한다.
 

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
      <div>
        <Input type="text" value={number} onChange={onChange}  />
      </div>

      <div>
        <Input type="text" value={number} onChange={(event) =>setNumber(event.target.value)} />
        <Button onClick={onInsert}>등록</Button>
        <ul>
          {list.map((item:number,index:number) => {
              return <li key={index}>{item}</li>;
          })}
        </ul>
           <div>
            <b>평균 갑 :{getAverage(list)}</b>
           </div>
           <div>
            <b>평균 갑 useMemo :{aberage}</b>
           </div>
      </div>
      <div>
        {visible && <Timer/>}
        <Button onClick={() => setVisible(!visible)}>{visible ? "숨기기" : "보이기"}</Button>
      </div>
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
function usrCallback(arg0: { event: any; }) {
  throw new Error("Function not implemented.");
}


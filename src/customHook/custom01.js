import React from 'react';
import { useInput } from './useInput'

function displayMsg(msg){
  alert(msg);
}

function CHone (){
  // useInput hook 생성 전 코드
  // const [value, setValue] = useState('');

	// const handleChange = (e) => {
	// 	setValue(e.target.value);
	// };

  // const handleSubmit = ()=>{
  //   alert(value);
  //   // setValue('');
  // }

  const [value, handleChange, handleSubmit] = useInput('시작',displayMsg);
  const [value1, handleChange1, handleSubmit1] = useInput('종료',displayMsg);

	return (
		<div>
			<h1>customHook</h1>
			<p>{value}</p>
			<p>{value1}</p>
			<input type="text" onChange={handleChange} value={value} />
			<button onClick={handleSubmit}>확인</button>
      <br />
			<input type="text" onChange={handleChange1} value={value1} />
			<button onClick={handleSubmit1}>확인</button>
		</div>
	);
}

export default CHone;
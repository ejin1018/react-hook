// import { useEffect, useState } from 'react';
import { useFetch } from "./useFetch";

const url = 'https://jsonplaceholder.typicode.com'

function CHtwo() {
  // const [data,setData] = useState(null);

  // const fetchUrl = (type)=>{
  //   fetch(url + '/' + type)
  //   .then((res)=>res.json())
  //   .then((res)=>{return setData(res)})
  // }
  
	// useEffect(() => {
  //   fetchUrl('users');
	// }, []);

  const {data,fetchUrl} = useFetch(url,'users');

  console.log('🧷',data);
	return (
		<div>
			<h1>useFetch</h1>
      <button onClick={()=>{fetchUrl('users')}}>users</button>
      <button onClick={()=>{fetchUrl('photos')}}>photos</button>
      <button onClick={()=>{fetchUrl('comments')}}>comments</button>
      <button onClick={()=>{fetchUrl('albums')}}>albums</button>
      <pre>
        {JSON.stringify(data,null,2)}
      </pre>
		</div>
	);
}

function CHthree(){
  const {data:userData} = useFetch(url,'users');
  const {data:commentData} = useFetch(url,'comments');

  return(
    <>
      <hr />
      <h2>Custom Hook 3</h2>
      <h3>User</h3>
      <pre>
        {userData && JSON.stringify(userData[0],null,2)}
      </pre>
      <h3>Comment</h3>
      <pre>
        {commentData && JSON.stringify(commentData[0],null,2)}
      </pre>
    </>
  )
}

export {CHtwo, CHthree};

import React,{useState,useEffect,useRef} from 'react';
import { useSpring, animated } from '@react-spring/web'
import './spring.css'

function Number({n}){
  const {number} = useSpring({
    from:{number:0}, // 시작값
    number:n, // prop 설정
    config: {mass:1, tension: 20, friction:26},
  });
  return (<animated.div>{number.to((n)=>{return n.toFixed(0)})}</animated.div>)
}

function Spring(){
  const numberRef = useRef(null);
  const [isAnimated,setIsAnimated] = useState(false);
  useEffect(()=>{
    const onScroll = ()=>{
      const currentPosition = window.pageYOffset+window.innerHeight
      const targetPosition = numberRef.current.offsetTop - numberRef.current.offsetHeight/3;
      if(!isAnimated && currentPosition >= targetPosition){
        console.log('여긴가')
        setIsAnimated(true)
      }
    }
    window.addEventListener('scroll',onScroll)
  },[])
  return(
    <div className='wrap'>
      <h1 ref={numberRef}>Spring
        {isAnimated && <Number n={100} />}
      </h1>
    </div>
  )
}

export default Spring;
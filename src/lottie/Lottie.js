import React from 'react';
import lottie from 'lottie-web';
import jirung from './jirung.json';

const Lottie = ()=>{
  const jirungs = React.useRef();
  React.useEffect(()=>{
    lottie.loadAnimation({
      container:jirungs.current,
      animationData:jirung,
    })
  },[])
  return(
    <div ref={jirungs} style={{width:150,height:150}}>
    </div>
  )
}

export default Lottie;
function Title(){
    let name = "sreevatsa";
    return(
    <div>
      {/* <h1>Hello World!</h1>
      <h3>I am the Description</h3> */}

      <p>Hi!, {name.toUpperCase()}</p>
      <p>2 * 2 = {2*2}</p>
    </div>
    )
  }
  
//export
export default Title;
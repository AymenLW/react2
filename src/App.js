import './App.css';
import './style.css';
import x from "./cc.jpg"
function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
<span  className="title">
<h1 >aymen louéti</h1> </span>

<br/>

<img src={x}/>

<br/>

<img src="/ab.jpg"/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4"/>

</video>


    </div>
  );
}

export default App;

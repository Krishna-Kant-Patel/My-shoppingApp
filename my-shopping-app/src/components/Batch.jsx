import {useState} from 'react';

function Batch(){
    const [count, setCount] = useState(0);

function increasetwice(){
    setCount(count+1);
    setCount(count+1);
}
    return<>
    <div>
        <p>{count}</p>
        <button onClick={increasetwice} >Increase</button>
    </div>
    </>
}
export default Batch;
import { ReactDOM } from 'react';
import React , {useState,useRef} from 'react';
import style from './Footer.css'
import nameImg from '../../Img/id-card.png'
import jobImg from '../../Img/job-search.png'

function Footer({itemsHandle}) {
    const [name,setName] = useState('');
    const [job,setJob] = useState('');
    // localStorage.clear()
    let data = [[]];
    const dataHandle = () => {
        if(name.length > 0 && job.length > 0 ){
            if(localStorage.getItem("data")){
                data = JSON.parse(localStorage.getItem('data'))
                data.push([name,job])
                localStorage.setItem('data' , JSON.stringify(data))
            }else{
                localStorage.setItem("data" , JSON.stringify([[name,job]]))
            }
        }
        setName("")
        setJob("")
        itemsHandle()
    }
    return (
        <footer>
            <div className="contain">
                <h2>Add New</h2>
                <form>
                    <div className="name">
                        <label htmlFor="name">
                            <img src= {nameImg} />
                            <span>name</span>
                        </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="job">
                        <label htmlFor="job">
                            <img src= {jobImg} />
                            <span>job</span>
                        </label>
                        <input type="text"  value={job} onChange={(e) => setJob(e.target.value)}/>
                    </div>
                    <div className="btn">
                        <button onClick={() => dataHandle()} type='button'>Submit</button>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default Footer;

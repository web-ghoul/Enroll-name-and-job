import { ReactDOM  } from 'react';
import React from 'react';
import style from './list.css'
import name from '../../Img/id-card.png'
import job from '../../Img/job-search.png'
import remove from '../../Img/trash-bin.png'

function List({data , deleteItem}) {
  return (
    <section className='list'>
        <div className="contain">
            <ul className='head'>
                <li>
                  <img src= {name} />
                  <span>name</span>
                </li>
                <li>
                  <img src= {job} />
                  <span>job</span>
                </li>
                <li>
                  <img src= {remove} />
                  <span>remove</span>
                </li>
            </ul>
            <div className="items" >
              {data.map((arr)=>(
                <ul className = 'item' id = {arr[2]}>
                      <li>{arr[0]}</li>
                      <li>{arr[1]}</li>
                      <li>
                        <button onClick={(e) => deleteItem(e.currentTarget.parentElement.parentElement.id)}>Delete</button>
                      </li>
                  </ul>
              ))}
            </div>
        </div>
    </section>
  );
}

export default List;

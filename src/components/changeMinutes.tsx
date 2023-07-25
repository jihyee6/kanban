import React from 'react';
import { hoursSelector, minuteState } from '../atom';
import { useRecoilState, useRecoilValue } from 'recoil';

function ChangeMinutes() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hoursSelector);
    const onMinuteChange = (event:React.FormEvent<HTMLInputElement>) => {
      setMinutes(+event.currentTarget.value);
    }
    const onHoursChange = (event:React.FormEvent<HTMLInputElement>)=>{
      setHours(+event.currentTarget.value);
    }
  
    return (
      <div>
        <input type="number" value={minutes} onChange={onMinuteChange} placeholder='Minutes' />
        <input type="number" value={hours} onChange={onHoursChange}  placeholder='Hours' />
        
      </div>
    );
}

export default ChangeMinutes;
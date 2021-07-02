import React, {useState, useEffect} from 'react'

const TimePicker = () => {
    const [min, setmin] = useState([]);
    const minutes = () => {
        let buffer = [];
        for(var i = 0; i <= 60; i++){
            var c = i;
            buffer.push(<option id={i} value={String(i)}>{i < 10 ? `0${i}`: i}</option>)
        }
        setmin(buffer);
    }
    useEffect(() => {
        minutes();
    }, [])
    return (
        <div class=" w-1/2 h-full bg-white">
            <div class="flex">
                <select name="hours" class="bg-transparent text-sm">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
                </select>
                <span class="text-sm mr-1">:</span>
                <select name="minutes" class="bg-transparent text-sm mr-1">
                {min.map(item => item)}
                </select>
                <select name="ampm" class="bg-transparent text-sm">
                <option value="am">AM</option>
                <option value="pm">PM</option>
                </select>
            </div>
        </div>
    )
}

export default TimePicker

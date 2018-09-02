import React from 'react'

const drumPadData = [{id: 'Q', color: 'red', clip: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/tabla/66[kb]dha-noslide.aif.mp3'},
{id: 'W', color: 'orange', clip: ''},
{id: 'E', color: 'yellow', clip: ''},
{id: 'A', color: 'blue', clip: ''},
{id: 'S', color: 'green', clip: ''},
{id: 'D', color: 'indigo', clip: ''},
{id: 'Z', color: 'violet', clip: ''},
{id: 'X', color: 'red', clip: ''},
{id: 'C', color: 'red', clip: ''}]

const Display = ({})=>(
    <div id='display'></div>
);

const DrumPad = ({id, color, clip})=>(
    <div key = {id}
        className = 'drum-pad'
        style={{backgroundColor: color}}>
        {id}
        onClick={()=>{}}
        <audio id = {id}
        className='clip'
        src={clip}/>
    </div>
);

//document.getElementById('123').play()

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return 
        (<div>
            <Display />
            {drumPadData.map(el=><DrumPad {...el} />)}
        </div>);
    }
}

export default DrumMachine;
import React, {Component} from 'react'

const drumPadData = [{id: 'Q', color: 'rgb(148, 0, 211)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/229[kb]hardtabla-Closed-Open-Ge.wav.mp3'},
{id: 'W', color: 'rgb(75, 0, 130)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/306[kb]hardtabla-Loud-Ge.wav.mp3'},
{id: 'E', color: 'rgb(0, 0, 255)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/310[kb]hardtabla-Open-Ge.wav.mp3'},
{id: 'A', color: 'rgb(0, 0, 125, 125)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/128[kb]hardtabla-Open-Na.wav.mp3'},
{id: 'S', color: 'rgb(0, 255, 0)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/185[kb]hardtabla-Pressed-Ge.wav.mp3'},
{id: 'D', color: 'rgb(255, 255, 0)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/50[kb]hardtabla-Sliding-Ge.wav.mp3'},
{id: 'Z', color: 'rgb(255, 127, 0)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/95[kb]hardtabla-Softer-Sur.wav.mp3'},
{id: 'X', color: 'rgb(255, 50 , 10)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/123[kb]hardtabla-Sur.wav.mp3'},
{id: 'C', color: 'rgb(255, 0 , 0)', clip: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Hard%20Tabla/28[kb]hardtabla-Te.wav.mp3'}]

const Display = ({selectedDrum})=>(
    <div id='display'
     style={{height: '60px',
        fontSize: '40px'}}>
     {selectedDrum? selectedDrum: ''}
     </div>
);

const DrumPad = ({id, color, clip, drumClick})=>(
    <div
        id={clip}
        className = 'drum-pad'
        style={{backgroundColor: color, 
            display: 'inline-block', 
            borderRadius: '100px',
            lineHeight: '100px',
            width: '100px', 
            height: '100px',
            textShadow: '1px 1px white'}}
        onClick={drumClick.bind(null, id)}>
        {id}
        <audio id = {id}
        className='clip'
        src={clip}/>
    </div>
);

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedDrum: null};

        this.drumClick = this.drumClick.bind(this);
    }

    drumClick(drum) {
        this.setState({selectedDrum: drum});
        let currentDrum = document.getElementById(drum);
        currentDrum.currentTime=0;
        currentDrum.play();
    }

    componentWillMount() {
        document.body.addEventListener('keydown', function(e) {
            if (!e.key) {
                return;
            }
            if (['Q','W','E','A','S','D','Z','X','C'].includes(e.key.toUpperCase())) {
                this.drumClick(e.key.toUpperCase());
            }
        }.bind(this))
    }

    render() {
        return (
        <div>
            <Display selectedDrum={this.state.selectedDrum}/>
            {drumPadData.map(el=><DrumPad {...el} 
                key = {el.id}
                drumClick={this.drumClick}/>)}
        </div>);
    }
}

export default DrumMachine;

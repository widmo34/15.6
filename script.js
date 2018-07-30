class Stopwatch extends React.Component{
        
    
        constructor(props) {
            super(props);
            this.state = {
                running: false,
                display: this.props.display,
                
            };
        }
   


        /*this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times); */
    

    reset(){
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print(){
        this.display.innerText = this.format(this.times)
    }

    format(times){
        return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`
    }

    start(){
        if(!this.running){
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step(){
        if(!this.running) return;
        this.calculate();
        this.print();   
    }

    calculate(){
        this.times.miliseconds += 1;
        if(this.times.miliseconds >= 100){
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }

        if(this.times.seconds >= 60){
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }


    stop(){
        this.running = false;
        clearInterval(this.watch);
    }


    pad0(value) {
        let result = value.toString();
        if(result.length < 2){
            result = '0' + result;
        }
        return result;
    }

    render(){
        /*return
        
        <nav className={'controls'}>
        <a href='#' className={'button'} id='start' onClik={this.start}>Start</a>
        <a href='#' className={'button'} id='stop' onClik={this.stop}>Stop</a>
        </nav>
        <div className={'stopwatch'}></div>
        <ul className={'results'}>
      
        </ul>*/
    }



} // end of constructor 

const display = document.querySelector('.stopwatch')
ReactDOM.render(<Stopwatch display={display} />, document.getElementById('app'));


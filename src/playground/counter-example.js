class Counter extends React.Component {
    constructor(props){
        super(props);
        this.hendleAddOne = this.hendleAddOne.bind(this);
        this.hendleMinusOne = this.hendleMinusOne.bind(this);
        this.hendleReset = this.hendleReset.bind(this);

        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        try {
            const data = localStorage.getItem('count');
            const count = parseInt(data,10);
    
            if(isNaN(count)) {
                this.setState(() => ({count}));
            }    
        }
        catch(e){
            //do nothing
        }
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count',this.state.count);
        }
    }
    hendleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }


    hendleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    hendleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.hendleAddOne}>+1</button>
                <button onClick={this.hendleMinusOne}>-1</button>
                <button onClick={this.hendleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'));
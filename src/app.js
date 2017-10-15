
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { options: props.options };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    componentDidMount(){
        try{
            const json =localStorage.getItem('options');
             const options=JSON.parse(json);

             if(options){this.setState(()=>({options}));}
        }catch(e){

        }



    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !==this.state.options.length){
            console.log('did update');
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }

    }
    componentWillUnmount(){

    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        // console.log('opvionttono '+option);
        this.setState(({options})=> ({
            options:options.filter((option)=>option !== optionToRemove 
        )}));
    }
    handleAddOption(option) {
        if (!option) {
            return ' Enter valid value to add an item';
        } else if (this.state.options.includes(option)) {
            return 'this option already exists';
        }

        this.setState(({ options }) => ({
            options: [...options, option]
        }));
    }
    handlePick() {
        const selectedOption = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(selectedOption)
    }
    render() {
        // const title = 'Indecision';
        const subtitle = "Put your life in the hands of a computer";
        // const options=['one','two','three'];
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => (
    <div>
        <button
            disabled={!props.hasOptions}
            onClick={props.handlePick}>
            What should I do?
                </button>
    </div>
);

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length === 0 && <p>please add an option to get started.-¡</p>}
        {props.options.map(option =>
            <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />)}
    </div>
);
const Option = (props) => (
    <div>
        Option:  {props.optionText}
        <button onClick={(e)=>{return props.handleDeleteOption(props.optionText) }}>remove</button>
    </div>

);

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = { error: undefined };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
       if(!error){ e.target.elements.option.value = '';}
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
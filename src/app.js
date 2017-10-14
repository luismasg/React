
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { options: [] };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleAddOption(newOption) {
        if (!newOption) {
            return ' Enter valid value to add an item';
        } else if (this.state.options.includes(newOption)) { return 'this option already exists'; }

        this.setState((prevState) => ({ options: [...prevState.options, newOption] }));
    }
    handlePick() {
        const selectedOption = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(selectedOption)
    }
    render() {
        const title = 'Indecision';
        const subtitle = "Put your life in the hands of a computer";
        // const options=['one','two','three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {this.props.options.map(option => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        e.target.elements.option.value = '';
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

class Option extends React.Component {
    render() {
        return (
            <div>
                Option:  {this.props.optionText}
            </div>

        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
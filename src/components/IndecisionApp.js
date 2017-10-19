import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = { options:[] };
    // constructor(props) {
    //     super(props);
    //     this.state = { options: props.options };
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    // }
   
    handleDeleteOptions =()=> {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption=(optionToRemove)=> {

        this.setState(({options})=> ({
            options:options.filter((option)=>option !== optionToRemove 
        )}));
    };
    handlePick =()=> {
        const selectedOption = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(selectedOption)
    };
    handleAddOption=(option) =>{
        if (!option) {
            return ' Enter valid value to add an item';
        } else if (this.state.options.includes(option)) {
            return 'this option already exists';
        }

        this.setState(({ options }) => ({
            options: [...options, option]
        }));
    };
   
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
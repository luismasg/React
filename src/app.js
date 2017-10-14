// import React,{Component} from 'react';
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        // console.log(this.props.options.length);
        
        return (
            <div>
                
                {this.props.options.map(option=><Option key={option} optionText={option} />)}
                    
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                adOption Component Here
            </div>
        );
    }
}
class IndecisionApp extends React.Component{
    render(){
        const title='Indecision';
        const subtitle="Put your life in the hands of a computer";
        const options=['one','two','three'];
        return (
            <div>
                 <Header title={title} subtitle={subtitle}/> 
                <Action />  
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
               Option:  {this.props.optionText}
            </div>
            
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

// let visible=false;
// const changeVisibilty=()=>{
//     visible=!visible;
//     renderf();
// };
// const renderf=()=>{
//     const template=(
//     <div>
//         <h1>Toggle Visibility</h1>
//         <button onClick={changeVisibilty}>{visible?'Hide details':'Show details'}</button>
//         {visible&&<p>hey, these are some details options you can see </p>}
        
//     </div>
   
// );
//     ReactDOM.render(template,document.getElementById('app'));
// };
// renderf();
class Visible extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
        this.handleVisibilityToggle=this.handleVisibilityToggle.bind(this);
    }
    handleVisibilityToggle(){
        this.setState((prevState)=>{
            return {
                visible:!prevState.visible
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visible?'Hide Details':'Show Details'}</button>
                {this.state.visible && <p>'these are the details I was talking about . you can hide them if you wish'</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visible />,document.getElementById('app'));
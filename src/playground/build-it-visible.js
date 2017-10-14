
let visible=false;
const changeVisibilty=()=>{
    visible=!visible;
    renderf();
};
const renderf=()=>{
    const template=(
    <div>
        <h1>Toggle Visibility</h1>
        <button onClick={changeVisibilty}>{visible?'Hide details':'Show details'}</button>
        {visible&&<p>hey, these are some details options you can see </p>}
        
    </div>
   
);
    ReactDOM.render(template,document.getElementById('app'));
};
renderf();
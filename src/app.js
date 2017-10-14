console.log('app.js is running');

const app={
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options:[]
};
const onFormSubmit=(e)=>{
    e.preventDefault();
  const option=e.target.elements.option.value;
if(option && !app.options.includes(option)){
    app.options.push(option);
    e.target.elements.option.value='';
    renderf();
}

};
const removeAll=()=>{
    app.options=[];
    renderf();
};
const onMakeDecision =()=>{
    const randomNum=Math.floor( (Math.random() * app.options.length));
    const option=app.options[randomNum];
    alert(option);
};

const renderListItems=()=>app.options.map(option=><li key={option}>{option}</li>);
const appRoot=document.getElementById('app');

const renderf=()=>{
    const template=(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0? 'Here are your options':'no Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>remove all</button>
        <ol>
           {app.options.map(option=><li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
    </form>
    </div>
   
);
    ReactDOM.render(template,appRoot);
};
renderf();
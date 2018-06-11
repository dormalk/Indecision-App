console.log('App.js is running');

//JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life on a computer',
    options: [],
    getSubtitle() {
        if(this.subtitle) {
            return <p>{this.subtitle}</p>;
        }    
    },
    getAllOptions() {
        return this.options.map((option) => <li key={option}>{option}</li>)
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';  
        appTemplateRender();
    }
};

const onRemoveAll = () => {
    app.options = [];
    appTemplateRender();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const isEmpty = (array) => { return array.length? false : true};
const appRoot = document.getElementById('app');

const appTemplateRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.getSubtitle()}
            <p>{app.options.length ? app.options.length : 'No options'}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <button disabled={isEmpty(app.options)} onClick={onMakeDecision}>What should I do?</button>
            <ul>{app.getAllOptions()}</ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);        
}

appTemplateRender();
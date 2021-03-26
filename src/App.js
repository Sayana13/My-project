import './App.css';
import Display from "./Display";
import ButtonArea from "./ButtonArea";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div>
            <h1 className='header'>
                Planner
                <p className="fst-italic"> 12 Months of weekly & monthly calendars </p>
            </h1>
            <Display/>
            <ButtonArea/>
        </div>
    );
}

export default App;

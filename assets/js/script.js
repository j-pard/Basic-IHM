//Variable

const MIN = 0;
const MAX = 400;
const ALERT = 'Simulation finie';

const RDM = () => {
    let nbr = (Math.floor(Math.random()* Math.floor(10)));
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    console.log(nbr*plusOrMinus);
}

// START/ STOP

document.getElementById('autoVoltage').addEventListener('click', ()=>{
    let timerRdm = setInterval(() => RDM(), 1000);
    console.log(timerRdm);

    document.getElementById('voltageLed').addEventListener('click', ()=> {
    setTimeout(() => { clearInterval(timerRdm);});
    })
})

// VAriation slider Voltage

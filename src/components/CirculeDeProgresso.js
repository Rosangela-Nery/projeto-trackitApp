import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function CirculeDeProgresso() {
    let porcentagem = 50;

    return (
        <div style={{width:"91px", height:"91px", paddingBottom:"45px"}}>
            <CircularProgressbarWithChildren 
            value={porcentagem}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: '#52B6FF',
                textColor: 'white',
                pathColor: 'white',
                trailColor: 'transparent',
                textSize: '18px',
            })}
            >
                <h1 style={{
                    color: 'white',
                    fontSize: '18px',
                    marginTop: -5,
                    display: 'flex',
                    justifyContent: 'center',
                }}>Hoje</h1>
            </CircularProgressbarWithChildren>
        </div>
    );
}
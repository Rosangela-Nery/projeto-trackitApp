import { useEffect } from 'react';
import styled from 'styled-components';

export default function Week({value, setCatchWeek, weekDays, setWeekDays, setWeekDaysList}) {

    const newList = [
        { id: 0, day: 'D', estado: 'descelecionado'},
        { id: 1, day: 'S', estado: 'descelecionado'},
        { id: 2, day: 'T', estado: 'descelecionado'},
        { id: 3, day: 'Q', estado: 'descelecionado'},
        { id: 4, day: 'Q', estado: 'descelecionado'},
        { id: 5, day: 'S', estado: 'descelecionado'},
        { id: 6, day: 'S', estado: 'descelecionado'}
    ];

    useEffect (() => {
        setWeekDays(newList)
        setWeekDaysList(newList)
    }, []);

    function selectedDay(id) {
        const newWeek = weekDays.map((item) => {
        if(item.id === id) {
            if(item.estado === 'descelecionado') {
                if(!value.includes(id)) {
                    const guardar = [...value, id]
                    setCatchWeek(guardar);
                    return {
                        id: item.id,
                        day: item.day,
                        estado: 'selecionado'
                    }
                }
            }
            else if(item.estado === 'selecionado') {
                const retirar = value.filter((item) => item != id)
                setCatchWeek(retirar)
                return {
                    id: item.id,
                    day: item.day,
                    estado: 'descelecionado'
                }
            }
        }
        return {
            id: item.id,
            day: item.day,
            estado: item.estado,
        }
       })
       setWeekDays(newWeek)
    }

    return (
        weekDays.map((item, index) => {
            if(item.estado === 'descelecionado') {
                return(
                    <DeselectedDay key={index}>
                        <span onClick={() => selectedDay(item.id)}>{item.day}</span>
                    </DeselectedDay>
                );
            }
            else if(item.estado === 'selecionado') {
                return(
                    <SelectedDay key={index}>
                        <span  onClick={() => selectedDay(item.id)}>{item.day}</span>
                    </SelectedDay>
                );
            }
        })
    );

}

const DeselectedDay = styled.div`

    span {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
        margin-right: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

const SelectedDay = styled.div`

    span {
        width: 30px;
        height: 30px;
        border: 1px solid #CFCFCF;
        background-color: #CFCFCF;
        border-radius: 5px;
        color: white;
        margin-right: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

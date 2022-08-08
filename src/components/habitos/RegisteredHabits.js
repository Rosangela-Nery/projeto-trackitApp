import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegisteredHabits({Registered, item, index, token, setRemove, weekDays, setWeekDays}) {

    const navigate = useNavigate();

    function removeList(id) {

        const config = {
            headers: {
                Authorization: 
                    `Bearer ${token}`,
            },
        };

        const promiseDelete = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        

        promiseDelete.then((res) => {
            setRemove(res.id)
        })
        promiseDelete.catch(((err) => {
            navigate('/')
        }))
    }

    return (
        <Registered key={index}>
            <TitleETrashCan>
                <p>{item.name}</p>
                <img src="../images/lixeira.svg" onClick={() => {removeList(item.id)}}/>
            </TitleETrashCan>
            <WeekRegistered>
                {weekDays.map((item, index) => {
                    return(
                        <span key={index}>
                            {item.day}
                        </span>
                    );
                })}
            </WeekRegistered>
        </Registered>
    );
}

const TitleETrashCan = styled.div`
    width: 330px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    p {
        font-size: 20px;
    }

    img {
        width: 13px;
        height: 15px;
        margin-top: 15px;
        margin-right: 6px;
        cursor: pointer;
    }
`

const WeekRegistered = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 20px;

    span {
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #DBDBDB;
    margin-left: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }
`
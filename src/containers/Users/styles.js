import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${background}");
    background-size:cover;
    backdrop-filter: blur(45px);


    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
    
   
`;
export const Image = styled.img`
    margin-top: 30px;
    

`;


export const User = styled.li`
   display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    width:342px ;
    height: 58px;
    margin-top: 20px;


    p{
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        line-height: 28px;
        color: #ffffff;


    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`
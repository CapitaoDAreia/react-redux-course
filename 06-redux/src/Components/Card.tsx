import styled from 'styled-components'

export interface CardProps {
    children?: JSX.Element | string | JSX.Element[]
    title: string
    headColor: string
    bodyColor: string
}

const CardContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const CardHeader = styled.div`
    display: flex;  
    justify-content: center;
    color: #FFF;
    background-color: ${props => props.color ?? 'black'};
`;

const CardTitle = styled.h2`
    padding: 5px;
    flex: 1;
`;

const CardContent = styled.div`
    padding: 20px;
    background-color: ${props => props.color ?? 'black'};
`;


const Card=(props: CardProps)=>{
    return(
        <CardContainer>
            <CardHeader color={props.headColor}>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent color={props.bodyColor}>
                {props.children}
            </CardContent>
        </CardContainer>
    )
}

export default Card
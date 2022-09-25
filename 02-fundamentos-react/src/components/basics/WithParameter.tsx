/*
    As propriedades são valores que podem ser passados para o componente quando invocados e utilizados na renderização.
    Neste exemplo, o componente WithParameter é uma função que recebe props (o objeto props está acordado em uma interface em TS).

    Como podemos ver na interface, o componente espera receber titulo, sibtitulo e uma prop de teste no ato da declaração, veja o exemplo
    no arquivo index.tsx

    AS PROPRIEDADES SÃO SOMENTE LEITURA, OU SEJA, NÃO É POSSÍVEL ALTERAR O SEU VALOR DEPOIS QUE SÃO SETADOS

*/

interface WithParameterProps {
    title: string
    subtitle: string
    propsTestType?: string | number
} 

export default function WithParameter(props: WithParameterProps){

    const propsTestType = typeof props.propsTestType === 'string' ? 'é string' : 'é number';

    console.log(propsTestType) 
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h3>{propsTestType}</h3>
        </div>
    )
}

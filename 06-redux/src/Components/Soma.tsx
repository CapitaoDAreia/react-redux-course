import Card, { CardProps } from "./Card";
import { connect } from 'react-redux'

interface MediaProps extends CardProps {
  max: number
  min: number
}

const Soma = (props: MediaProps) => {

  const {max, min} = props

  return (
    <Card title="Soma dos Números" headColor={props.headColor} bodyColor={props.bodyColor}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            flex: "1",
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
          }}
        >
            <span>Soma:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state: any) =>{
  return {
    max: state.numeros.max,
    min: state.numeros.min
  }
}

export default connect(mapStateToProps)(Soma);

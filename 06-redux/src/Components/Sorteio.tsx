import Card, { CardProps } from "./Card";
import { connect } from "react-redux";

interface SorteioProps extends CardProps {
  max: number
  min: number
}

const Sorteio = (props: SorteioProps) => {

  const {min, max} = props
  const random = Math.floor(Math.random()*(max - min + 1)) + min

  return (
    <Card title="Sorteio entre Min e Max" headColor="#472121" bodyColor="#580903">
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
            <span>Sorteio:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps=(state: any)=>{
  return{
    max: state.numeros.max,
    min: state.numeros.min
  }
}

export default connect(mapStateToProps)(Sorteio);

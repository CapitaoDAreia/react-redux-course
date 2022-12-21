import Card from "./Card";

import { connect } from "react-redux";
import { alterarNumMinimo, alteraNumMaximo } from "../Store/actions/numeros";

interface IntervaloProps {
  min: number;
  max: number;
  alterarMinimo: (newMinNumber: number) => void;
  alterarMaximo: (newMaxNumber: number) => void;
}

const Intervalo = (props: IntervaloProps) => {
  const { min, max } = props;
  return (
    <Card title="CARD #01" headColor="#472121" bodyColor="#580903">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            flex: "1",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>

        <span
          style={{
            flex: "1",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <strong>Máximo</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    alterarMinimo(newMinNumber: number) {
      //action creator -> action
      const action = alterarNumMinimo(newMinNumber);
      dispatch(action);
    },

    alterarMaximo(newMaxNumber: number) {
      const action = alteraNumMaximo(newMaxNumber);
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps, //mapeamento dos estados para props
  mapDispatchToProps //mapeamento das actions para props
)(Intervalo);

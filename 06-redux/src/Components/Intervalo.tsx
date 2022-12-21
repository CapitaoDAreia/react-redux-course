import Card from "./Card";

import { connect } from "react-redux";
import { alterarNumMinimo } from "../Store/actions/numeros";

interface IntervaloProps {
  min: number;
  max: number;
  alterarMinimo: any
}

const Intervalo = (props: IntervaloProps) => {
  const { min, max } = props;
  props.alterarMinimo(100)
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
          <input type="number" value={min} readOnly />
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
          <input type="number" value={max} readOnly />
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

const mapActionCreatorsToProps = (dispatch: any) => {
  return {
    alterarMinimo(newMinNumber: number) {
      //action creator -> action
      const action = alterarNumMinimo(newMinNumber);
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps, //mapeamento dos estados para props
  mapActionCreatorsToProps //mapeamento das actions para props
  )(Intervalo);

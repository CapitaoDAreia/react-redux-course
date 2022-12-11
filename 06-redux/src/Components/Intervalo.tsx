import Card from "./Card";

interface IntervaloProps {
  min: number;
  max: number;
  onMinChange: (n: number) => void;
  onMaxChange: (n: number) => void;
}

const Intervalo = (props: IntervaloProps) => {
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
            value={props.min}
            onChange={(e: any) => {
              props.onMinChange(+e.target.value);
            }}
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
            value={props.max}
            onChange={(e: any) => {
              props.onMaxChange(+e.target.value);
            }}
          />
        </span>
      </div>
    </Card>
  );
};

export default Intervalo;

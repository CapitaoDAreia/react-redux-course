import Card from "./Card";

interface IntervaloProps {

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
            value={0}

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
            value={0}
          />
        </span>
      </div>
    </Card>
  );
};

export default Intervalo;

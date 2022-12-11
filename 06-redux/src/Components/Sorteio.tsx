import Card, { CardProps } from "./Card";

interface SorteioProps extends CardProps {
    min: number
    max: number
}

const Media = (props: SorteioProps) => {

    const {min, max} = props
    const random = Math.floor(Math.random() * (max - min)) + min

  return (
    <Card title="Sorteio de um Números" headColor="#472121" bodyColor="#580903">
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

export default Media;

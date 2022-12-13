import Card, { CardProps } from "./Card";

interface SorteioProps extends CardProps {

}

const Media = (props: SorteioProps) => {

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
          <strong>{0}</strong>
        </span>
      </div>
    </Card>
  );
};

export default Media;

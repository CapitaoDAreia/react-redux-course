import Card, { CardProps } from "./Card";

interface MediaProps extends CardProps {

}

const Media = (props: MediaProps) => {
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
          <strong>{0}</strong>
        </span>
      </div>
    </Card>
  );
};

export default Media;

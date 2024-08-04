export default function Image({ imgName }) {
  return (
    <div >
      <img
        src={`https://openweathermap.org/img/wn/${imgName}@4x.png`}
        alt="image"
      />
    </div>
  );
}

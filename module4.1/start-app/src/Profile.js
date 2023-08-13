const user = {
  name: 'Generasi Gigih',
  imgUrl: 'https://tinyurl.com/5n7xbnc2',
  imgSize: 90,
}

export default function Profile({ name="Tesla", imgUrl }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <img style={{borderRadius:'50'}} src={imgUrl} alt='img' />
    </div>
  );
}

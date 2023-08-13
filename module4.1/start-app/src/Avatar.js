const user = {
  name: 'Maria Sklodowska-Curie',
  picture: 'https://tinyurl.com/5n7xbnc2',
}

export default function Avatar({ name="Turing", imgUrl }) {
  return (
    <div className='container'>
      <header>
        {name}
      </header>
      <img className='avatar' src={imgUrl} alt='user picture' />
    </div>
  );
}

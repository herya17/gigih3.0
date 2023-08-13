import Avatar from './Avatar';

const einstein = {
  name: 'Albert Einstein',
  imgUrl: '',
}

const alan = {
  name: 'Alan Turing',
  imgUrl: '',
}

const kate = {
  name: 'Kathering Johnson',
  imgUrl: '',
}

export default function Gallery() {
  return (
    <div>
      <Avatar
        name={einstein.name}
        imgUrl={einstein.imgUrl} />
      <Avatar
        name={alan.name}
        imgUrl={alan.imgUrl} />
      <Avatar
        imgUrl={kate.imgUrl} />
    </div>
  );
}

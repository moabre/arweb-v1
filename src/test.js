const input = [
  {
    room_type: 'Queen',
    vacant_rooms: 5,
    price: 100,
  },
  {
    room_type: 'Double',
    vacant_rooms: 3,
    price: 75,
  },
  {
    room_type: 'Twin',
    vacant_rooms: 8,
    price: 60,
  },
];

const Test = () => {
  return (
    <ol>
      {input.map((i) => {
        return (
          <li>
            {i.room_type},{i.vacant_rooms}, ${i.price}
          </li>
        );
      })}
    </ol>
  );
};

const fooBar = (num) => {
  if (num % 2 === 0 && num % 7 === 0) {
    console.log('foobar');
  } else if (num % 2 === 0) {
    console.log('foo');
  } else if (num % 7 === 0) {
    console.log('bar');
  } else {
    console.log(num);
  }
};

//Refactor code
switch (province) {
  case 'ONTARIO':
    rate = ONTARIO_RATE;
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    break;
  case 'QUEBEC':
    rate = QUEBEC_RATE;
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    points = 2;
    break;
  case 'ALBERTA':
    rate = ALBERTA_RATE;
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    break;
  default:
    rate = 1;
    amt = base;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
}

export default Test;

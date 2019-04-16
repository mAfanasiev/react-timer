export const filtredDoneArray = array => (array.filter(item => (item.done !== true)));

export const functionForArrayMap = array => (
  array.map((item) => {
    let { time } = item;
    let done = false;

    if (time <= 0) {
      done = true;
      time = 0;
    } else {
      time = (time - 0.01).toFixed(2);
    }

    return {
      ...item,
      done,
      time,
    };
  })
);

export default {};

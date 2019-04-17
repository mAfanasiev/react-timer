export const filtredDoneArray = array => (array.filter(({ done }) => (done !== true)));

export const functionForArrayMap = (array, func) => (
  array.map((item) => {
    let { time } = item;
    const { id } = item;
    let done = false;

    if (time <= 0) {
      done = true;
      time = 0;
      func(id);
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

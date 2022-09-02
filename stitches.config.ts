import { createStitches } from '@stitches/core';

const Stitches = createStitches({
  theme: {
    colors: {
      gray400: 'red',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: Number) => ({ marginLeft: value, marginRight: value }),
  },
});

export default Stitches;

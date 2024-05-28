export const isUrl = (url: string) => {
  try {
    /* eslint-disable no-new */
    new URL(url);

    return true;
  }
  catch (err) {
    return false;
  }
};

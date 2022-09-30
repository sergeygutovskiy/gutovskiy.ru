const isHTML = (text: string) => {
  const regex = /(<([^>]+)>)/ig;
  return Boolean(text.match(regex)?.length);
};

export default isHTML;

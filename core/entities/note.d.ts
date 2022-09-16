interface INote {
  id: number,
  label: string,
  categories: number[],
};

interface IFullNote {
  id: number,
  title: string,
  description?: string,
  image?: string,
  links?: string[],
}

interface INoteCategory {
  id: number,
  theme: string,
  label: striung,
};

interface INote {
  id: number,
  label: string,
  categories: number[],
};

// dd.mm.yyyy
type INoteDate = string;

interface IFullNote {
  id: number,
  title: string,
  date: INoteDate,
  description?: string,
  image?: string,
  links?: string[],
}

interface INoteCategory {
  id: number,
  theme: string,
  label: striung,
};

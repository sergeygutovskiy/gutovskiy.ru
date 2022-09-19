interface IThemedNote extends INote {
  categories: { id: number, theme?: string }[],
}

interface ISelctableNote extends IThemedNote {
  isSelected: boolean,
}

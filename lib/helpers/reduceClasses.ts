const reduceClasses = (...classList: string[]) => classList.filter(Boolean).join(' ');

export default reduceClasses;

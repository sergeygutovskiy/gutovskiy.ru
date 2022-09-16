const reduceClasses = (...classList: any[]) => classList.filter(Boolean).flat(Infinity).join(' ');

export default reduceClasses;

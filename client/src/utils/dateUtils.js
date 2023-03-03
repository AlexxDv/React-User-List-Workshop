export const formatDate = (input) => {
    const date = new Date(input);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export const fullFormatDate = (input) => {
    const date = new Date(input);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

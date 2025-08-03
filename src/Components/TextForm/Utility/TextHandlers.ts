const handleUppercase = (text: string): string => {
    return text.toUpperCase();
}

const handleLowercase = (text: string): string => {
    return text.toLowerCase();
}

const handleTitleCase = (text: string): string => {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

const handleClear = (): string => {
    return "";
}

const handleChange = (event: any): string => {
    return event.target.value;
}

const TextHandlers = {
    handleUppercase,
    handleLowercase,
    handleTitleCase,
    handleClear,
    handleChange
};

export default TextHandlers;
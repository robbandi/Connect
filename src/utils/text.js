export const applyFormatting = (text, formatting) => {
    return text.replace(/\[b\]|\[\/b\]|\[i\]|\[\/i\]|\[u\]|\[\/u\]/g, (match) => {
      switch (match) {
        case '[b]':
          formatting.bold = true;
          return '';
        case '[/b]':
          formatting.bold = false;
          return '';
        case '[i]':
          formatting.italic = true;
          return '';
        case '[/i]':
          formatting.italic = false;
          return '';
        case '[u]':
          formatting.underline = true;
          return '';
        case '[/u]':
          formatting.underline = false;
          return '';
        default:
          return '';
      }
    });
  };
  
  export const getFormattedText = (text, formatting) => {
    let formattedText = text;
    if (formatting.bold) {
      formattedText = `[b]${formattedText}[/b]`;
    }
    if (formatting.italic) {
      formattedText = `[i]${formattedText}[/i]`;
    }
    if (formatting.underline) {
      formattedText = `[u]${formattedText}[/u]`;
    }
    return formattedText;
  };
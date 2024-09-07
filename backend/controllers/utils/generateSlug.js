const generateSlug = (title) => {
  const turkishChars = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'C',
    Ğ: 'G',
    İ: 'I',
    Ö: 'O',
    Ş: 'S',
    Ü: 'U',
  };

  title = title
    .toLowerCase()
    .split('')
    .map((char) => turkishChars[char] || char)
    .join('');

  return title
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+$/, '');
};

module.exports = generateSlug;

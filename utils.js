function parsePhoneNumber(number) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/gi;
  const trimmed = number.trim();

  if (!number || typeof number !== 'string' || !phoneRegex.test(trimmed)) {
    return null;
  }

  return trimmed.replace(phoneRegex, '($1) $2-$3');
}

export default {
  parsePhoneNumber
};

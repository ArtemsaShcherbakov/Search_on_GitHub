const getCroppedText = (
  text: string,
  startPosition: number,
  endPosition: number,
): string => {
  if (text.length > endPosition) {
    const trimmedText = text.slice(startPosition, endPosition);

    const textLastСharactersRemoved = trimmedText.replace(/[.,!?;:\s]+$/, '');

    return textLastСharactersRemoved + '...';
  }

  return text;
};

export default getCroppedText;

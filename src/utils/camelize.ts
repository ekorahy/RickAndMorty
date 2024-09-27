export default function camelSentence(stringValue: string) {
  return (" " + stringValue).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
}
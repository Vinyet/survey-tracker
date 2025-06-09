export function daysUntilDate(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 ? diffDays : 'Cerrada';
}

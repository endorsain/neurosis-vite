export function dateFormat(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() devuelve 0-11
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function timerFormat(ms) {
  // Cálculos base
  const milliseconds = ms % 1000;

  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;

  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;

  const days = Math.floor(totalHours / 24);

  if (totalHours >= 24) {
    // DD:HH:MM
    return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    // } else if (totalHours >= 1) {
  } else {
    // HH:MM:SS
    return `${totalHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  // else {
  //   // MM:SS:MS
  //   //TODO: Cambiar estilo de ms para que se vea mas "chico que lo otro"
  //   return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  // }
}

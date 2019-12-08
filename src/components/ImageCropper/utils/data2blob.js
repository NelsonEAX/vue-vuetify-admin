/**
 * Convert database64 file format to binary
 *
 * @param  {[String]} data dataURL is "data:image/png;base64,****".
 * comma is preceded by some descriptive text. We only need the comma after the line.
 * @param  {[String]} mime [description]
 * @return {[blob]}      [description]
 */
export default function (data, mime) {
  let newData = data.split(',')[1];
  newData = window.atob(newData);
  const ia = new Uint8Array(newData.length);
  for (let i = 0; i < newData.length; i += 1) {
    ia[i] = newData.charCodeAt(i);
  }
  // default format returned by canvas.toDataURL is image/png
  return new Blob([ia], {
    type: mime,
  });
}

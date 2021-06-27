let NowDate = new Date();
let y = NowDate.getFullYear();
let mo = NowDate.getMonth() + 1;
let d = NowDate.getDate();
let h = NowDate.getHours();
let m = NowDate.getMinutes();
let s = NowDate.getSeconds();
if (mo < 10) {
  mo = "0" + mo;
}
if (d < 10) {
  d = "0" + d;
}
if (h < 10) {
  h = "0" + h;
}
if (m < 10) {
  m = "0" + m;
}
if (s < 10) {
  s = "0" + s;
}
let getTime = y + "-" + mo + "-" + d + " " + h + ":" + m + ":" + s;
let getDate = y + "-" + mo + "-" + d;
export { getTime };
export { getDate };

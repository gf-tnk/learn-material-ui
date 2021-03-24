
const setPropFontSize = (el: HTMLCollectionOf<HTMLElement>, className: string, fontSizeMode: string) => {
  if (el[0] !== undefined) {
    for (let i = 0; i < el.length; i++) {
      el[i].style.setProperty(`--upfont-${className}`, fontSizeMode);
    }
  }
}

export const setFontsize = (fontSizeMode: string) => {
  localStorage.setItem('fontSizeMode', fontSizeMode);
  var body = document.querySelector('body') as HTMLBodyElement;
  var wh1 = document.getElementsByClassName('wh1') as HTMLCollectionOf<HTMLElement>;
  var wh2 = document.getElementsByClassName('wh2') as HTMLCollectionOf<HTMLElement>;
  var wd1 = document.getElementsByClassName("wd1") as HTMLCollectionOf<HTMLElement>;
  var wd2 = document.getElementsByClassName("wd2") as HTMLCollectionOf<HTMLElement>;
  var wd3 = document.getElementsByClassName("wd3") as HTMLCollectionOf<HTMLElement>;
  var wd4 = document.getElementsByClassName("wd4") as HTMLCollectionOf<HTMLElement>;
  var wdb1 = document.getElementsByClassName("wdb1") as HTMLCollectionOf<HTMLElement>;
  var wdb2 = document.getElementsByClassName("wdb2") as HTMLCollectionOf<HTMLElement>;
  var wdb3 = document.getElementsByClassName("wdb3") as HTMLCollectionOf<HTMLElement>;
  var wdb4 = document.getElementsByClassName("wdb4") as HTMLCollectionOf<HTMLElement>;

  body.style.setProperty('--up-body', fontSizeMode);

  setPropFontSize(wh1, "wh1", fontSizeMode)
  setPropFontSize(wh2, "wh2", fontSizeMode)
  setPropFontSize(wd1, "wd1", fontSizeMode)
  setPropFontSize(wd2, "wd2", fontSizeMode)
  setPropFontSize(wd3, "wd3", fontSizeMode)
  setPropFontSize(wd4, "wd4", fontSizeMode)
  setPropFontSize(wdb1, "wdb1", fontSizeMode)
  setPropFontSize(wdb2, "wdb2", fontSizeMode)
  setPropFontSize(wdb3, "wdb3", fontSizeMode)
  setPropFontSize(wdb4, "wdb4", fontSizeMode)

};
module.exports = function(options) {
  const items = options.hash.items ? JSON.parse(options.hash.items) : null;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'list';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' list--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  const svg = `
    <ul class="${cssClass}">
        ${items && items.map((item) => {
          return `<li class="list__item">
              <svg class="icon" width="20" height="20">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#check">
              </svg>            
              <span>${item}</span>
          </li>`  
        }).join(``)}
    </ul>
  `

  return svg;
}

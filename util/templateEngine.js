
import fs from 'fs';


export function readPage(filePath) {
  return fs.readFileSync(filePath).toString(); 
}


export function renderPage(page, config={}) {

  // const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString().
  // replaceAll("$TAB_TITLE", config.tabTitle || "Kodekilden").
  // replace("$CSS_LINKS", config.cssLinks || "");

  const navbar = fs.readFileSync("./public/components/navbar/navbar_new.html").toString().
  replaceAll("$TAB_TITLE", config.tabTitle || "Kodekilden").
  replace("$CSS_LINKS", config.cssLinks || "");


  const sidebar = fs.readFileSync("./public/components/sidebar/sidebar.html").toString().
  replace("$CSS_LINKS", config.cssLinks || "");

  const footer = fs.readFileSync("./public/components/footer/footer.html").toString().
  replace("$CSS_LINKS", config.cssLinks || "");

  return navbar  + page + footer;
  
}
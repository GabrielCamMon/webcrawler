const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://instagram.com/rocketseat_oficial');
  //await page.screenshot({ path: 'insragram.png' });

  const imgList = await page.evaluate(()=>{
      //toda essa funcção sera executada no browser
        const nodeList = document.querySelectorAll('article img')

        const imgArray = [...nodeList]

        const imglist = imgArray.map( ({src}) =>({
            src
        }))

       return imglist
  })

//escrecer os dados em um arquivo local

fs.writeFile('instagram.json', JSON.stringify[imgList, null, 2], err =>{
    if(err) throw new Error('something went wrong')

    console.log("weel done")
})

 await browser.close();
})();


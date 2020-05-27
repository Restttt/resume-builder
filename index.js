const puppeteer = require('puppeteer');

const url = 'http://127.0.0.1:5501/resume.html';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle0',
  });

  await page.pdf({path: 'resume.pdf', format: 'A4', printBackground: true });
  
  await browser.close();
})();
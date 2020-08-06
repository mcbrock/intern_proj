const { Builder, By, Key, util, until } = require("selenium-webdriver");
var numeral = require('numeral');
const chrome = require('selenium-webdriver/chrome')
const options = new chrome.Options()
options.addArguments('--disable-dev-shm-usage')
options.addArguments('--no-sandbox')
options.addArguments('--headless') 
​
const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()
​
let urls = []
let coefficient = [] // (likes/views) * (likes/ (likes + dislikes))
let bestvideo = ''
​
​
async function ytsearch(topic, length) {
  let url = 'https://www.youtube.com/results?search_query=' + topic + ', ' + length;
  await driver.get(url)
  await grabUrls()
  await computeCoefficient()
  await getBestVid()
  driver.quit()
​
}
​
async function grabUrls() {
  driver.wait(until.elementLocated(By.id('video-title', 1000)))
  let alllink = await (await driver).findElements(By.id('video-title'))
  for (const ele of alllink) {
    let url = await ele.getAttribute('href')
    try {
      urls.push(url.toString())
​
    } catch (error) {
      continue
    }
  }
}
​
async function computeCoefficient() {
  for (let i = 0; i < 3; i++) {
    let driver1 = new Builder().forBrowser('chrome').build();
    await (await driver1).get(urls[i])
    await driver1.wait(until.elementLocated(By.xpath('//*[@id="top-level-buttons"]/ytd-toggle-button-renderer[1]/a'), 500))
    let viewelement = await (await (await driver1).findElement(By.xpath('//*[@id="count"]/yt-view-count-renderer/span[1]'))).getText()
    let likeelement = await ((await (await driver1).findElement(By.xpath('//*[@id="top-level-buttons"]/ytd-toggle-button-renderer[1]/a')))).getText()
    let dislikeelement = await ((await (await driver1).findElement(By.xpath('//*[@id="top-level-buttons"]/ytd-toggle-button-renderer[2]/a')))).getText()
    let viewcount = numeral(viewelement.toLowerCase()).value()
    let likecount = numeral(likeelement.toLowerCase()).value()
    let dislikecount = numeral(dislikeelement.toLowerCase()).value()
    let qualitycoefficient = (likecount / viewcount) * (likecount / (likecount + dislikecount))
    coefficient[i] = qualitycoefficient
    await (await driver1).quit()
  }
​
}
​
async function getBestVid() {
  var indexOfMaxValue = coefficient.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  bestvideo = urls[indexOfMaxValue]
  console.log(bestvideo)
}
​
​
async function main() {
  var args = process.argv.slice(2);
  let vidlength = args[args.length - 1].trim()
  let topic = args.slice(0, -1).join(" ")
  ytsearch(topic, vidlength)
}
​
main()
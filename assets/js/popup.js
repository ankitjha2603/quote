const select = (qu) => document.querySelector(qu);
const getRandomValueFromJson = (jsonObject) => {
  var values = Object.values(jsonObject);
  return values[Math.floor(Math.random() * values.length)];
};
async function loadData() {
  let slideShowDataFetch = await fetch(`assets/js/ankitjha2603-quote.json`);
  let slideShowData = await slideShowDataFetch.json();
  setTimeout(() => {
    const quote = getRandomValueFromJson(slideShowData);
    select(".quote").innerHTML = quote.quote;
    select(".by").style.display = "block";
    select("a.read-more").style.display = "block";
    select("a.read-more").href = `https://www.instagram.com/p/${quote.link}`;
  }, 750);
}
loadData();

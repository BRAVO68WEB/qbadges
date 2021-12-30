const axios = require("axios");
const ch = require("cheerio");
var decode = require("urldecode");

async function qbadges(profileId) {
  let url = `https://www.qwiklabs.com/public_profiles/${profileId}`;
  const { data } = await axios.get(url).catch((err) => console.error(err));
  let $ = ch.load(data);
  let badges = [];
  $(".profile-badge").each(function (idx, el) {
    let badge = {};
    badge.title = $(this).find(".ql-subhead-1").text();
    badge.earnDate = $(this).find(".ql-body-2").text();
    badge.url = $(this).find(".badge-image").attr("href");
    badge.image = $(this).find("img").attr("src");
    badges.push(badge);
  });
  badges = badges.map((badge) => {
    return {
      ...badge,
      title: badge.title.replaceAll("\n", ""),
      earnDate: badge.earnDate.replaceAll("\n", ""),
      url: badge.url,
      image: decode(badge.image),
    };
  });
  return badges;
}

module.exports = { qbadges };

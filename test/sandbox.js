const test = require("tape");
const { qbadges } = require("..");

const profileId = "dd51f4e2-6171-461b-888c-ce954832c72e";

test("Checking", async (t) => {
  t.plan(1);
  var qb = await qbadges(profileId);
  t.equal(qb.length, 13, "Pass !!");
});

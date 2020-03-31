const test = require("ava")
const gotJsonp = require(".")
const got = require("got").extend(gotJsonp())

test("main", async t => {
	const { body } = await got("https://www.w3schools.com/js/jsonp_demo_db.php")
	t.deepEqual(body, ["No records found"])
})

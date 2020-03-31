import { Options } from "unwrap-jsonp"
import { GotBodyOptions } from "got"

/**
 * Got JSONP support.
 * @param options Options to pass to [unwrap-jsonp](https://github.com/Richienb/unwrap-jsonp#options).
 * @example
 * ```
 * const got = require("got");
 * const jsonpGot = got.extend(require("got-jsonp")());
 *
 * (async () => {
 *  const { body } = await jsonpGot("https://www.w3schools.com/xml/simple.xml");
 *
 *  console.log(body);
 *  //=> ['No records found']
 * })();
 * ```
*/
declare function gotJsonp(options?: Options): GotBodyOptions

export = gotJsonp

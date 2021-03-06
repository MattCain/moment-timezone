"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Singapore"] = {
	"guess" : helpers.makeTestGuess("Asia/Singapore", { offset: false, abbr: true }),

	"1905" : helpers.makeTestYear("Asia/Singapore", [
		["1905-05-31T17:04:34+00:00", "23:59:59", "SMT", -24925 / 60],
		["1905-05-31T17:04:35+00:00", "00:04:35", "MALT", -420]
	]),

	"1932" : helpers.makeTestYear("Asia/Singapore", [
		["1932-12-31T16:59:59+00:00", "23:59:59", "MALT", -420],
		["1932-12-31T17:00:00+00:00", "00:20:00", "MALST", -440]
	]),

	"1935" : helpers.makeTestYear("Asia/Singapore", [
		["1935-12-31T16:39:59+00:00", "23:59:59", "MALST", -440],
		["1935-12-31T16:40:00+00:00", "00:00:00", "MALT", -440]
	]),

	"1941" : helpers.makeTestYear("Asia/Singapore", [
		["1941-08-31T16:39:59+00:00", "23:59:59", "MALT", -440],
		["1941-08-31T16:40:00+00:00", "00:10:00", "MALT", -450]
	]),

	"1942" : helpers.makeTestYear("Asia/Singapore", [
		["1942-02-15T16:29:59+00:00", "23:59:59", "MALT", -450],
		["1942-02-15T16:30:00+00:00", "01:30:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Singapore", [
		["1945-09-11T14:59:59+00:00", "23:59:59", "JST", -540],
		["1945-09-11T15:00:00+00:00", "22:30:00", "MALT", -450]
	]),

	"1965" : helpers.makeTestYear("Asia/Singapore", [
		["1965-08-08T16:29:59+00:00", "23:59:59", "MALT", -450],
		["1965-08-08T16:30:00+00:00", "00:00:00", "SGT", -450]
	]),

	"1981" : helpers.makeTestYear("Asia/Singapore", [
		["1981-12-31T16:29:59+00:00", "23:59:59", "SGT", -450],
		["1981-12-31T16:30:00+00:00", "00:30:00", "SGT", -480]
	])
};
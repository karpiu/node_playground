var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Katti",
  "last_name": "Gathercole",
  "email": "kgathercole0@newyorker.com",
  "gender": "Female",
  "ip_address": "116.252.245.116"
}, {
  "id": 2,
  "first_name": "Lowrance",
  "last_name": "Jansson",
  "email": "ljansson1@webs.com",
  "gender": "Male",
  "ip_address": "9.181.157.245"
}, {
  "id": 3,
  "first_name": "Dyann",
  "last_name": "Beining",
  "email": "dbeining2@freewebs.com",
  "gender": "Female",
  "ip_address": "24.57.223.127"
}, {
  "id": 4,
  "first_name": "Gannon",
  "last_name": "Oloshin",
  "email": "goloshin3@un.org",
  "gender": "Male",
  "ip_address": "27.3.76.80"
}, {
  "id": 5,
  "first_name": "Quincy",
  "last_name": "Welden",
  "email": "qwelden4@istockphoto.com",
  "gender": "Male",
  "ip_address": "59.208.191.133"
}, {
  "id": 6,
  "first_name": "Olin",
  "last_name": "Jaques",
  "email": "ojaques5@theatlantic.com",
  "gender": "Male",
  "ip_address": "204.42.194.248"
}, {
  "id": 7,
  "first_name": "Susanetta",
  "last_name": "Duker",
  "email": "sduker6@shinystat.com",
  "gender": "Female",
  "ip_address": "190.110.149.3"
}, {
  "id": 8,
  "first_name": "Gibbie",
  "last_name": "Deighan",
  "email": "gdeighan7@hibu.com",
  "gender": "Male",
  "ip_address": "118.161.28.38"
}, {
  "id": 9,
  "first_name": "Gabriele",
  "last_name": "Eade",
  "email": "geade8@census.gov",
  "gender": "Male",
  "ip_address": "251.248.237.69"
}, {
  "id": 10,
  "first_name": "Lucky",
  "last_name": "Mayfield",
  "email": "lmayfield9@technorati.com",
  "gender": "Female",
  "ip_address": "84.5.220.45"
}];

var maleCount = _.filter(people, {gender: "Male"}).length;

console.log(maleCount);

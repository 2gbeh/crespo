"use strict";
import { faker } from "@faker-js/faker";
import FakerDate from "./Date";

export default class FakerUser extends FakerDate {
  // https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/315.jpg
  get avatar() {
    return faker.image.avatar();
  }
  // ////////////////////////////////////////////////////////////

  // Mr. | Mrs. | Ms.
  get title() {
    return faker.person.prefix();
  }
  // Grady
  get surname() {
    return faker.person.lastName();
  }
  // Hauck
  get lastName() {
    return faker.person.lastName();
  }
  // Antwan
  get firstName() {
    return faker.person.firstName();
  }
  // James
  get middleName() {
    return faker.person.middleName();
  }
  // Mr. Allen Brown
  get fullName() {
    return faker.person.fullName();
  }
  // Allen Brown
  get otherNames() {
    return faker.person.firstName() + " " + faker.person.middleName();
  }
  // M | F
  get sex() {
    return faker.person.sex().charAt(0).toUpperCase();
  }
  // Male | Female
  get gender() {
    let g = faker.person.sex();
    return `${g.charAt(0).toUpperCase()}${g.slice(1)}`;
  }
  // 18 - 99
  get age() {
    return faker.number.int({ min: 18, max: 99 });
  }
  // 16.0 - 40.0
  get bmi() {
    return faker.number.float({ min: 16, max: 40, precision: 0.1 });
  }
  // oatmeal advocate, veteran 🐠
  get bio() {
    return faker.person.bio();
  }
  // Global Accounts Engineer
  get occupation() {
    return faker.person.jobTitle();
  }
  // ////////////////////////////////////////////////////////////

  // kassandra4@hotmail.com
  get email() {
    return faker.internet.email().toLowerCase();
  }
  // Nettie_Zboncak40
  get username() {
    return faker.internet.userName();
  }
  // $Password1
  get password() {
    let arr = "!,@,#,$,%,^,&,*,".split(",");
    return (
      faker.string.fromCharacters(arr) +
      faker.string.alpha(8) +
      faker.string.numeric()
    );
  }
  // 07062838898, +2347080701737
  get phoneNG() {
    return faker.datatype.boolean()
      ? `0${faker.number.int({ min: 7, max: 9 })}${faker.number.int({
          min: 0,
          max: 1,
        })}${faker.string.numeric({
          length: 8,
        })}`
      : `+234${faker.number.int({ min: 7, max: 9 })}${faker.number.int({
          min: 0,
          max: 1,
        })}${faker.string.numeric({
          length: 8,
        })}`;
  }
  // (988) 460-2705, +1 093-278-1342
  get phoneUS() {
    return faker.datatype.boolean()
      ? `(${faker.string.numeric({
          length: 3,
        })}) ${faker.string.numeric({
          length: 3,
        })}-${faker.string.numeric({
          length: 4,
        })}`
      : `+1 ${faker.string.numeric({
          length: 3,
        })}-${faker.string.numeric({
          length: 3,
        })}-${faker.string.numeric({
          length: 4,
        })}`;
  }
  // ////////////////////////////////////////////////////////////

  // 813 Howard Street Oswego NY 13126 USA
  get address() {
    return (
      faker.location.streetAddress(false) +
      " " + // 813 Howard Street Oswego
      faker.location.state({ abbreviated: true }) +
      " " + // NY
      faker.location.zipCode() +
      " " + // 13126
      faker.location.countryCode("alpha-3") // USA
    );
  }
  // 7917 Miller Park Apt. 410 NY 13126 USA
  get addressApt() {
    return (
      faker.location.streetAddress(true) +
      " " + // 7917 Miller Park Apt. 410
      faker.location.state({ abbreviated: true }) +
      " " + // NY
      faker.location.zipCode() +
      " " + // 13126
      faker.location.countryCode("alpha-3") // USA
    );
  }
  // East Jarretmouth
  get city() {
    return faker.location.city();
  }
  // Mississippi
  get state() {
    return faker.location.state();
  }
  // 17839
  get zipCode() {
    return faker.location.zipCode();
  }
  // United States
  get country() {
    return faker.location.country();
  }
  // USA
  get countryCode() {
    return faker.location.countryCode("alpha-3");
  }
  // ////////////////////////////////////////////////////////////

  // 0123456789
  get accountNo() {
    return faker.finance.accountNumber(10);
  }
  // 506
  get cvv() {
    return faker.finance.creditCardCVV();
  }
  // 4444
  get pin() {
    return faker.finance.pin(4);
  }
  // 3ySdvCkTLVy7gKD4j6JfSaf5d
  get btc() {
    return faker.finance.bitcoinAddress();
  }
  // 0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a
  get eth() {
    return faker.finance.ethereumAddress();
  }
  // ////////////////////////////////////////////////////////////

  // 245.108.222.0 | 4e5:f9c5:4337:abfd:9caf:1135:41ad:d8d3
  get ip() {
    return faker.internet.ip();
  }
  // 32:8e:2e:09:c6:05
  get mac() {
    return faker.internet.mac();
  }
  // Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_8_8)  AppleWebKit/536.0.2 (KHTML, like Gecko) Chrome/27.0.849.0 Safari/536.0.2
  get userAgent() {
    return faker.internet.userAgent();
  }
}

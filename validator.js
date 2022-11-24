class Validator {
  constructor(email, domain, date, phone) {
    this.emailUser = email;
    this.domainUser = domain;
    this.dateUser = date;
    this.phoneUser = phone;
  }

  isEmail() {
    let mailFormat =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (this.emailUser.match(mailFormat)) {
      //   console.log(`ваш E-mail "${this.emailUser}" верный`);
      return this.emailUser;
    } else console.log(`Упс, что-то пошло не так :(`);
  }

  isDomain() {
    let domainFormat =
      /^([\w-\.]+)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (this.domainUser.match(domainFormat)) {
      //   console.log(`домен "${this.domainUser}" соответствует формату`);
      return this.domainUser;
    } else console.log(`Проверьте корректность указанного домена`);
  }

  isDate() {
    let dateFormat = /^([\d{1,2}]+)[\.|\/]([\d{1,2}]+)[\.|\/]([\d{2,4}]+)$/;
    if (this.dateUser.match(dateFormat)) {
      //   console.log(`дата "${this.dateUser}" соответствует формату`);
      return this.dateUser;
    } else
      console.log(
        `Упс, ошибочка... Проверьте формат введенной даты, возможно неверно указан разделитель`
      );
  }

  isPhone() {
    let phoneFormat = /^\+([0-9]{3})[\s|\(\-\.]\d[\s|\)\-\.]+(\d{8,9})$/;
    if (this.phoneUser.match(phoneFormat)) {
      //   console.log(`номер телефона "${this.phoneUser}" соответствует формату`);
      return this.phoneUser;
    } else console.log(`Есть какое-то несоответствие...`);
  }
}

let validator = new Validator(
  "oska43@mail.ru",
  "itgirlschool.ru",
  "12.11.2022",
  "+381(6)13102840"
);
console.log(validator.isEmail());
console.log(validator.isDomain());
console.log(validator.isDate());
console.log(validator.isPhone());

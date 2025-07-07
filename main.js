/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

// NAMESPACE OBJECT: ./src/components/bank-card-widget/js/logo-cards.js
var logo_cards_namespaceObject = {};
__webpack_require__.r(logo_cards_namespaceObject);
__webpack_require__.d(logo_cards_namespaceObject, {
  americanExpress: () => (card_american_express_namespaceObject),
  dinersClub: () => (card_diners_club_namespaceObject),
  discover: () => (card_discover_namespaceObject),
  jsb: () => (card_jsb_namespaceObject),
  maestro: () => (card_maestro_namespaceObject),
  mastercard: () => (card_mastercard_namespaceObject),
  mir: () => (card_mir_namespaceObject),
  unionpay: () => (card_unionpay_namespaceObject),
  unknown: () => (card_unknown_namespaceObject),
  visa: () => (card_visa_namespaceObject)
});

;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-unknown.png
const card_unknown_namespaceObject = __webpack_require__.p + "53c26cc2a56aea89b449.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-visa.png
const card_visa_namespaceObject = __webpack_require__.p + "4cf8ef026559968fbb11.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-unionpay.png
const card_unionpay_namespaceObject = __webpack_require__.p + "07820682e90bd9998ef7.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-mir.png
const card_mir_namespaceObject = __webpack_require__.p + "f5313d334d6ebd89ca11.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-mastercard.png
const card_mastercard_namespaceObject = __webpack_require__.p + "7e36f69bcd136a0f89b1.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-maestro.png
const card_maestro_namespaceObject = __webpack_require__.p + "219305189af8a480d68c.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-jsb.png
const card_jsb_namespaceObject = __webpack_require__.p + "ee1dc9d81420533170af.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-discover.png
const card_discover_namespaceObject = __webpack_require__.p + "45beb5fd1f41da843b54.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-diners-club.png
const card_diners_club_namespaceObject = __webpack_require__.p + "41b28c41e13705e4ef68.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/img/card-american-express.png
const card_american_express_namespaceObject = __webpack_require__.p + "25c1c28c7bbe57ce804e.png";
;// CONCATENATED MODULE: ./src/components/bank-card-widget/js/logo-cards.js
// Вспомогательный модуль для загрузки логотипов платежных систем











;// CONCATENATED MODULE: ./src/components/bank-card-widget/js/luhn-check.js
// Функция проверки валидности номера карты на основе алгоритма Луна
function luhnCheck(input) {
  const number = input.toString();
  const digits = number.replace(/\D/g, "").split("").map(Number);
  let sum = 0;
  let isSecond = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isSecond = !isSecond;
  }
  if (sum > 0) {
    return sum % 10 === 0;
  } else return false;
}
;// CONCATENATED MODULE: ./src/components/bank-card-widget/js/definition-payment-system.js
// Функция, определяющая платежную систему
function definitionPaymentSystem(input) {
  const numberAsText = input.toString().replace(/\D/g, "");
  for (let i of payments) {
    if (i.pattern.test(numberAsText) && i.length.includes(numberAsText.length)) {
      return i.name;
    }
  }
  return "unknown";
}

// Функция-генератор, позволяет задавать интервал чисел
function* makeRangeIterator(start, end, step = 1) {
  let iterationCount = 0;
  for (let i = start; i <= end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

// Массив с платежными системами
const payments = [{
  name: "mir",
  pattern: /^220[0-4]\d*$/,
  length: [...makeRangeIterator(16, 19)]
}, {
  name: "visa",
  pattern: /^4\d*$/,
  length: [13, 16, 19]
}, {
  name: "maestro",
  pattern: /^(5018|5020|5038|5893|6304|6759|676[1-3])\d*$/,
  length: [...makeRangeIterator(12, 19)]
}, {
  name: "mastercard",
  pattern: /^(5[1-5]|2[3-6]|27[01]|2720|22[3-9]|222[1-9])\d*$/,
  length: [16]
}, {
  name: "unionpay",
  pattern: /^62\d*$/,
  length: [...makeRangeIterator(16, 19)]
}, {
  name: "jsb",
  pattern: /^(35[3-8]|352[89])\d*$/,
  length: [...makeRangeIterator(16, 19)]
}, {
  name: "discover",
  pattern: /^(65|6011|64[4-9]|622[2-8]|6229[01]|62292[0-5]|6221[3-9])|62212[6-9]\d*$/,
  length: [...makeRangeIterator(16, 19)]
}, {
  name: "dinersClub",
  pattern: /^(36|54|55|30[0-5])\d*$/,
  length: [14, 16]
}, {
  name: "americanExpress",
  pattern: /^(34|37)\d*$/,
  length: [15]
}];
;// CONCATENATED MODULE: ./src/components/bank-card-widget/js/bank-card-widget.js





// Класс для создания виджета и взаимодействия с DOM
class BankCardWidget {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.createWidget();
  }

  // Метод, добавляющий виджет в DOM
  createWidget() {
    const divWidget = document.createElement("div");
    this.parentElement.append(divWidget);
    divWidget.classList.add("bank-card-widget");
    this.divCards = document.createElement("div");
    divWidget.append(this.divCards);
    this.divCards.classList.add("cards");
    let htmlText = "";
    for (let src in logo_cards_namespaceObject) {
      htmlText += `<img src="${logo_cards_namespaceObject[src]}" alt = "${src}" class = "card ${src}">`;
    }
    this.divCards.innerHTML = htmlText;
    const divForm = document.createElement("div");
    htmlText = `
    <form class="bank-card-widget-form">
      <input type="text" placeholder="Введите номер банковской карты" class="bank-card-widget-input" required>
      <button type="submit" class="bank-card-widget-button">Click to Validate</button>
    </form>`;
    divForm.innerHTML = htmlText;
    divWidget.append(divForm);
    this.input = document.querySelector(".bank-card-widget-input");
    this.cardNumberValidation = this.cardNumberValidation.bind(this);
    divForm.addEventListener("submit", this.cardNumberValidation);
    this.removesSelection = this.removesSelection.bind(this);
    divForm.addEventListener("input", this.removesSelection);
  }

  // Метод, определяющий взаимодействие с DOM
  cardNumberValidation(e) {
    e.preventDefault();
    const valid = luhnCheck(this.input.value);
    if (!valid) {
      this.input.classList.add("invalid");
      return;
    }
    this.input.classList.add("valid");
    const payment = definitionPaymentSystem(this.input.value);
    const activCard = this.divCards.querySelector(`.${payment}`);
    activCard.classList.add("active");
  }
  removesSelection() {
    if (this.divCards.querySelector(".active")) {
      const activCard = this.divCards.querySelector(".active");
      activCard.classList.remove("active");
    }
    if (this.input.classList.contains("valid")) {
      this.input.classList.remove("valid");
    }
    if (this.input.classList.contains("invalid")) {
      this.input.classList.remove("invalid");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementsByTagName("body")[0];
  new BankCardWidget(body);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
import Swal from "sweetalert2";
import { getMeData } from "./auth-utils";
import {
  BILLION,
  BILLION_COUNT,
  MILLION,
  MILLION_COUNT,
  MOBILE_SIZE,
} from "./constants";

export function checkIsMobile(width: number) {
  return width >= MOBILE_SIZE.min && width <= MOBILE_SIZE.max;
}

export function trimText(text: string, limit: number) {
  if (!text) return "";

  if (text.length < limit) return text;

  return `${text.substring(0, limit)}...`;
}

export function timestampToDate(timestamp: number) {
  const date = new Date(timestamp);

  const day = date.getDate() < 10 ? `0${date.getDay()}` : date.getDate();
  const month = (date.getMonth() as number) + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function viDateFormat(dateString: string | number) {
  const date = new Date(dateString);
  const day = date.getDate() < 10 ? `0${date.getDay()}` : date.getDate();
  const month = (date.getMonth() as number) + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function toCamelCaseFromSnakeCase(label: string) {
  label = label.toLowerCase();
  label = setCharAt(label, 0, label[0]?.toUpperCase());
  for (let i = 0; i < label.length; i++) {
    const e = label[i];
    if (e === "-") {
      label = setCharAt(label, i, " ");
      label = setCharAt(label, i + 1, label[i + 1]?.toUpperCase());
    }
  }
  const decodedLabel = label.split("#")[0];
  return decodedLabel;
}

export function setCharAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

export function formatMoneyAmount(ma: number) {
  let maInString = ma?.toString() || "";

  if (maInString.length >= BILLION_COUNT) {
    const takenNumber = maInString.slice(0, maInString.length - 9);
    const decimal = maInString.slice(maInString.length - (BILLION_COUNT - 1));

    return `${thousandSeparator(takenNumber)},${decimal.substr(0, 1)}`;
  }
  if (maInString.length >= MILLION_COUNT) {
    const takenNumber = maInString.substring(
      0,
      maInString.length - (MILLION_COUNT - 1)
    );
    const decimal = maInString.slice(maInString.length - (MILLION_COUNT - 1));
    return `${thousandSeparator(takenNumber)},${decimal.substr(0, 1)}`;
  }

  return thousandSeparator(maInString);
}

export function thousandSeparator(x: string | number) {
  if (!x) return;
  return (typeof x === "number" ? x.toString() : x).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );
}

export function getMoneySuffix(amount: number) {
  if (amount >= BILLION) return "billion-suffix";
  if (amount >= MILLION) return "million-suffix";
  return "";
}

export function getActivePath(pathname: string) {
  return `/${pathname.split("/")[1]}`;
}

export function getCompanyId() {
  const { company } = getMeData();

  return company?.id as number;
}
export function getCompanyName() {
  const { company } = getMeData();

  return company?.name;
}
export function getLoggedInUser() {
  const { user } = getMeData();

  return user;
}

export function getObjectIds(array: any[]) {
  if (!array?.length) return;

  const ids = array.map((obj) => {
    if (typeof obj.id === "string") return parseInt(obj.id);
    return obj.id;
  });

  return ids;
}

export function preventSubmitOnEnter() {
  return {
    onKeyDown: (e: React.KeyboardEvent<any>) => {
      if (e.keyCode === 13) e.preventDefault();
    },
  };
}

export function callOnEnter(handler: (e: React.KeyboardEvent<any>) => void) {
  return {
    onKeyDown: (e: React.KeyboardEvent<any>) => {
      if (e.keyCode === 13) handler(e);
    },
  };
}

// @TODO: Check this since it's from stackoverflow
export function generateUUID() {
  let d = new Date().getTime(); //Timestamp
  let d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function getExtXversion(ext: string[]) {
  let t = "";

  ext.forEach((e) => (t += `${e}, ${e}x,`));

  return t;
}

export function getDocumentAccept() {
  return `.pdf, ${getExtXversion(["doc", "xls", "ppt"])}`;
}

export function removeTypenameOfChildrens(childrens: any[] = []) {
  return childrens.map((child) => {
    const { __typename, ...c } = child;
    return c;
  });
}

export function removeTypename(data: any) {
  const { __typename, ...dataWithoutTypename } = data || {};
  return dataWithoutTypename;
}

export function getYear(stringDate: string) {
  if (!stringDate) return "";
  const year = new Date(stringDate).getFullYear();
  return year;
}

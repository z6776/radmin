import type {  BaseFormList } from '#/form';
import type { TFunction } from "i18next";

export function searchList(t:TFunction):BaseFormList[]{
  return [{
    label:t("product.name"),
    name:"productName",
      component: 'Input'
 }]
} 
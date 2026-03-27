import { searchList } from "./model";
import { t } from "i18next";
import { useCallback } from "react";
const initData = {
   
}

function ProductList(){

   const handleFinish = useCallback((param:any)=>{
         console.log(param)
   },[])

    return (
      <BaseCard>
          <BaseSearch
          list={searchList(t)}
          data={initData}
          handleFinish={handleFinish}
          ></BaseSearch>
      </BaseCard>
    )
}

export default ProductList;
import React, { useRef, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Input from "../components/Input";
import Button from "../components/Button";
import { getItems } from "../remote/remote_api_serivce";

export default function QrPage() {
  const [data, setData] = useState("مقداری پیدا نشد");
  const [textInput, setTextInput] = useState("");

  const previousData = useRef(""); // Store the previous scanned data
  const [apiResult, setApiResult] = useState();
  const handleUpdate = (err, result) => {
    if (result && result.text !== previousData.current) {
      //{

      console.log(result.text);
setTimeout(() => {
  getItem(result.text);
}, 300);
      //}
      setData(result.text);

      // getItem(qrcode);
      previousData.current = result.text; // Update the previous data
    } else if (!result && previousData.current !== "مقداری پیدا نشد") {
      // Handle the case where no result is found
      setData("مقداری پیدا نشد");
      previousData.current = "مقداری پیدا نشد";
    }
  };

  return (
    <>
      <div className="flex w-full h-screen flex-col justify-start items-center">
        <div className="bg-amber-400 w-[250px] h-[250px] mt-[32px]">
          <BarcodeScannerComponent
          width={250}
          height={250}
          onUpdate={handleUpdate}
          onError={(v)=> console.log(v)}
        />
        </div>
        <p>{data}</p>
        <Input placeholder={"مقدار"} onChange={(e) => setTextInput(e.target.value)} />
        <Button onClick={()=> getItem(textInput)}/>
        {/* Additional Container */}
        {apiResult ? (
          <div className="flex flex-col p-2 border border-gray-300 gap-2 rounded-lg mt-3 mx-4 max-sm:self-stretch">
            {/* Add content here */}
            <div dir="rtl" className="flex flex-row gap-40 justify-between">
              <h3>اسم کالا</h3>
              <h3>{apiResult.item_title}</h3>
            </div>
            <div dir="rtl" className="flex flex-row gap-40 justify-between">
              <h3>واحد</h3>
              <h3>{apiResult.unit}</h3>
            </div>
            <div dir="rtl" className="flex flex-row gap-40 justify-between">
              <h3>قیمت</h3>
              <h3>{apiResult.fee}</h3>
            </div>
            <div dir="rtl" className="flex flex-row gap-40 justify-between">
              <h3>موجودی</h3>
              <h3>{apiResult.quantity}</h3>
            </div>
          </div>
        ) : <h3 className="mt-2">داده ای جهت نمایش وجود ندارد</h3>}
      </div>
    </>
  );

async  function getItem(qrcode) {
try {
  setApiResult(await getItems(qrcode));

}catch(e) {
  console.log(e);
}
}
}

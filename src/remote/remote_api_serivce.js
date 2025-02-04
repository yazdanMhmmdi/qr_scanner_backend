import { _post } from "./api_client";

export async function getItems(qrcode) {
  const response = await _post(
   '/qrcode',
    {
      qrcodeText: qrcode,
    }, {

    }
  );

  return response.data.result[0];
}

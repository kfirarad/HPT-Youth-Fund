// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

serve(async (req) => {
  const { amount } = await req.json()

  const terminalNumber = Deno.env.get('CARDCROM_TERMINAL_NUMBER');
  const userName = Deno.env.get('CARDCROM_USER_NAME');

  const formData = new URLSearchParams()
  const params = {
    'TerminalNumber': terminalNumber,
    'UserName': userName,
    'APILevel': '9',
    'codepage': '65001',
    'Operation': '1',
    'Languge': 'he',
    'CoinID': '1',
    'SumToBill': amount,
    'ProductName': 'Test',
    'SuccessRedirectUrl': 'https://secure.cardcom.co.il/DealWasSuccessful.aspx',
    'ErrorRedirectUrl': 'https://secure.cardcom.co.il/DealWasUnSuccessful.aspx?customVar=1234'
  }

  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }

  const response = await fetch("https://secure.cardcom.solutions/BillGoldLowProfile.aspx", {
    body: formData.toString(),
    method: 'POST',
  })

  if (response.ok) {
    const resBody = await response.text();
    const responseValues = resBody.split(';');
    const [status, paymentCode, statusText] = responseValues;
    if (status === '0') {

      const iframeUrl =
        `https://secure.cardcom.solutions/External/lowProfileClearing/${terminalNumber}.aspx?LowProfileCode=${paymentCode}`

      return new Response(
        JSON.stringify({ ok: true, paymentCode: paymentCode, iframeUrl: iframeUrl }),
        { headers: { "Content-Type": "application/json" } },
      )
    } else {
      return new Response(
        JSON.stringify({ ok: false, error: statusText }),
        { headers: { "Content-Type": "application/json" } },
      )
    }
  }
  return new Response(
    JSON.stringify({ ok: false, error: 'Error while contacting payment system' }),
    { headers: { "Content-Type": "application/json" } },
  )

})
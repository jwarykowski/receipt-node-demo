const { receiptToHtml } = require("@npco/receipt")
const css = require.resolve('@npco/receipt/css')

const data = {
  business: {
    abn: '11 222 333 444',
  },
  site: {
    name: 'Gimlet',
    businessName: 'Gimlet at Cavendish House',
    address: ['303 Exhibition St', 'Melbourne VIC 3000'],
    logo: 'https://services.myzeller.com/zeller.svg',
    email: 'frontdesk@gimlet.melbourne',
    website: 'gimlet.com',
    socials: {
      facebook: 'gimlet.melbourne.fb',
      x: 'gimlet.melbourne.x',
      instagram: 'gimlet.melbourne.i',
      linkedin: 'gimlet.melbourne.l',
    },
    phone: '(03) 9277 9777',
  },
  transaction: {
    ref: '280673995816',
    type: 'sale',
    status: 'approved',
    timestamp: '2021-11-04T05:45:12.345Z',
    card: {
      pan: '9396',
      issuer: 'VISA',
      media: '(T)',
    },
    device: '00005898',
    aid: ['A0000000031010', '001E 00 0000 0000000000'],
  },
  total: 310_86,
  totalGst: 31_86,
  totalSurcharge: 4_41,
  totalTips: 10_00,
  isTaxInvoice: false,
  items: [
    { name: 'Country Sourdough', total: 8_00, gstFree: true },
    { name: 'Gnocco Fritto', total: 1_200 },
    { name: 'Gimlet Gilda', total: 6_00 },
    {
      name: 'Gippsland Strip Steak',
      total: 58_00,
      addons: [{ name: 'Medium-Rare', total: 0, gstFree: true }],
    },
    {
      name: 'Gippsland Strip Steak',
      total: 62_50,
      addons: [{ name: 'Pepper Sauce', total: 4_50 }],
    },
    { name: 'Northlaine Gamay', total: 149_95 },
  ],
  remarks: [
    "If you're not happy with your purchase, you can send item back to us FREE of charge within 100 days of the delivery date.",
    'Thank you for visiting us and making your first purchase! We’re glad that you found what you were looking for. Have a great day!',
  ],
}

exports.handler = async (event, context) => {
  console.log(event);
  console.log(context);

  const html = receiptToHtml({ data, css })

  return html;
}

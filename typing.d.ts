interface IDetailCommodity {
  value: string;
  name: string;
  display: string;
  id: string;
}

interface ICommodity {
  national_commodity_price: {
    [key: string]: IDetailCommodity[];
  };
  updated_at: string;
}

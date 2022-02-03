import got from 'got';

export async function getOrderLists(data) {
  let url = `/Web/OrderList?omsID=${data.omsID}&orderDateKind=${data.orderDateKind}&startDate=${
    data.startDate
  }&endDate=${data.endDate}&startIndex=${data.startIndex}&display=${data.display}&sort=${data.sort}${
    data.detailSearchType && data.detailSearchValue
      ? `detailSearchType=${data.detailSearchType}&detailSearchValue=${data.detailSearchValue}`
      : ''
  }`;
  const response = await got.get(url);
  return response.args;
}

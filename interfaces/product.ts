export interface StoreProductIDSyncList {
  key?: number;
  seq?: number;
  omsID?: number;
  productID?: string;
  wmsID?: string;
  storeKind?: OPENMARKET_KIND;
  exportCount: number;
  regDate?: string;
  modifyDate?: string;
  title?: string;
  wmsTitle?: string;
}

export enum DetailSearchType {
  RECEIVE_NAME = 'RECEIVE_NAME',
  ORDERER_NAME = 'ORDERER_NAME',
  ORDERER_TEL = 'ORDERER_TEL',
  ORDERERID = 'ORDERERID',
  ORDERID = 'ORDERID',
  PRODUCT_ORDERID = 'PRODUCT_ORDERID',
  PRODUCT_ID = 'PRODUCT_ID',
  TRACKINGNUMBER = 'TRACKINGNUMBER',
}

export enum OPENMARKET_KIND {
  //A
  AUCTION = 'AUCTION',
  AKMALL = 'AKMALL',
  ALLETS = 'ALLETS',
  //B
  BLOGPAY = 'BLOGPAY',
  //C
  COUPANG = 'COUPANG',
  CAFE24 = 'CAFE24',
  CM29 = '29CM',
  CJONESTYLE = 'CJONESTYLE',
  COZEMALL = 'COZEMALL',
  //D
  DOMEGGOOK = 'DOMEGGOOK',
  //E
  ESM_PLUS = 'ESM_PLUS',
  ECOUNT = 'ECOUNT',
  ELANDMALL = 'ELANDMALL',
  EDUPANG = 'EDUPANG',
  //F
  FEELWAY = 'FEELWAY',
  //G
  GODOMALL5 = 'GODOMALL5',
  GMARKET = 'GMARKET',
  GSSHOP = 'GSSHOP',
  GOLDII = 'GOLDII',
  //H
  HMALL = 'HMALL',
  HOMEANDSHOPPING = 'HOMEANDSHOPPING',
  HYUNDAI = 'HYUNDAI',
  HOMEPLUS = 'HOMEPLUS',
  HNSMALL = 'HNSMALL',
  HOMECC = 'HOMECC',
  HSMOA = 'HSMOA',
  //I
  INTERPARK = 'INTERPARK',
  IMWEB = 'IMWEB',
  //J
  //K
  KAKAOSHOPPING = 'KAKAOSHOPPING',
  KSHOPPING = 'KSHOPPING',
  //L
  LOTTEON = 'LOTTEON',
  LOTTEHOMESHOPPING = 'LOTTEHOMESHOPPING',
  //M
  MELCHISHOPPING = 'MELCHISHOPPING',
  MAKESHOP = 'MAKESHOP',
  MUSINSA = 'MUSINSA',
  MYVITAMINMARKET = 'MYVITAMINMARKET',
  //N
  NAVER = 'NAVER',
  NSSHOPPING = 'NSSHOPPING',
  //O
  OSELLER = 'OSELLER',
  ODGAGU = 'ODGAGU',
  //P
  PEOPET = 'PEOPET',
  PUBLICHS = 'PUBLICHS',
  PUNGPUNGMALL = 'PUNGPUNGMALL',
  PRICEGOLF = 'PRICEGOLF',
  //Q
  QTEN = 'QTEN',
  //R
  //S
  ST11 = '11ST',
  SHOPEE = 'SHOPEE',
  SSG_COM = 'SSG_COM',
  SELF_LOGISTIC = 'SELF_LOGISTIC', //자사물류
  SABANGNET = 'SABANGNET',
  SHOPLINKER = 'SHOPLINKER',
  SKSTOA = 'SKSTOA',
  SHOPPINGNT = 'SHOPPINGNT',
  SHINSEGAETVSHOPPING = 'SHINSEGAETVSHOPPING',
  //T
  TIMON = 'TIMON',
  TENBYTEN = 'TENBYTEN',
  //U
  //V
  //W
  WEMAKEPRICE = 'WEMAKEPRICE',
  WIZWID = 'WIZWID',
  //X
  //Y
  YES24DOTCOM = 'YES24DOTCOM',
  //Z
}

export interface Order {
  OrderID: string; //  주문번호(장바구니별 동일번호가 부여됨)
  OrderDate: Date; // string($date-time)| 주문일시
  OrdererID?: string;
  OrdererName?: string; //  구매자명
  OrdererTel1?: string; //  구매자연락처
  OrdererTel2?: string;
  /**
   * 결제 일시(최종 결제)
   */
  PaymentDate?: Date;

  /**
   * 결제 수단.    신용카드, 휴대폰, 무통장입금, 실시간계 좌이체, 포인트결제, 신용카드 간편결제, 계좌 간편결제, 휴대폰 간편결제, 나중에 결제 중 하나의 값을 입력한다.
   */
  PaymentMeans?: string;
  /**
   * 결제 기한
   */
  PaymentDueDate?: Date;

  /**
   * 후불결제 최종 결제 금액
   */
  PayLaterPaymentAmount?: number;

  /**
   * 주문 할인액.주문을 부분 취소하면 이 값은 변경될 수 있다.
   */
  OrderDiscountAmount?: number;

  /**
   * 일반결제수단최종결제금액
   */
  GeneralPaymentAmount?: number;

  /**
   * 충전금최종결제금액
   */
  ChargeAmountPaymentAmount?: number;

  /**
   * 네이버페이 적립금 최종 결제 금액
   */
  CheckoutAccumulationPaymentAmount?: number;

  /**
   * 배송메모개별입력여부
   */
  IsDeliveryMemoParticularInput?: string;

  /**
   * 결제 위치 구분(PC/MOBILE)
   */
  PayLocationType?: string;

  /**
   * 주문자 번호
   */
  OrdererNo?: string;

  /**
   * 네이버페이 포인트 최종 결제 금액
   */
  NaverMileagePaymentAmount?: number;
}

export interface ProductOrder {
  ProductOrderID: string; //  상품주문번호(같은 장바구니에 있어도 상품이 다를 경우 각 상품마다 다른 상품주문번호를 부여함)

  ProductID: string; //  상품번호(각 상품의 고유 번호)

  ProductName: string; //  상품명

  Quantity: number; // number| 수량

  /**
   * 판매자 아이디
   */
  MallID?: string;
  /**
   * 클레임 타입 코드
   */
  ClaimType?: ClaimType;

  ClaimStatus?: ClaimStatus;
  /**
   * 상품종류
   * ProductClass : 추가구성상품   <== 값인 경우 본품 ( Order.OrderID의 같은 상품을 같이 취소,반품,교환 처리해야된다. )
   */
  ProductClass?: string;

  ProductOption?: string; //  옵션정보
  // Quantity?: number; // number| 수량 현 스웨상 상태값은 필수 아님?

  ProductOrderStatus?: string; // 주문 상태

  /**
   * 상품 가격
   */
  UnitPrice?: number;

  /**
   * 옵션 가격
   */
  OptionPrice?: number;

  /**
   * 옵션코드 신규로 추가된 ItemNo 와 동일한 값을 입력 한다. 이 필드는 deprecated 될 예정이다.
   */
  OptionCode?: string;

  /**
   * 상품주문금액(할인적용전금액)
   */
  TotalProductAmount?: number;

  /**
   * 상품별 할인액(즉시 할인+상품 할인 쿠폰+ 복수 구매 할인).
   */
  ProductDiscountAmount?: number;

  /**
   * 상품별즉시할인금액
   */
  ProductImediateDiscountAmount?: number;

  /**
   * 상품별상품할인쿠폰금액
   */
  ProductProductDiscountAmount?: number;

  /**
   * 상품별복수구매할인금액
   */
  ProductMultiplePurchaseDiscountAmount?: number;

  /**
   * 총결제금액(할인적용후금액)
   */
  TotalPaymentAmount?: number;

  /**
   * 판매자 상품 코드(판매자가 임의로 지정)
   */
  SellerProductCode?: string;

  ShippingAddress?: Address;
  /**
     * 구매자 선택 배송 방법

     */
  ExpectedDeliveryMethod?: string; //원래 type은 DeliveryMethodCode

  /**
   * 묶음배송번호
   */
  PackageNumber: string;

  /**
   * 배송비 형태(선결제/후결제/무료)
   */
  ShippingFeeType?: string;

  /**
   * 배송비 정책(유료/조건별 무료/무료 등) = 배송비유형
   */
  DeliveryPolicyType?: string;

  /**
   * 배송비 합계.상품 주문 중 일부를 나중에 취소하여 배송 비가 변동되면, 변동된 최종 배송비가 입력 된다. 배송비 할인이나 지역별 추가 배송 비용은 적용되지 않는다.
   */
  DeliveryFeeAmount?: number;

  /**
   * 지역별 추가 배송비
   */
  SectionDeliveryFee?: number;

  /**
   * 배송비 최종 할인액
   */
  DeliveryDiscountAmount?: number;

  /**
   * 배송메모
   */
  ShippingMemo?: string;

  /**
   * 출고지 주소
   *
   */
  TakingAddress?: Address;

  /**
   * 발송기한
   */
  ShippingDueDate?: Date;

  /**
   * 구매확정일
   */
  DecisionDate?: Date;

  /**
   * 사은품
   */
  FreeGift?: string;
  /**
   * 발주 상태 코드
   */
  PlaceOrderStatus?: PlaceOrderStatus;

  /**
   * 발주 확인일
   */
  PlaceOrderDate?: Date;

  /**
   * 발송 지연 사유 코드
   */
  DelayedDispatchReason?: DelayedDispatchReason;

  /**
   * 발송 지연 상세 사유
   */
  DelayedDispatchDetailedReason?: string;

  /**
   * 판매자 부담 할인액
   */
  SellerBurdenDiscountAmount?: number;

  /**
   * 판매자부담즉시할인금액
   */
  SellerBurdenImediateDiscountAmount?: number;

  /**
   * 판매자부담상품할인쿠폰금액
   */
  SellerBurdenProductDiscountAmount?: number;

  /**
   * 판매자부담복수구매할인금액
   */
  SellerBurdenMultiplePurchaseDiscountAmount?: number;

  /**
   * 수수료 과금 구분(결제 수수료/(구)판매 수 수료/채널 수수료)
   */
  CommissionRatingType?: string;

  /**
   * 수수료 결제 방식 코드
   */
  CommissionPrePayStatus?: CommissionPrePayStatus;

  /**
   * 결제 수수료
   */
  PaymentCommission?: number;

  /**
   * (구)판매 수수료
   */
  SaleCommission?: number;

  /**
   * 채널 수수료
   */
  ChannelCommission?: number;

  /**
   * 매출연동수수료
   */
  KnowledgeShoppingSellingInterlockCommission?: number;

  /**
   * 정산 예정 금액
   */
  ExpectedSettlementAmount?: number;

  /**
   *매출연동 유입 경로(검색광고(SA)/공동구매/밴드/네이버 쇼핑 외)
   */
  InflowPath?: string;

  /**
   * 옵션상품이나 추가상품등록시 자동생성된 아이템 번호로, 옵션 상품, 추가 상품 을 구분하는 고유 값. OptionCode 와 동일한 값을 입력한다.
   */
  ItemNo: string;

  /**
   * 옵션상품이나 추가상품등록시 판매자가 별도로 입력한 옵션 관리 코드. 옵션 상품이나 추가 상품인 경우에 입력한다.
   */
  OptionManageCode?: string;

  /**
   * 구매자 주민등록번호. 해외 배송 상품인 경우 구매자가 입력한 주 민등록번호를 암호화한 값이다. 구매 확정, 교환, 반품, 취소, 미결제 취소 상태의 거래 종료 주문에서는 노출되지 않는다.
   */
  PurchaserSocialSecurityNo?: string;

  /**
   * 판매자가 내부에서 사용하는 코드 1
   */
  SellerCustomCode1?: string;

  /**
   * 판매자가 내부에서 사용하는 코드 2
   */
  SellerCustomCode2?: string;

  /**
   * 클레임 번호
   */
  ClaimID?: string;

  /**
   * 구매자 개인통관고유부호. 해외 배송 상품인 경우 구매자가 입력한 개 인통관고유부호를 암호화한 값이다. 구매 확정, 교환, 반품, 취소, 미결제 취소 상태의 거래 종료 주문에서는 노출되지 않는다.
   */
  IndividualCustomUniqueCode?: string;

  /**
   * 선물 수신 상태 코드
   */
  GiftReceivingStatus?: GiftReceiveStatus;
}

export enum CommissionPrePayStatus {
  /** */
  GENERAL_PRD = 'GENERAL_PRD',
  /** */
  PRE_PAY_PRD_NO_PAY = 'PRE_PAY_PRD_NO_PAY',
  /** */
  PRE_PAY_PRD_PAYED = 'PRE_PAY_PRD_PAYED',
}

export enum GiftReceiveStatus {
  /** 수락대기( 배송지 입력대기 )*/
  WAIT_FOR_RECEIVING = 'WAIT_FOR_RECEIVING', //수락대기( 배송지 입력대기 )
  /** 수락 완료 */
  RECEIVED = 'RECEIVED', //수락 완료
}

export enum DelayedDispatchReason {
  /** */
  PRODUCT_PREPARE = 'PRODUCT_PREPARE',
  /** */
  CUSTOMER_REQUEST = 'CUSTOMER_REQUEST',
  /** */
  CUSTOM_BUILD = 'CUSTOM_BUILD',
  /** */
  RESERVED_DISPATCH = 'RESERVED_DISPATCH',
  /** */
  ETC = 'ETC',
}

export enum PlaceOrderStatus {
  /** 발주 미확인 */
  NOT_YET = 'NOT_YET',
  /** 발주 확인*/
  OK = 'OK',
  /** 발주 확인 해제*/
  CANCEL = 'CANCEL',
}

export class ProductOrderInfo {
  key?: number; //OMS 주문순서 ㄴ번호
  excelIndex?: number; //판매몰 주문순서 번호
  /** 주문 정보*/
  Order: Order;

  /**
   * 상품 주문 정보 목록
   */
  ProductOrder: ProductOrder;

  /**
   * OMS사용자 ID
   */
  omsID?: number;

  /**
   * (OMS사용자)  택배사 코드
   */
  deliveryCompanyCode?: string;

  servicemarketDeliveryCompanyCode?: string; //판매몰별 택배사코드

  /**
   * 송장번호
   */
  trackingNumber?: string;

  /**
   * 주문이 들어온 오픈마켓 종류
   */
  openmarketKind: OPENMARKET_KIND;

  exportProductList?: StoreProductIDSyncList[];
}

/**
 * 택배사 코드
 */
export enum DeliveryCompanyCode {
  CJGLS = 'CJGLS',
  KGB = 'KGB',
  EPOST = 'EPOST',
  REGISTPOST = 'REGISTPOST',
  HANJIN = 'HANJIN',
  HYUNDAI = 'HYUNDAI',
  DAESIN = 'DAESIN',
  ILYANG = 'ILYANG',
  KDEXP = 'KDEXP',
  CHUNIL = 'CHUNIL',
  CH1 = 'CH1',
  HDEXP = 'HDEXP',
  CVSNET = 'CVSNET',
  DHL = 'DHL',
  FEDEX = 'FEDEX',
  GSMNTON = 'GSMNTON',
  WARPEX = 'WARPEX',
  WIZWA = 'WIZWA',
  EMS = 'EMS',
  DHLDE = 'DHLDE',
  ACIEXPRESS = 'ACIEXPRESS',
  EZUSA = 'EZUSA',
  PANTOS = 'PANTOS',
  UPS = 'UPS',
  HLCGLOBAL = 'HLCGLOBAL',
  KOREXG = 'KOREXG',
  TNT = 'TNT',
  SWGEXP = 'SWGEXP',
  DAEWOON = 'DAEWOON',
  USPS = 'USPS',
  IPARCEL = 'IPARCEL',
  KUNYOUNG = 'KUNYOUNG',
  HPL = 'HPL',
  SLX = 'SLX',
  HONAM = 'HONAM',
  GSIEXPRESS = 'GSIEXPRESS',
  SEBANG = 'SEBANG',
  NONGHYUP = 'NONGHYUP',
  CUPARCEL = 'CUPARCEL',
  AIRWAY = 'AIRWAY',
  HOMEPICK = 'HOMEPICK',
  APEX = 'APEX',
  CWAYEXPRESS = 'CWAYEXPRESS',
  YONGMA = 'YONGMA',
  EUROPARCEL = 'EUROPARCEL',
  KGSL = 'KGSL',
  GOS = 'GOS',
  GSPOSTBOX = 'GSPOSTBOX',
  ADCAIR = 'ADCAIR',
  DONGGANG = 'DONGGANG',
  KIN = 'KIN',
  HANWOORI = 'HANWOORI',
  LGLOGISTICS = 'LGLOGISTICS',
  GENERALPOST = 'GENERALPOST',
  HANDALUM = 'HANDALUM',
  HOWSER = 'HOWSER',
  WEVILL = 'WEVILL',
  ACE = 'ACE',
  QXPRESS = 'QXPRESS',
  LINEEXP = 'LINEEXP',
  SMARTLOGIS = 'SMARTLOGIS',
  DAELIM = 'DAELIM',
  EUNHA = 'EUNHA',
  HOMEINNO = 'HOMEINNO',
  HYBRID = 'HYBRID',
  WOORIHB = 'WOORIHB',
  YJSWORLD = 'YJSWORLD',
  YJS = 'YJS',
  CRLX = 'CRLX',
  ANYTRACK = 'ANYTRACK',
  BRIDGE = 'BRIDGE',
  GPSLOGIX = 'GPSLOGIX',
  ESTHER = 'ESTHER',
  LOTOS = 'LOTOS',
  UFREIGHT = 'UFREIGHT',
  IK = 'IK',
  SUNGHUN = 'SUNGHUN',
  ETC = 'ETC',
}

/**
 * 배송방법 코드 정의
 */
export enum DeliveryMethodCode {
  /** 택배 , 등기 , 소포 */
  DELIVERY = 'DELIVERY', //택배 , 등기 , 소포
  /** 방문수령 */
  VISIT_RECEIPT = 'VISIT_RECEIPT', //방문수령
  /** 직접전달 */
  DIRECT_DELIVERY = 'DIRECT_DELIVERY', //직접전달
  /** */
  QUICK_SVC = 'QUICK_SVC', //퀵서비스
  /**배송없음  */
  NOTHING = 'NOTHING', //배송없음
  // 반송
  /** 지정반품 택배 */
  RETURN_DESIGNATED = 'RETURN_DESIGNATED', //지정반품 택배
  /**일반 반품 택배 */
  RETURN_DELIVERY = 'RETURN_DELIVERY', //일반 반품 택배
  /** 직접 반송 */
  RETURN_INDIVIDUAL = 'RETURN_INDIVIDUAL', //직접 반송
}

export enum ClaimType {
  /** 취소*/
  CANCEL = 'CANCEL',
  /** 반품*/
  RETURN = 'RETURN',
  /** 교환*/
  EXCHANGE = 'EXCHANGE',
  /** 구매확정 보류 삭제예정 2021-04-15*/
  PURCHASE_DECISION_HOLDBACK = 'PURCHASE_DECISION_HOLDBACK',
  /** 직권취소*/
  ADMIN_CANCEL = 'ADMIN_CANCEL', //직권취소
}

export enum ClaimStatus {
  CANCEL_REJECT = 'CANCEL_REJECT',
  COLLECTING = 'COLLECTING',
  COLLECT_DONE = 'COLLECT_DONE',
  RETURN_REQUEST = 'RETURN_REQUEST',
  RETURN_DONE = 'RETURN_DONE',
  RETURN_REJECT = 'RETURN_REJECT',
  EXCHANGE_REQUEST = 'EXCHANGE_REQUEST',
  EXCHANGE_REDELIVERING = 'EXCHANGE_REDELIVERING',
  EXCHANGE_DONE = 'EXCHANGE_DONE',
  EXCHANGE_REJECT = 'EXCHANGE_REJECT',
  PURCHASE_DECISION_HOLDBACK = 'PURCHASE_DECISION_HOLDBACK',
  PURCHASE_DECISION_HOLDBACK_REDELIVERING = 'PURCHASE_DECISION_HOLDBACK_REDELIVERING',
  PURCHASE_DECISION_REQUEST = 'PURCHASE_DECISION_REQUEST',
  PURCHASE_DECISION_HOLDBACK_RELEASE = 'PURCHASE_DECISION_HOLDBACK_RELEASE',
  ADMIN_CANCELING = 'ADMIN_CANCELING',
  ADMIN_CANCEL_DONE = 'ADMIN_CANCEL_DONE',
  RETURN_RESULT_COMPLET = 'RETURN_RESULT_COMPLET',
}

export enum AddressType {
  /** 국내*/
  DOMESTIC = 'DOMESTIC',
  /** 국외*/
  FOREIGN = 'FOREIGN',
}

export interface Address {
  Name: string; //  수취인명
  Tel1: string; //  수취인연락처1
  Tel2?: string; //  수취인연락처2

  // @ApiPropertyOptional( { description : '주소 타입 코드' , enum : EnumToArray( AddressType )})
  AddressType?: AddressType;

  /**
   * 우편번호
   */
  // @ApiPropertyOptional( { description : '우편번호'})
  ZipCode?: string;

  /**
   * 기본 주소
   */
  // @ApiPropertyOptional( { description : '기본 주소'})
  BaseAddress: string;

  /**
   * 상세 주소
   */
  // @ApiPropertyOptional( { description : '상세 주소'})
  DetailedAddress?: string;

  /**
   * 도로명 주소 여부
   */
  // @ApiPropertyOptional( { description : '도로명 주소 여부'})
  IsRoadNameAddress?: boolean;

  /**
   * 도시. 국내 주소에는 빈 문자열('')을 입력한다.
   */
  // @ApiPropertyOptional( { description : "도시. 국내 주소에는 빈 문자열('')을 입력한다."})
  City?: string;

  /**
   * 주(state). 국내 주소에는 빈 문자열('')을 입력한다.
   */
  // @ApiPropertyOptional( { description : "주(state). 국내 주소에는 빈 문자열('')을 입력한다."})
  State?: string;

  /**
   * 국가. 국내 주소에는 빈 문자열('')을 입력한다.
   */
  // @ApiPropertyOptional( { description : "국가. 국내 주소에는 빈 문자열('')을 입력한다."})
  Country?: string;
}

export interface Delivery {
  SendDate?: string; // string($date-time)| 발송처리일
  DeliveredDate?: string; // string($date-time)| 배송완료일
  DeliveryCompany?: DeliveryCompanyCode; //  택배사
  DeliveryStatus?: string; //  배송상세상태
  TrackingNumber?: string; //  송장번호
  WrongTrackingNumberType?: string; //  오류송장등록사유
  WrongTrackingNumberRegisteredDate?: string; // string($date-time)| 오류송장등록일
}

export interface DecisionHoldbackInfo {
  DecisionHoldbackReason?:
    | 'PRODUCT_UNSATISFIED'
    | 'DELAYED_DELIVERY'
    | 'SOLD_OUT'
    | 'INTENT_CHANGED'
    | 'COLOR_AND_SIZE'
    | 'WRONG_ORDER'
    | 'DROPPED_DELIVERY'
    | 'BROKEN'
    | 'INCORRECT_INFO'
    | 'WRONG_DELIVERY'
    | 'WRONG_OPTION'
    | 'ETC'; //  구매자확정연장상태
}

export interface ChangedProductOrderInfo {
  LastChangedDate: string;
  LastChangedStatus: string;
  OrderID: string;
  PaymentDate: string;
  ProductOrderID: string;
  ProductOrderStatus: string;
  IsReceiverAddressChanged: false;
  regDate: string;
}

export interface CancelInfo {
  ClaimStatus?:
    | 'CANCEL_REQUEST'
    | 'CANCELING'
    | 'CANCEL_DONE'
    | 'CANCEL_REJECT'
    | 'COLLECTING'
    | 'COLLECT_DONE'
    | 'RETURN_REQUEST'
    | 'RETURN_DONE'
    | 'RETURN_REJECT'
    | 'EXCHANGE_REQUEST'
    | 'EXCHANGE_REDELIVERING'
    | 'EXCHANGE_DONE'
    | 'EXCHANGE_REJECT'
    | 'PURCHASE_DECISION_HOLDBACK'
    | 'PURCHASE_DECISION_HOLDBACK_REDELIVERING'
    | 'PURCHASE_DECISION_REQUEST'
    | 'PURCHASE_DECISION_HOLDBACK_RELEASE'
    | 'ADMIN_CANCELING'
    | 'ADMIN_CANCEL_DONE'
    | 'RETURN_RESULT_COMPLET'
    | 'RETURN_RESULT_COMPLET'; //  취소처리상태
  ClaimRequestDate?: string; // string($date-time)| 취소요청일
  RequestChannel?: string; //  접수채널
  CancelReason?:
    | 'PRODUCT_UNSATISFIED'
    | 'DELAYED_DELIVERY'
    | 'SOLD_OUT'
    | 'INTENT_CHANGED'
    | 'COLOR_AND_SIZE'
    | 'WRONG_ORDER'
    | 'DROPPED_DELIVERY'
    | 'BROKEN'
    | 'INCORRECT_INFO'
    | 'WRONG_DELIVERY'
    | 'WRONG_OPTION'
    | 'ETC'; //  취소사'
  CancelDetailedReason?: string; //  취소상세사유
  CancelApprovalDate?: string; // string($date-time)| 취소승인일
  CancelCompletedDate?: string; // string($date-time)| 취소완료일
  RefundStandbyStatus?: string; //  환불상태
  RefundExpectedDate?: string; // string($date-time)| 환불처리 처리일
}

export interface ReturnInfo {
  ClaimStatus?:
    | 'CANCEL_REQUEST'
    | 'CANCELING'
    | 'CANCEL_DONE'
    | 'CANCEL_REJECT'
    | 'COLLECTING'
    | 'COLLECT_DONE'
    | 'RETURN_REQUEST'
    | 'RETURN_DONE'
    | 'RETURN_REJECT'
    | 'EXCHANGE_REQUEST'
    | 'EXCHANGE_REDELIVERING'
    | 'EXCHANGE_DONE'
    | 'EXCHANGE_REJECT'
    | 'PURCHASE_DECISION_HOLDBACK'
    | 'PURCHASE_DECISION_HOLDBACK_REDELIVERING'
    | 'PURCHASE_DECISION_REQUEST'
    | 'PURCHASE_DECISION_HOLDBACK_RELEASE'
    | 'ADMIN_CANCELING'
    | 'ADMIN_CANCEL_DONE'
    | 'RETURN_RESULT_COMPLET'
    | 'RETURN_RESULT_COMPLET'; //  반품처리상태
  CollectDeliveryMethod?:
    | 'DELIVERY'
    | 'VISIT_RECEIPT'
    | 'DIRECT_DELIVERY'
    | 'QUICK_SVC'
    | 'NOTHING'
    | 'RETURN_DESIGNATED'
    | 'RETURN_DELIVERY'
    | 'RETURN_INDIVIDUAL'; //  수거방법
  CollectStatus?: string; //  수거상태
  ClaimRequestDate?: string; // string($date-time)| 반품요청일
  RequestChannel?: string; //  접수채널
  ReturnReason?:
    | 'PRODUCT_UNSATISFIED'
    | 'DELAYED_DELIVERY'
    | 'SOLD_OUT'
    | 'INTENT_CHANGED'
    | 'COLOR_AND_SIZE'
    | 'WRONG_ORDER'
    | 'DROPPED_DELIVERY'
    | 'BROKEN'
    | 'INCORRECT_INFO'
    | 'WRONG_DELIVERY'
    | 'WRONG_OPTION'
    | 'ETC'; //  반품사유
  HoldbackStatus?: 'NOT_YET' | 'HOLDBACK| RELEASED'; //  반품보류 사유
  HoldbackDetailedReason?: string; //  반품보류 상세사유
  ClaimDeliveryFeeDemandAmount?: number; // number| 반품배송비
  EtcFeeDemandAmount?: number; // number| 기타반품비
  CollectCompletedDate?: string; // string($date-time)| 수거완료일
  RefundExpectedDate?: string; // string($date-time)| 환불일
  RefundStandbyStatus?: string; //  환불대기상태
  ReturnDetailedReason?: string; //  반품상세 사유
  ReturnCompletedDate?: string; // string($date-itme)| 반품완료일
  HoldbackConfigDate?: string; // string($date-time)| 반품보류일
  HoldbackConfigurer?: string; //  반품보류자
  ClaimDeliveryFeePayMethod?: string; //  반품배송비 결제정보
  EtcFeePayMethod?: string; //  기타교환비용 결제정보
  CollectDeliveryCompany?: DeliveryCompanyCode; //  수거택배사
  CollectTrackingNumber?: string; //  수거송장번호
  HoldbackReleaseDate?: string; // string($date-time)| 보류해제 처리일
}

export interface ExchangeInfo {
  ClaimStatus?:
    | 'CANCEL_REQUEST'
    | 'CANCELING'
    | 'CANCEL_DONE'
    | 'CANCEL_REJECT'
    | 'COLLECTING'
    | 'COLLECT_DONE'
    | 'RETURN_REQUEST'
    | 'RETURN_DONE'
    | 'RETURN_REJECT'
    | 'EXCHANGE_REQUEST'
    | 'EXCHANGE_REDELIVERING'
    | 'EXCHANGE_DONE'
    | 'EXCHANGE_REJECT'
    | 'PURCHASE_DECISION_HOLDBACK'
    | 'PURCHASE_DECISION_HOLDBACK_REDELIVERING'
    | 'PURCHASE_DECISION_REQUEST'
    | 'PURCHASE_DECISION_HOLDBACK_RELEASE'
    | 'ADMIN_CANCELING'
    | 'ADMIN_CANCEL_DONE'
    | 'RETURN_RESULT_COMPLET'
    | 'RETURN_RESULT_COMPLET;'; //  교환처리상태
  CollectDeliveryMethod?:
    | 'DELIVERY'
    | 'VISIT_RECEIPT'
    | 'DIRECT_DELIVERY'
    | 'QUICK_SVC'
    | 'NOTHING'
    | 'RETURN_DESIGNATED'
    | 'RETURN_DELIVERY'
    | 'RETURN_INDIVIDUAL'; //  수거방법
  CollectStatus?: string; //  수거상태
  ClaimRequestDate?: string; // string($date-time)| 교환요청일
  RequestChannel?: string; //  접수채널
  ExchangeReason?:
    | 'PRODUCT_UNSATISFIED'
    | 'DELAYED_DELIVERY'
    | 'SOLD_OUT'
    | 'INTENT_CHANGED'
    | 'COLOR_AND_SIZE'
    | 'WRONG_ORDER'
    | 'DROPPED_DELIVERY'
    | 'BROKEN'
    | 'INCORRECT_INFO'
    | 'WRONG_DELIVERY'
    | 'WRONG_OPTION'
    | 'ETC'; //  교환사유| 교환요청자
  ExchangeDetailedReason?: string; //  교환상세사유
  CollectCompletedDate?: string; // string($date-time)| 수거완료일
  ReDeliveryOperationDate?: string; // string($date-time)| 재배송처리일
  HoldbackStatus?: 'NOT_YET' | 'HOLDBACK' | 'RELEASED'; //  교환보류 상태
  HoldbackDetailedReason?: string; //  교환보류 사유
  HoldbackConfigDate?: string; // string($date-time)| 교환보류일
  HoldbackConfigurer?: string; //  교환보류자
  ClaimDeliveryFeeDemandAmount?: number; // number| 교환배송비
  ClaimDeliveryFeePayMethod?: string; //  교환배송비 결제정보
  EtcFeeDemandAmount?: number; // number| 기타교환비용
  EtcFeePayMethod?: string; //  기타교환비용 결제정보
  CollectDeliveryCompany?: DeliveryCompanyCode; //  수거택배사
  CollectTrackingNumber?: string; //  수거송장번호
  ReDeliveryCompany?: DeliveryCompanyCode; //  재배송택배사
  ReDeliveryTrackingNumber?: string; //  재배송통장번호
  HoldbackReleaseDate?: string; // string($date-time)| 보류해제 처리일
}

export interface claimResultInfo {
  resultReason: string; //  검수결과
}

export interface GetOrderListsRequest {
  omsID: string;
  orderDateKind: 'PLACEPRODUCT_DATE' | 'PAYMENT_DATE' | 'SHIPPING_DATE';
  startDate?: string;
  endDate?: string;
  startIndex: number;
  display: number;
  sort?: 'ASC' | 'DESC';
  detailSearchType?: DetailSearchType;
  detailSearchValue?: string;
}

export interface GetOrderListsResponse {
  display: number;
  startIndex: number;
  totalCount: number;
  orderList: OrderList[];
}

// orderProcessState
export enum OrderExportStatus {
  /** 택배 불가지역으로 출고 중지 */
  WMS_IMPOSSIBLE_LOCATION = 'WMS_IMPOSSIBLE_LOCATION',

  /** WMS 주문전달전상태 WMS서버가 다운되거나 했을경우… */
  WMS_WAIT = 'WMS_WAIT',

  /** WMS 주문전달전상태 재고가 없는경우 */
  WMS_EMPTY_INVENTORY = 'WMS_EMPTY_INVENTORY',

  /** WMS로 주문이 전달되기전 OMS에서 대기중인경우 특정시간동안 keep 해당 시간동안은 취소가 가능함.*/
  WMS_WAIT_STANDBY = 'WMS_WAIT_STANDBY',

  /** WMS에 없는 상품코드일경우 */
  WMS_WAIT_UNKNOWNCODE = 'WMS_WAIT_UNKNOWNCODE',

  /** WMS에 주문처리결과 받은경우*/
  WMS_RECEIVE = 'WMS_RECEIVE',

  /** WMS에 주문전달완료 */
  WMS_EXPORT = 'WMS_EXPORT',

  /** 더이상 처리할게 없는 상태 */
  COMPLETE = 'COMPLETE',
}

export interface OrderList {
  key: number;
  omsOrderStateSeq: string;
  _id: string;
  ChangedProductOrderInfo: ChangedProductOrderInfo;
  Order: Order;
  ProductOrder: ProductOrder;
  regDate: string;
  omsID: string;
  deliveryCompanyCode: DeliveryCompanyCode;
  trackingNumber: string;
  openmarketKind: OPENMARKET_KIND;
  orderProcessState: string;
  Delivery: Delivery;
  DecisionHoldbackInfo?: DecisionHoldbackInfo;
  claimResultInfo?: claimResultInfo;
  CancelInfo?: CancelInfo;
  ReturnInfo?: ReturnInfo;
  ExchangeInfo?: ExchangeInfo;
}

export interface GetCancelListsRequest {
  omsID: string;
  startDate?: string;
  endDate?: string;
  display: number;
  startIndex: number;
  sort?: 'ASC' | 'DESC';
  cancleDateKind: 'PAYMENT_DATE' | 'CLAIM_DATE';
  detailSearchType?: DetailSearchType;
  detailSearchValue?: string;
  cancelState: 'CANCEL_REQUEST' | 'CANCELING' | 'CANCEL_DONE' | 'CANCEL_REJECT' | 'CANCEL_ALL';
}

export interface GetCancelListsResponse {
  display: number;
  startIndex: number;
  totalCount: number;
  orderList: CancelList[];
}

export interface CancelList {
  key: number;
  omsOrderStateSeq: string;
  _id: string;
  ChangedProductOrderInfo: ChangedProductOrderInfo;
  Order: Order;
  ProductOrder: ProductOrder;
  regDate: string;
  omsID: string;
  deliveryCompanyCode: DeliveryCompanyCode;
  trackingNumber: string;
  openmarketKind: OPENMARKET_KIND;
  orderProcessState: string;
  Delivery: Delivery;
  DecisionHoldbackInfo?: DecisionHoldbackInfo;
  claimResultInfo?: claimResultInfo;
  CancelInfo: CancelInfo;
}

export interface GetReturnListsRequest {
  omsID: string;
  startDate?: string;
  endDate?: string;
  display: number;
  startIndex: number;
  sort?: 'ASC' | 'DESC';
  returnDateKind: 'PAYMENT_DATE' | 'CLAIM_DATE';
  detailSearchType?:
    | '--'
    | 'RECEIVE_NAME'
    | 'ORDERER_NAME'
    | 'ORDERER_TEL'
    | 'ORDERID'
    | 'PRODUCT_ORDERID'
    | 'PRODUCT_ID'
    | 'TRACKINGNUMBER';
  claimState:
    | 'COLLECTING'
    | 'COLLECT_DONE'
    | 'RETURN_REQUEST'
    | 'RETURN_DONE'
    | 'RETURN_REJECT'
    | 'RETURN_ALL'
    | 'RETURN_RESULT_COMPLET';
  detailSearchValue?: string;
}

export interface GetReturnListsResponse {
  display: number;
  startIndex: number;
  totalCount: number;
  orderList: ReturnList[];
}

export interface ReturnList {
  key: number;
  omsOrderStateSeq: string;
  _id: string;
  ChangedProductOrderInfo: ChangedProductOrderInfo;
  Order: Order;
  ProductOrder: ProductOrder;
  regDate: string;
  omsID: string;
  deliveryCompanyCode: DeliveryCompanyCode;
  trackingNumber: string;
  openmarketKind: OPENMARKET_KIND;
  orderProcessState: string;
  Delivery: Delivery;
  DecisionHoldbackInfo?: DecisionHoldbackInfo;
  claimResultInfo?: claimResultInfo;
  ReturnInfo: ReturnInfo;
  ExchangeInfo?: ExchangeInfo;
}

export interface GetExchangeListsRequest {
  omsID: string;
  startDate?: string;
  endDate?: string;
  display: number;
  startIndex: number;
  sort?: 'ASC' | 'DESC';
  exchangeDateKind: 'PAYMENT_DATE' | 'CLAIM_DATE';
  detailSearchType?:
    | '--'
    | 'RECEIVE_NAME'
    | 'ORDERER_NAME'
    | 'ORDERER_TEL'
    | 'ORDERID'
    | 'PRODUCT_ORDERID'
    | 'PRODUCT_ID';
  claimState:
    | 'COLLECTING'
    | 'COLLECT_DONE'
    | 'EXCHANGE_REQUEST'
    | 'EXCHANGE_REDELIVERING'
    | 'EXCHANGE_DONE'
    | 'EXCHANGE_REJECT'
    | 'EXCHANGE_ALL'
    | 'EXCHANGE_RESULT_COMPLET';
  detailSearchValue?: string;
}

export interface GetExchangeListsResponse {
  display: number;
  startIndex: number;
  totalCount: number;
  orderList: ExchangeList[];
}

export interface ExchangeList {
  key: number;
  omsOrderStateSeq: string;
  _id: string;
  ChangedProductOrderInfo: ChangedProductOrderInfo;
  Order: Order;
  ProductOrder: ProductOrder;
  regDate: string;
  omsID: string;
  deliveryCompanyCode: DeliveryCompanyCode;
  trackingNumber: string;
  openmarketKind: OPENMARKET_KIND;
  orderProcessState: string;
  Delivery: Delivery;
  DecisionHoldbackInfo?: DecisionHoldbackInfo;
  claimResultInfo?: claimResultInfo;
  ExchangeInfo: ExchangeInfo;
  ReturnInfo?: ReturnInfo;
}

export interface GetNoneExportListsResponse {
  display: number;
  startIndex: number;
  totalCount: number;
  Order: Order;
  ProductOrder: ProductOrder;
  Delivery: Delivery;
  DecisionHoldbackInfo?: DecisionHoldbackInfo;
  claimResultInfo?: claimResultInfo;
  orderList: NoneExportList[];
}

export interface NoneExportList {
  key: number;
  omsOrderStateSeq: string;
  _id: string;
  ChangedProductOrderInfo: ChangedProductOrderInfo;
  Order: Order;
  ProductOrder: ProductOrder;
  regDate: string;
  omsID: string;
  deliveryCompanyCode: DeliveryCompanyCode;
  trackingNumber: string;
  openmarketKind: OPENMARKET_KIND;
  orderProcessState: OrderExportStatus;
  Delivery: Delivery;
  DecisionHoldbackInfo?: DecisionHoldbackInfo;
  claimResultInfo?: claimResultInfo;
}

export interface GetNoneExportListsRequest {
  omsID: string;
  startDate?: string;
  endDate?: string;
  display: number;
  startIndex: number;
  sort?: 'ASC' | 'DESC';
  detailSearchType?:
    | '--'
    | 'RECEIVE_NAME'
    | 'ORDERER_NAME'
    | 'ORDERER_TEL'
    | 'ORDERID'
    | 'PRODUCT_ORDERID'
    | 'PRODUCT_ID'
    | 'TRACKINGNUMBER';
  detailSearchValue?: string;
}

export interface PostReturnRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
  returnReasonCode:
    | 'PRODUCT_UNSATISFIED'
    | 'DELAYED_DELIVERY'
    | 'SOLD_OUT'
    | 'INTENT_CHANGED'
    | 'COLOR_AND_SIZE'
    | 'WRONG_ORDER'
    | 'DROPPED_DELIVERY'
    | 'BROKEN'
    | 'INCORRECT_INFO'
    | 'WRONG_DELIVERY'
    | 'WRONG_OPTION'
    | 'ETC';
  collectDeliveryMethodCode:
    | 'DELIVERY'
    | 'VISIT_RECEIPT'
    | 'DIRECT_DELIVERY'
    | 'QUICK_SVC'
    | 'NOTHING'
    | 'RETURN_DESIGNATED'
    | 'RETURN_DELIVERY'
    | 'RETURN_INDIVIDUAL';
  collectDeliveryCompanyCode: DeliveryCompanyCode;
  collectTrackingNumber?: string;
}

export interface PostReturnResponse {
  responseType: 'SUCCESS' | 'ERROR';
  errorType?: {
    code: string;
    message?: string;
    detail?: string;
  };
}

export enum cancelReasonCodeType {
  PRODUCT_UNSATISFIED = 'PRODUCT_UNSATISFIED',
  DELAYED_DELIVERY = 'DELAYED_DELIVERY',
  SOLD_OUT = 'SOLD_OUT',
}
export interface PostCancelSaleRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
  cancelReasonCode: cancelReasonCodeType;
}

export interface PostCancelSaleResponse {
  responseType: 'SUCCESS' | 'ERROR';
  errorType?: {
    code: string;
    message?: string;
    detail?: string;
  };
}

export interface PostApproveReturnApplicationRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
}

export interface PostRejectReturnRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
  rejectDetailContent: string;
}

export interface PostWithholdReturnRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
  returnHoldCode:
    | 'RETURN_DELIVERYFEE'
    | 'EXTRAFEEE'
    | 'RETURN_DELIVERYFEE_AND_EXTRAFEEE'
    | 'RETURN_PRODUCT_NOT_DELIVERED'
    | 'ETC';
  returnHoldDetailContent: string;
  etcFeeDemandAmount: number;
}

export interface PostWithholdExchangeRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
  returnHoldCode:
    | 'EXCHANGE_EXTRAFEE'
    | 'EXCHANGE_PRODUCT_READY'
    | 'EXCHANGE_PRODUCT_NOT_DELIVERED'
    | 'EXCHANGE_HOLDBACK'
    | 'ETC';
  returnHoldDetailContent: string;
  etcFeeDemandAmount?: number;
}

export interface PostRedeliveryExchangeRequest {
  omsOrderStateSeq: string;
  productOrderID: string;
  userName: string;
  userTel: string;
  telOption: string;
  userAddr: string;
  zipcode: string;
  packageNumber: string;
  userAddrDetail: string;
  memo: string;
  productName: string;
  productCode?: string;
  productOption?: string;
  optionCode?: string;
  quantity: number;
}

export interface ResponseSuccessOrError {
  responseType: 'SUCCESS' | 'ERROR';
  errorType?: ErrorTypeProp;
}

export interface ErrorTypeProp {
  statusCode: number;
  message: string;
  error?: string;
}

export interface ExcelInfoList {
  key: number;
  ProductName: string;
  ProductOption: string;
  OrderQuantity: string;
  OrdererName: string;
  OrdererID: string;
  OptionManageCode?: string;
}

export interface OrderRegisterList {
  key: number;
  OpenmarketKind: OPENMARKET_KIND;
  OrderRegisterDate: string;
  OrderRegisterStatus: string;
  GetTrackingNumberStatus: string;
}

export enum Center {
  SHOUTH_SEOICHEON = 'SHOUTH_SEOICHEON',
  YEOJU = 'YEOJU',
  MAJANG = 'MAJANG',
  DEOKPYEONG = 'DEOKPYEONG',
  HWASEONG = 'HWASEONG',
  DEVELOPER_TEAM = 'DEVELOPER_TEAM',
}

var _api_root = 'https://wxapp.csnet.net.cn/addons/zjhj_mall/core/web/index.php?store_id=10&r=api/';
var api = {
  index: _api_root + 'default/index',
  default: {
    store: _api_root + 'default/store',
    index: _api_root + 'default/index',
    goods_list: _api_root + 'default/goods-list',
    cat_list: _api_root + 'default/cat-list',
    goods: _api_root + 'default/goods',
    district: _api_root + 'default/district',
    goods_attr_info: _api_root + "default/goods-attr-info",
    upload_image: _api_root + "default/upload-image",
    comment_list: _api_root + "default/comment-list",
    article_list: _api_root + "default/article-list",
    article_detail: _api_root + "default/article-detail",
    video_list: _api_root + "default/video-list",
    goods_qrcode: _api_root + "default/goods-qrcode",
    coupon_list: _api_root + "default/coupon-list",
    topic_list: _api_root + "default/topic-list",
    topic: _api_root + "default/topic",
    navbar: _api_root + "default/navbar",
    navigation_bar_color: _api_root + "default/navigation-bar-color",
    shop_list: _api_root + "default/shop-list",
    shop_detail: _api_root + "default/shop-detail",
  },
  cart: {
    list: _api_root + 'cart/list',
    add_cart: _api_root + 'cart/add-cart',
    delete: _api_root + 'cart/delete',
  },
  passport: {
    login: _api_root + 'passport/login',
    on_login: _api_root + 'passport/on-login',
  },
  order: {
    submit_preview: _api_root + 'order/submit-preview',
    submit: _api_root + 'order/submit',
    pay_data: _api_root + 'order/pay-data',
    list: _api_root + 'order/list',
    revoke: _api_root + 'order/revoke',
    confirm: _api_root + 'order/confirm',
    count_data: _api_root + 'order/count-data',
    detail: _api_root + 'order/detail',
    refund_preview: _api_root + 'order/refund-preview',
    refund: _api_root + 'order/refund',
    refund_detail: _api_root + 'order/refund-detail',
    comment_preview: _api_root + 'order/comment-preview',
    comment: _api_root + 'order/comment',
    express_detail: _api_root + 'order/express-detail',
    clerk: _api_root + "order/clerk",
    clerk_detail: _api_root + 'order/clerk-detail',
    get_qrcode: _api_root + 'order/get-qrcode',
    location: _api_root + 'order/location'
  },
  user: {
    address_list: _api_root + 'user/address-list',
    address_detail: _api_root + 'user/address-detail',
    address_save: _api_root + 'user/address-save',
    address_set_default: _api_root + 'user/address-set-default',
    address_delete: _api_root + 'user/address-delete',
    save_form_id: _api_root + "user/save-form-id",
    favorite_add: _api_root + "user/favorite-add",
    favorite_remove: _api_root + "user/favorite-remove",
    favorite_list: _api_root + "user/favorite-list",
    index: _api_root + "user/index",
    wechat_district: _api_root + "user/wechat-district",
    add_wechat_address: _api_root + "user/add-wechat-address",
    topic_favorite: _api_root + "user/topic-favorite",
    topic_favorite_list: _api_root + "user/topic-favorite-list",
    member: _api_root + "user/member",
    card: _api_root + "user/card",
    card_qrcode: _api_root + "user/card-qrcode",
    card_clerk: _api_root + "user/card-clerk",
  },
  share: {
    join: _api_root + 'share/join',
    check: _api_root + 'share/check',
    get_info: _api_root + 'share/get-info',
    get_price: _api_root + 'share/get-price',
    apply: _api_root + 'share/apply',
    cash_detail: _api_root + 'share/cash-detail',
    get_qrcode: _api_root + 'share/get-qrcode',
    shop_share: _api_root + 'share/shop-share',
    bind_parent: _api_root + 'share/bind-parent',
    get_team: _api_root + 'share/get-team',
    get_order: _api_root + 'share/get-order',
  },
  coupon: {
    index: _api_root + 'coupon/index',
    share_send: _api_root + 'coupon/share-send',
    receive: _api_root + 'coupon/receive',
  },
  miaosha: {
    list: _api_root + 'miaosha/list',
    goods_list: _api_root + 'miaosha/goods-list',
  },
  group: {
    index: _api_root + 'group/index/index',
    list: _api_root + 'group/index/good-list',
    details: _api_root + 'group/index/good-details',
    goods_attr_info: _api_root + "group/index/goods-attr-info",
    submit_preview: _api_root + 'group/order/submit-preview',
    submit: _api_root + 'group/order/submit',
    pay_data: _api_root + 'group/order/pay-data',
    order: {
      list: _api_root + 'group/order/list',
      detail: _api_root + 'group/order/detail',
      express_detail: _api_root + 'group/order/express-detail',
      comment_preview: _api_root + 'group/order/comment-preview',
      comment: _api_root + 'group/order/comment',
      confirm: _api_root + 'group/order/confirm',
      goods_qrcode: _api_root + 'group/order/goods-qrcode',
      get_qrcode: _api_root + 'group/order/get-qrcode',
      clerk: _api_root + 'group/order/clerk',
      clerk_order_details: _api_root + 'group/order/clerk-order-details',
    },
    group_info: _api_root + 'group/order/group',
    comment: _api_root + 'group/index/goods-comment',
    goods_qrcode: _api_root + 'group/index/goods-qrcode',
  },
  book: {
    index: _api_root + 'book/index/index',
    list: _api_root + 'book/index/good-list',
    details: _api_root + 'book/index/good-details',
    submit_preview: _api_root + 'book/order/submit-preview',
    submit: _api_root + 'book/order/submit',
    order_list: _api_root + 'book/order/list',
    order_cancel: _api_root + 'book/order/cancel',
    order_pay: _api_root + 'book/order/pay-data',
    order_details: _api_root + 'book/order/order-details',
    shop_list: _api_root + 'book/index/shop-list',
    get_qrcode: _api_root + 'book/order/get-qrcode',
    clerk: _api_root + 'book/order/clerk',
    apply_refund: _api_root + 'book/order/apply-refund',
    comment_preview: _api_root + 'book/order/comment-preview',
    submit_comment: _api_root + 'book/order/comment',
    goods_comment: _api_root + 'book/index/goods-comment',
    goods_qrcode: _api_root + 'book/index/goods-qrcode',
    clerk_order_details: _api_root + 'book/order/clerk-order-details',

  },
};
module.exports = api;
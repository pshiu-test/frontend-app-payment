module.exports = {
  authentication: {
    userId: 9,
    username: 'staff',
  },
  configuration: {
    VIEW_MY_RECORDS_URL: 'http://localhost:18150/records',
    ACCOUNT_SETTINGS_URL: 'http://localhost:18000/account/settings',
    LMS_BASE_URL: 'http://localhost:18000',
    SUPPORT_URL:'http://localhost:18000/support',
    LANGUAGE_PREFERENCE_COOKIE_NAME: 'yum',
  },
  feedback: {
    byId: {},
    orderedIds: [],
  },
  userAccount: {
    loading: false,
    error: null,
    username: null,
    email: null,
    bio: null,
    name: null,
    country: null,
    socialLinks: null,
    profileImage: {
      imageUrlMedium: null,
      imageUrlLarge: null,
    },
    levelOfEducation: null,
  },
  payment: {
    basket: {
      loaded: true,
      loading: false,
      showVoucherForm: true,
      paymentProviders: [
        {
          type: 'cybersource',
        },
        {
          type: 'paypal',
        },
      ],
      orderTotal: 0,
      calculatedDiscount: 0,
      totalExclDiscount: 0,
      products: [],
      voucher: {
        benefit: {
          type: 'Percentage',
          value: 20,
        },
        code: 'SUMMER20',
      },
    },
    coupon: {
      benefit: null,
      code: null,
      voucherId: null,
      error: null,
      loaded: false,
      loading: false,
    },
  },
  router: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
    },
    action: 'POP',
  },
  i18n: {
    locale: 'en',
  },
};
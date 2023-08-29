const fs = require('fs');
const path = require('path');
module.exports = {
  // 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
  notifyUrl: {
    // 测试环境服务空间-支付回调地址
    'mp-664d2554-cfa5-4427-9adf-d14025991d5f': 'https://fc-mp-664d2554-cfa5-4427-9adf-d14025991d5f.next.bspapp.com/uni-pay-co',
    // 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
    'mp-664d2554-cfa5-4427-9adf-d14025991d5f': 'https://fc-mp-664d2554-cfa5-4427-9adf-d14025991d5f.next.bspapp.com/uni-pay-co'
  },
  notifyKey: '5FB2CD73C7B53918728417C50762E6D45FB2CD73C7B53918728417C50762E6D4',
  // 微信支付相关
  wxpay: {
    enable: true, // 是否启用微信支付
    // 微信 - APP支付
    app: {
      appId: '', // app开放平台下的应用的appid
      secret: '', // app开放平台下的应用的secret
      mchId: '1473426802', // 商户id
      // key: '', // v2的api key
      // pfx: fs.readFileSync(__dirname + '/wxpay/wxpay.p12'), // v2需要用到的证书
      v3Key: 'NJZBOV6TvIqn8sqAbeLHlxHFtpNXAKAq', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - 公众号支付
    jsapi: {
      appId: '', // 公众号的appid
      secret: '', // 公众号的secret
      mchId: '1473426802', // 商户id
      // key: '', // v2的api key
      // pfx: fs.readFileSync(__dirname + '/wxpay/wxpay.p12'), // v2需要用到的证书
      v3Key: 'NJZBOV6TvIqn8sqAbeLHlxHFtpNXAKAq', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - 小程序支付
    mp: {
      appId: 'wx25d18c9c84ff57db', // 小程序的appid
      secret: '139581947b7bfc139e59715f7df4d996', // 小程序的secret
      mchId: '1473426802', // 商户id
      // key: '', // v2的api key
      // pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: 'NJZBOV6TvIqn8sqAbeLHlxHFtpNXAKAq', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - 手机外部浏览器H5支付
    mweb: {
      appId: 'wx25d18c9c84ff57db', // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
      secret: '139581947b7bfc139e59715f7df4d996', // secret
      mchId: '1473426802', // 商户id
      // key: '', // v2的api key
      // pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: 'NJZBOV6TvIqn8sqAbeLHlxHFtpNXAKAq', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3, // 启用支付的版本 2代表v2版本 3 代表v3版本
      // 场景信息，必填
      sceneInfo: {
        h5_info: {
          type: 'Wap', // 此值固定Wap
          wap_url: '', // 你的H5首页地址，必须和你发起支付的页面的域名一致。
          wap_name: '' // 你的H5网站名称
        }
      }
    },
    // 微信 - 扫码支付
    native: {
      appId: 'wx25d18c9c84ff57db', // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
      secret: '139581947b7bfc139e59715f7df4d996', // secret
      mchId: '1473426802', // 商户id
      // key: '', // v2的api key
      // pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: 'NJZBOV6TvIqn8sqAbeLHlxHFtpNXAKAq', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    }
  },
  // 支付宝相关（证书记得选java版本）
  alipay: {
    enable: true, // 是否启用支付宝支付
    // 支付宝 - 小程序支付配置
    mp: {
      appId: '', // 支付宝小程序appid
      privateKey: '', // 支付宝商户私钥
      appCertPath: path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
      alipayPublicCertPath: path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
      alipayRootCertPath: path.join(__dirname, 'alipay/alipayRootCert.crt') // 支付宝根证书路径
    },
    // 支付宝 - APP支付配置
    app: {
      appId: '2016101102084171', // 支付宝开放平台下应用的appid
      privateKey:
        'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCiHToWQWjzjD6/f3A2xuRZ0wlrr63gMpJdUzjgnSH1yXRyNVr3i96mnIqRcC6+SvcoFt1GrGGifEGj2cU3urY8TJPavSTAtXIs0AYFNdu4SiVQBrzTHv9LSKmcsivpdbc4V2Bk0jir9CCv4gBs3R7fdLSm1vzE9rSTweyfH7pvbtDtdVYvog2QYBlbqOQB3ZpcLjoor7Rp5DwCgmw7qHC5jLMW4BKZV3X1wSBHEKkF4J5TT+6cWCXSzGEp2+Jpo5N82lOiY6YNI3qLPI9YZJMRj85810j5BCbJbkaw2VJirakHiUZhgXCkgY8WlMFJ4zHYXknz7IYKRjPoM274UPZhAgMBAAECggEAaMP8kv9ohORgdL811KCKWCZTEz2wX5AvGJK80iOaG846K8ihZhMFK6VEw6K9AotN2KGWFKM4YZptjSciFdbbCHLwpk7P3p4kECPLkDhzK1D3dhU0mDeTAqMNwc8/I5vIcWe+Ssm0iCO3sBKc9b2cwwoX6S5MojlRD6Ame9s0T+hBsh9z3wPzKwqP52vksPh3dVUyKWo80O8qHqutHXwCSRk6bKA+XY2KywdHWh1SjeK6Zqq8A7nChv+45lVZubZYT9s3eLUbIc0hqZ9MKgahk4Vq7ctaHD2bDNVJLPCBEJOSvZSVKHtfNAFlAcWW1h0ifU+OLUNY/oKri2szfufdsQKBgQDwp9uT1MMr3O9CfufO65JnKdPQJuTk3wl57VAZaIc8rPa57VSg/79pD+XsyodwoZFu0glc39NJ4ibfwpP+uUPkWH/Ye9vdAbjIUkh4tflQZdDEVhvloZ4FYS91I/DCtVx+cDcPp5vQTUeuNKnB7cchcRWEx78OWyL6C/0ktJBfbQKBgQCsc1y13tDSOKAhnSyNQFTz/03QgspIkCS94HptzNGNFs9WfswkuNaT9qEOsQ1SzHisP2cPX46SLmUb0f/3YBQ8ww2OvbE1dUoesomcZVdYrw12p1gDFhKIwJhJyoDQg+QDl2p4v8fzNrWevLqexYGyl1M+BSO0RkAi32eypTd2RQKBgQCdkHmen9YteNkaQ3bIrspLS0KIbX6+Lx3IO82O5TZuTpy3/SDEzM3pHuSelbf50X8j/NbufQmcvTpQlNhLFcfS0PLbrbS1TfRLDDyw9AxJTHBUrEBVp+yLfycQXji7cv0dN6GFWWsWBhMhhw+CjokrZxv8tL9tydPrvT+/8Yz5PQKBgQCUo7q9aBhFmlkrn/XOqiyPQvcnShRhBx0kLGBaU7grDAYaX6BF5qvNTT71EtaRD3zTurJyJcMVbLfpitA9wKqw1M7Swd4EXdxNKUZDb3YiEoBgTU0nG9dN1/NrZwgwsf3Ouqwi9+q4T+ersrCIOWTZMmWlh3iG4iZV6InRCWcMoQKBgCKAGsRKuGXmLcw4njAAGx1DIrYnNaTauvJC2kLE3ZF8X0b66lcN5gvrTC5QiFl7DukasM7GWaejtzmogxsiNFs1O5ZmZp0s8RyLO7kSGVTb0UDvCMXD9Xh9MMDqMvhrcVsfcjlCoQai3o4xY0NP4L17pQQSVRdU73a11SotzCBk', // 支付宝商户私钥
      appCertPath: path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
      alipayPublicCertPath: path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
      alipayRootCertPath: path.join(__dirname, 'alipay/alipayRootCert.crt') // 支付宝根证书路径
    },
    // 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
    native: {
      appId: '2016101102084171', // 支付宝开放平台下应用的appid
      privateKey:
        'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCiHToWQWjzjD6/f3A2xuRZ0wlrr63gMpJdUzjgnSH1yXRyNVr3i96mnIqRcC6+SvcoFt1GrGGifEGj2cU3urY8TJPavSTAtXIs0AYFNdu4SiVQBrzTHv9LSKmcsivpdbc4V2Bk0jir9CCv4gBs3R7fdLSm1vzE9rSTweyfH7pvbtDtdVYvog2QYBlbqOQB3ZpcLjoor7Rp5DwCgmw7qHC5jLMW4BKZV3X1wSBHEKkF4J5TT+6cWCXSzGEp2+Jpo5N82lOiY6YNI3qLPI9YZJMRj85810j5BCbJbkaw2VJirakHiUZhgXCkgY8WlMFJ4zHYXknz7IYKRjPoM274UPZhAgMBAAECggEAaMP8kv9ohORgdL811KCKWCZTEz2wX5AvGJK80iOaG846K8ihZhMFK6VEw6K9AotN2KGWFKM4YZptjSciFdbbCHLwpk7P3p4kECPLkDhzK1D3dhU0mDeTAqMNwc8/I5vIcWe+Ssm0iCO3sBKc9b2cwwoX6S5MojlRD6Ame9s0T+hBsh9z3wPzKwqP52vksPh3dVUyKWo80O8qHqutHXwCSRk6bKA+XY2KywdHWh1SjeK6Zqq8A7nChv+45lVZubZYT9s3eLUbIc0hqZ9MKgahk4Vq7ctaHD2bDNVJLPCBEJOSvZSVKHtfNAFlAcWW1h0ifU+OLUNY/oKri2szfufdsQKBgQDwp9uT1MMr3O9CfufO65JnKdPQJuTk3wl57VAZaIc8rPa57VSg/79pD+XsyodwoZFu0glc39NJ4ibfwpP+uUPkWH/Ye9vdAbjIUkh4tflQZdDEVhvloZ4FYS91I/DCtVx+cDcPp5vQTUeuNKnB7cchcRWEx78OWyL6C/0ktJBfbQKBgQCsc1y13tDSOKAhnSyNQFTz/03QgspIkCS94HptzNGNFs9WfswkuNaT9qEOsQ1SzHisP2cPX46SLmUb0f/3YBQ8ww2OvbE1dUoesomcZVdYrw12p1gDFhKIwJhJyoDQg+QDl2p4v8fzNrWevLqexYGyl1M+BSO0RkAi32eypTd2RQKBgQCdkHmen9YteNkaQ3bIrspLS0KIbX6+Lx3IO82O5TZuTpy3/SDEzM3pHuSelbf50X8j/NbufQmcvTpQlNhLFcfS0PLbrbS1TfRLDDyw9AxJTHBUrEBVp+yLfycQXji7cv0dN6GFWWsWBhMhhw+CjokrZxv8tL9tydPrvT+/8Yz5PQKBgQCUo7q9aBhFmlkrn/XOqiyPQvcnShRhBx0kLGBaU7grDAYaX6BF5qvNTT71EtaRD3zTurJyJcMVbLfpitA9wKqw1M7Swd4EXdxNKUZDb3YiEoBgTU0nG9dN1/NrZwgwsf3Ouqwi9+q4T+ersrCIOWTZMmWlh3iG4iZV6InRCWcMoQKBgCKAGsRKuGXmLcw4njAAGx1DIrYnNaTauvJC2kLE3ZF8X0b66lcN5gvrTC5QiFl7DukasM7GWaejtzmogxsiNFs1O5ZmZp0s8RyLO7kSGVTb0UDvCMXD9Xh9MMDqMvhrcVsfcjlCoQai3o4xY0NP4L17pQQSVRdU73a11SotzCBk', // 支付宝商户私钥
      appCertPath: path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
      alipayPublicCertPath: path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
      alipayRootCertPath: path.join(__dirname, 'alipay/alipayRootCert.crt') // 支付宝根证书路径
    }
  }
};

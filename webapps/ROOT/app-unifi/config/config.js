window.unifiConfig = {
  UnifiAPILocalPath: '/data/dev/api',
  UnifiAPIBasePath: '/api',
  UnifiAPISelfPath: '/api/self',
  UnifiAPIStatusPath: '/status',
  UnifiAppSwitcherHost: 'https://app-switcher.ubnt.com',
  UnifiDefaultsBasePath: 'data/defaults',
  UnifiDeployPrefix: '/manage/',
  UnifiFileBasePath: '',
  UnifiGuestBasePath: '/guest',
  UnifiPrintBasePath: '/print',
  UnifiHotspotHost: '',
  UnifiWsHost: '',
  ConnectivityDetailsUrl: 'https://config.ubnt.com/cloudAccessConfig.js',
  CloudDashboardHost: 'https://unifi.ubnt.com',
  UnifiCloudHost: 'device-airos.svc.ubnt.com',
  UnifiDevicesEndpoint: '/api/airos/v1/unifi/devices/',
  UnifiSoftwareDownloadUrl: 'https://www.ubnt.com/download/unifi/',
  TurnCredentialsApiEndpoint: '/api/airos/v1/unifi/turn/creds?username=',
  SSOAPIHostname: 'sso.ubnt.com',
  SSOAPIEndpoint: '/api/sso/v1/user/self',
  SsoRegisterUrl: 'https://account.ubnt.com/register',
  SsoOAuthUrl: 'https://sso.ubnt.com/oauth2',
  AccountHostname: 'account.ubnt.com',
  CsrfTokenUrlCheckEnabled: true,
  WebSocketEnabled: true,
  DebugInfoEnabled: false
};

window.unifiConstant = {
  GoogleMapsApiKey: 'AIzaSyDW1OnFXY2kzpH77F7fEB66WlkFRtKX3p4',
  GoogleAnalyticsCloudKey: 'UA-2432820-25',
  GoogleAnalyticsDemoKey: 'UA-2432820-49',
  VERSION: '5.9.29.0',
  ShopifyApiKey: '7dbfb8a49f454a553d4a17b8d22b0970',
  ShopifyAppId: '8',
  ShopifyDomain: 'store.ubnt.com'
};

window.webrtcConfig = {
  SignallingChannelHttpsEndpoint: '/api/airos/v1/unifi/devices/request/',
  SignallingChannelHttpsHost: 'https://device-airos.svc.ubnt.com',
  SignallingChannelWsEndpoint: '/api/airos/v1/unifi/events',
  SignallingChannelWsHost: 'wss://device-airos.svc.ubnt.com',
  SignallingChannelType: 'AWS',
  WebRtcStartAsCaller: true,
  WebRtcLegacyEngine: false,
  UseWebrtc: false,
  VersionCheckEnabled: false
};

window.unifiSharedConstant = {
  DISCOVERY_TOOL_KEY: 'hmpigflbjeapnknladcfphgkemopofig'
};

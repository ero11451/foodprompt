interface IAppConfig {
  BaseUrl?: string;
  AppName?: string;
  Token?: string
}

export const AppConfig: IAppConfig = {
  Token : localStorage.getItem('token'),
  BaseUrl: 'http://77.68.72.215/foodpt/public/api',
  AppName: 'Foodprompt'

};
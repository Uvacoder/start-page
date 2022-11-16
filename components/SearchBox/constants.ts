export type SearchEngine = 'stackoverflow' | 'google' | 'bing' | 'github';

export type SearchEngineDetail = {
  label: string;
  url: string;
  value: SearchEngine;
};

export const searchEngines: SearchEngineDetail[] = [
  {
    label: 'Stackoverflow',
    url: 'https://www.stackoverflow.com/search?q=',
    value: 'stackoverflow',
  },
  {
    label: 'Google',
    url: 'https://www.google.com/search?q=',
    value: 'google',
  },
  {
    label: 'Bing',
    url: 'https://cn.bing.com/search?q=',
    value: 'bing',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/search?q=',
    value: 'github',
  },
];

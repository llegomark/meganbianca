import { ChatInterface, ConfigInterface } from '@type/chat';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

export const defaultSystemMessage = `You are Megan Bianca, a large language model that assists users in generating text-based content on various topics. Your goal is to provide practical and informative guidance using advanced language processing abilities. Thank you for your assistance.

Knowledge Cut-off Date: September 2021
Current Date: ${dateString}`;

export const defaultChatConfig: ConfigInterface = {
  temperature: 1,
  presence_penalty: 0,
};

export const generateDefaultChat = (title?: string): ChatInterface => ({
  title: title ? title : 'New Chat',
  messages: [{ role: 'system', content: defaultSystemMessage }],
  config: { ...defaultChatConfig },
  titleSet: false,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];

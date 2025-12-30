import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';

export interface Social {
  name: string;
  url: string;
  icon: typeof Github;
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: Twitter
  },
  {
    name: 'Telegram',
    url: 'https://t.me/yourusername',
    icon: Send
  },
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: Mail
  }
];

export const email = 'your@email.com';

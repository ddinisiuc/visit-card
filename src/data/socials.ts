import { Github, Linkedin, Mail, Send } from 'lucide-react';

export interface Social {
  name: string;
  url: string;
  icon: typeof Github;
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/flaming-flow',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dinisiuc-daniil',
    icon: Linkedin
  },
  {
    name: 'Telegram',
    url: 'https://t.me/flaming_flow',
    icon: Send
  },
  {
    name: 'Email',
    url: 'mailto:ddinisiuc.web@gmail.com',
    icon: Mail
  }
];

export const email = 'ddinisiuc.web@gmail.com';

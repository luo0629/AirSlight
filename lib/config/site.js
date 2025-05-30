import { TfiYoutube } from 'react-icons/tfi';
import { FaRedditAlien, FaTiktok, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter, FaSquareThreads, FaWeixin } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiWechatChannelsLine } from 'react-icons/ri';

const baseSiteConfig = {
	name: 'inWind Landing Page Template',
	ogImage: 'https://landingpage.inwind.cn/logo.png',
	metadataBase: '/',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	}
};

export const SiteConfig = {
	en: {
		name: 'AirSight',
		ogImage: 'https://landingpage.inwind.cn/logo.png',
		metadataBase: '/',
		icons: {
			icon: '/air.png',
			shortcut: '/air.png',
			apple: '/air.png',
		},
	},
	zh: {
		name: 'AirSight',
		description: '这是一个免费、开源且功能强大的 saas 项目登陆页面模板，它将帮助您更快地启动。',
		url: 'https://landingpage.inwind.cn',
		ogImage: 'https://landingpage.inwind.cn/logo.png',
		metadataBase: '/',
		icons: {
			icon: '/air.png',
			shortcut: '/air.png',
			apple: '/air.png',
		},
	},
};

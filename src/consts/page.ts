const REPOSITORY = process.env.REPOSITORY ?? '';
const [userName, repositoryName] = REPOSITORY.split('/');

export const REPOSITORY_URL = `https://github.com/${REPOSITORY}`;
export const SITE_NAME = 'ボカロサムネ検索';
export const DESCRIPTION = 'ボカロ曲のサムネイルから曲を探せるWebアプリ';
export const SITE_URL = `https://${userName}.github.io/${repositoryName}`;
export const IMG_URL = `${SITE_URL}/ogp.png`;

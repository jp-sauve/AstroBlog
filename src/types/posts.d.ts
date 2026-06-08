export type PostFrontmatter = {
	layout: string;
	title: string;
	pubDate: string | Date;
	description: string;
	author: string;
	image: {
		url: string;
		alt: string;
	};
	tags: string[];
};

export type Post = {
	frontmatter: PostFrontmatter;
	url?: string;
};

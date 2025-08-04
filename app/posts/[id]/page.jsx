import { POSTS_MENUJU_URL } from "@/const";
import { formatDate } from "@/lib/formatDate";
import { ArrowLeft, CalendarDays, Share2, User } from "lucide-react";
import Link from "next/link";
import parse from "html-react-parser";

export async function generateMetadata({ params, searchParams }) {
    const id = (await params).id;
    const res = await fetch(`${POSTS_MENUJU_URL}/${id}`);
    const data = await res.json();
    const post = data.post;
    return {
        title: post.title,
        description: post.meta_description,
        openGraph: {
            title: post.title,
            description: post.meta_description,
            images: [
                {
                    url: post.image_url,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
        },
    };
}
const PostDetail = async ({ params, searchParams }) => {
    const dataParams = await searchParams;
    const currentPage = (await dataParams.page) || 1;
    const backToPostsHref = `/posts?page=${currentPage}`;
    const { id } = await params;
    const res = await fetch(`${POSTS_MENUJU_URL}/${id}`);
    const data = await res.json();
    const post = data.post;
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <div className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        scroll={false}
                        href={backToPostsHref}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Posts
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-card border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            {post.tags && post.tags.length > 0 && (
                                <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary/20">
                                    {post.tags[0]}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                            {post.title}
                        </h1>

                        {/* Author and Meta Info */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="font-medium">
                                        {post.author}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    {formatDate(post.published_at)}
                                </div>
                            </div>

                            {/* <div className="flex items-center gap-4">
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
                        <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 pb-12">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="prose prose-lg max-w-none
                       prose-headings:text-foreground prose-headings:font-bold
                       prose-p:text-foreground prose-p:leading-relaxed
                       prose-li:text-foreground
                       prose-strong:text-foreground
                       prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded
                       prose-pre:bg-muted prose-pre:border prose-pre:border-border"
                    >
                        {parse(post.content)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;

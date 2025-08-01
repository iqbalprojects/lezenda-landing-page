import { POSTS_MENUJU_URL } from "@/const";
import { formatDate } from "@/lib/formatDate";
import { CalendarDays, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Posts = async ({ searchParams }) => {
    const params = await searchParams;
    const currentPage = parseInt(await params.page) || 1;

    const apiUrl = `${POSTS_MENUJU_URL}?page=${currentPage}`;
    const response = await fetch(apiUrl, {
        next: { revalidate: 60 },
    });

    const data = await response.json();

    const posts = data?.posts?.data || [];
    const paginationLinks = data?.posts?.links || [];
    const currentPageNumber = data?.posts?.current_page || 1;

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4 text-foreground">
                            Latest Posts
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Discover insightful articles about web development,
                            technology, and best practices
                        </p>
                    </div>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="container mx-auto px-4 py-8">
                {posts.length === 0 ? (
                    <div className="text-center text-muted-foreground py-10">
                        No posts found.
                    </div>
                ) : (
                    <>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <Link
                                    href={`/posts/${post.path}?page=${currentPage}`}
                                    key={post.id}
                                    className="group bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="aspect-video bg-muted rounded-t-lg mb-4 overflow-hidden">
                                        {post.image_url ? (
                                            <Image
                                                src={post.image_url} // Fallback image
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                width={400}
                                                height={300}
                                            />
                                        ) : (
                                            <div className="bg-neutral-200 w-full h-full flex justify-center">
                                                <Image
                                                    src="/noimage.svg"
                                                    alt="noimage"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 pb-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            {post.tags &&
                                                post.tags.length > 0 && (
                                                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary/20">
                                                        {post.tags[0]}{" "}
                                                        {/* Display only the first tag */}
                                                    </span>
                                                )}
                                        </div>
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                                            <span>{post.title}</span>
                                        </h3>
                                        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="px-6 pt-0">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CalendarDays className="h-4 w-4" />
                                                {formatDate(post.published_at)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 pt-4">
                                        <div className="flex items-center justify-between w-full">
                                            <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                                                Read More
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination Section */}
                        <div className="flex justify-center mt-10 space-x-2">
                            {paginationLinks.map((link, index) => {
                                // Extract page number from URL if label is Next/Prev
                                let pageNumber = link.label;
                                if (link.url) {
                                    const url = new URL(link.url);
                                    pageNumber =
                                        url.searchParams.get("page") ||
                                        link.label;
                                }

                                // Skip if the URL is null (e.g., prev_page_url on first page)
                                if (
                                    !link.url &&
                                    (link.label.includes("Previous") ||
                                        link.label.includes("Next"))
                                ) {
                                    return (
                                        <span
                                            key={index}
                                            className="px-4 py-2 rounded-md border border-input bg-background text-muted-foreground cursor-not-allowed opacity-50"
                                        >
                                            {link.label === "&laquo; Previous"
                                                ? "« Prev"
                                                : link.label === "Next &raquo;"
                                                ? "Next »"
                                                : link.label}
                                        </span>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={
                                            link.url
                                                ? link.url.replace(
                                                      POSTS_MENUJU_URL,
                                                      "/posts"
                                                  )
                                                : "#"
                                        } // Replace API base URL with local route
                                        className={`px-4 py-2 rounded-md transition-colors duration-200
                                            ${
                                                link.active ||
                                                (link.url &&
                                                    new URL(
                                                        link.url
                                                    ).searchParams.get(
                                                        "page"
                                                    ) == currentPageNumber) // Correctly highlight active page
                                                    ? "bg-primary text-primary-foreground font-semibold"
                                                    : "bg-card border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                                            }
                                            ${
                                                !link.url &&
                                                (link.label.includes(
                                                    "Previous"
                                                ) ||
                                                    link.label.includes(
                                                        "Next"
                                                    ) ||
                                                    parseInt(link.label)) // Disable inactive prev/next buttons
                                                    ? "cursor-not-allowed opacity-50"
                                                    : ""
                                            }`}
                                        aria-current={
                                            link.active ? "page" : undefined
                                        }
                                    >
                                        {/* Decode HTML entities for Previous and Next labels */}
                                        {link.label === "&laquo; Previous"
                                            ? "« Prev"
                                            : link.label === "Next &raquo;"
                                            ? "Next »"
                                            : link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Posts;
